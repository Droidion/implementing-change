namespace ChangeGameApi.Services;

using Types;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

/// <summary>
/// Business logic for working with tokens
/// </summary>
public class TokenService : ITokenService
{
    private readonly EnvOptions _envOptions;

    public TokenService(EnvOptions envOptions)
    {
        _envOptions = envOptions;
    }

    public string GenerateAccessToken(int userId, int team, string role)
    {
        return GenerateToken(CreateClaimsForAccessToken(userId, team, role), _envOptions.JwtSecret);
    }

    public string GenerateCentrifugoToken(string role)
    {
        return GenerateToken(GetClaimsForCentrifugoToken(role), _envOptions.CentrfugoSecret);
    }

    /// <summary>
    /// Creates claims for access token
    /// </summary>
    /// <param name="userId">User Id</param>
    /// <param name="team">User's team number</param>
    /// <param name="role">User's role</param>
    /// <returns>Set of claims for access token</returns>
    private static ClaimsIdentity CreateClaimsForAccessToken(int userId, int team, string role)
    {
        return new ClaimsIdentity(new[]
        {
            new Claim("UserId", userId.ToString()),
            new Claim("Team", team.ToString()),
            new Claim(ClaimTypes.Role, role),
        });
    }

    /// <summary>
    /// Creates claims for Centrifugo token
    /// </summary>
    /// <param name="role">User's role</param>
    /// <returns>Set of claims for Centrifugo token</returns>
    private static ClaimsIdentity GetClaimsForCentrifugoToken(string role)
    {
        return new ClaimsIdentity(new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, role),
        });
    }

    /// <summary>
    /// Reusable logic for generating token
    /// </summary>
    /// <param name="claims">Set of claims</param>
    /// <param name="secret">Secret to encode the token</param>
    /// <returns>JWT</returns>
    private static string GenerateToken(ClaimsIdentity claims, string secret)
    {
        var jwtTokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(secret);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = claims,
            Expires = DateTime.UtcNow.AddHours(48),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha512Signature)
        };
        var token = jwtTokenHandler.CreateToken(tokenDescriptor);
        var jwtToken = jwtTokenHandler.WriteToken(token);
        return jwtToken;
    }
}