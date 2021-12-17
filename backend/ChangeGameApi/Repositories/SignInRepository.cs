
namespace ChangeGameApi.Repositories;

using Models;
using Dapper;
using Npgsql;

public class SignInRepository : ISignInRepository
{
    private readonly EnvOptions _envOptions;

    public SignInRepository(EnvOptions envOptions)
    {
        _envOptions = envOptions;
    }
    
    public async Task LogSignIn(int playerId)
    {
        const string sql =
            "INSERT INTO signins (player_id, timestamp) VALUES (@PlayerId, now())";
        await using var connection = new NpgsqlConnection(_envOptions.PostgresConnectionString);
        await connection.ExecuteAsync(sql, new { PlayerId = playerId });
    }
}