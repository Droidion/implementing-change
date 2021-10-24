using Dapper;
using Npgsql;

namespace ChangeGameApi.Repositories;

public class SignInRepository : ISignInRepository
{
    private readonly string _connString = Environment.GetEnvironmentVariable(Constants.PgConnString) ?? "";
    
    public async Task LogSignIn(int playerId)
    {
        const string sql =
            "INSERT INTO signins (player_id, timestamp) VALUES (@PlayerId, now())";
        await using var connection = new NpgsqlConnection(_connString);
        await connection.ExecuteAsync(sql, new { PlayerId = playerId });
    }
}