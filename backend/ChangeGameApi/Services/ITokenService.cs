namespace ChangeGameApi.Services;

/// <summary>
/// Business logic for working with tokens.
/// </summary>
public interface ITokenService
{
    /// <summary>
    /// Generates new access token (JWT) for given player parameters
    /// </summary>
    /// <param name="userId">User's Id in the database</param>
    /// <param name="team">User's team number</param>
    /// <param name="role">User role, like "player" or "admin"</param>
    /// <returns>JWT</returns>
    string GenerateAccessToken(int userId, int team, string role);
    
    /// <summary>
    /// Generates new Centrifugo token (JWT) for given user role to be used in real-time messaging
    /// </summary>
    /// <param name="role">User role, like "player" or "admin"</param>
    /// <returns>JWT</returns>
    string GenerateCentrifugoToken(string role);
}