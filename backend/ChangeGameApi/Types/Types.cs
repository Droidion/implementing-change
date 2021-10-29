namespace ChangeGameApi.Types;

public record Player(int? Id, int Team, string Pin, int GameId);

public record Admin(int? Id, string Name, string Login, string Password);

public record AuthenticatedPlayer(int Team, string AccessToken);

public record AuthenticatedAdmin(string Name, string Login, string AccessToken, string CentrifugoToken);

public record Progress(int PlayerId, int Team, int Day, int Approval, int Period);

public record EnvOptions(string PostgresConnectionString, string SentryUrl, string JwtSecret, string CentrfugoSecret);