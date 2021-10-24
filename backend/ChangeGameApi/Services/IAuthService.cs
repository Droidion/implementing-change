namespace ChangeGameApi.Services;

using Types;

/// <summary>
/// Business logic for authenticating users
/// </summary>
public interface IAuthService
{
    /// <summary>
    /// Authenticates admin and generates JWT
    /// </summary>
    /// <param name="login">Admin's login</param>
    /// <param name="password">Admin's password</param>
    /// <returns>Admin credentials and JWT</returns>
    Task<AuthenticatedAdmin?> AuthenticateAdmin(string login, string password);

    /// <summary>
    /// Authenticates player and generates JWT
    /// </summary>
    /// <param name="pin">Player's pin code</param>
    /// <returns>Player credentials and JWT</returns>
    Task<AuthenticatedPlayer?> AuthenticatePlayer(string pin);
}