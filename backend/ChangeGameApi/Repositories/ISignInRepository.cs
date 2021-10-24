namespace ChangeGameApi.Repositories;

public interface ISignInRepository
{
    Task LogSignIn(int playerId);
}