namespace ChangeGameApi.Types;

using JetBrains.Annotations;

[UsedImplicitly]
public record Player(int? Id, int Team, string Pin, int GameId);

[UsedImplicitly]
public record Admin(int? Id, string Name, string Login, string Password);

[UsedImplicitly]
public record AuthenticatedPlayer(int Team, string AccessToken);

[UsedImplicitly]
public record AuthenticatedAdmin(string Name, string Login, string AccessToken, string CentrifugoToken);

[UsedImplicitly]
public record Progress(int PlayerId, int Team, int Day, int Approval, int Period);