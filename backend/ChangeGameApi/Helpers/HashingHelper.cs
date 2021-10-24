namespace ChangeGameApi.Helpers;

/// <summary>
/// Helpers for working with hashing.
/// </summary>
public static class HashingHelper
{
    /// <summary>
    /// Hashes the password.
    /// </summary>
    /// <param name="password">Password to hash.</param>
    /// <returns>Hashed password.</returns>
    public static string HashPassword(string password)
    {
        return BCrypt.Net.BCrypt.EnhancedHashPassword(password);
    }

    /// <summary>
    /// Verifies that plain password and hashed password are the same password.
    /// </summary>
    /// <param name="password">Plain password.</param>
    /// <param name="hash">Hashed password.</param>
    /// <returns>Are passwords the same.</returns>
    public static bool VerifyHash(string password, string hash)
    {
        return BCrypt.Net.BCrypt.EnhancedVerify(password, hash);
    }

    /// <summary>
    /// Generates pseudo random digital pin code
    /// </summary>
    /// <returns>Pin code</returns>
    public static string GeneratePin()
    {
        return new Random().Next(100000, 999999).ToString("D6");
    }
}