namespace ChangeGameApi.Models;

public record AuthenticatedAdmin(string Name, string Login, string AccessToken, string CentrifugoToken);