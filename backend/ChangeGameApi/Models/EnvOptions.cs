namespace ChangeGameApi.Models;

public record EnvOptions(string PostgresConnectionString, string SentryUrl, string JwtSecret, string CentrfugoSecret);