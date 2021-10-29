namespace ChangeGameApi.Helpers;

using dotenv.net.Utilities;
using Types;

/// <summary>
/// Helpers for working with environment variables
/// </summary>
public static class EnvOptionsHelper
{
    /// <summary>
    /// Loads and parses environment variables from .env file.
    /// </summary>
    /// <returns>Statically typed environment variables.</returns>
    public static EnvOptions LoadEnv()
    {
        return new EnvOptions(
            Read("POSTGRES_CONNECTION_STRING"), 
            Read("SENTRY_URL"), 
            Read("JWT_SECRET"), 
            Read("CENTRIFUGO_SECRET"));
    }

    /// <summary>
    /// Reads environment variable value by key.
    /// </summary>
    /// <param name="key">Key.</param>
    /// <returns>Value.</returns>
    private static string Read(string key)
    {
        return EnvReader.GetStringValue(key);
    }
}