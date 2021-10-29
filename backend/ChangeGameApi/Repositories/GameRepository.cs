namespace ChangeGameApi.Repositories;

using Types;
using Dapper;
using Npgsql;

/// <summary>
/// Persistence management for game sessions.
/// </summary>
public class GameRepository : IGameRepository
{
    private readonly EnvOptions _envOptions;

    public GameRepository(EnvOptions envOptions)
    {
        _envOptions = envOptions;
    }

    public async Task<int?> CreateGame()
    {
        const string sql =
            "INSERT INTO games (creation_date, is_active) VALUES (now(), true) RETURNING id";
        await using var connection = new NpgsqlConnection(_envOptions.PostgresConnectionString);
        var gameId = await connection.QueryFirstAsync<int>(sql);
        return gameId;
    }

    public async Task SetAllGamesAsInactive()
    {
        const string sql = "UPDATE games SET is_active = false";
        await using var connection = new NpgsqlConnection(_envOptions.PostgresConnectionString);
        await connection.ExecuteAsync(sql);
    }
    
    public async Task SetLatestGameAsActive()
    {
        const string sql = "UPDATE games SET is_active = true WHERE id = (SELECT id FROM games ORDER BY creation_date DESC LIMIT 1)";
        await using var connection = new NpgsqlConnection(_envOptions.PostgresConnectionString);
        await connection.ExecuteAsync(sql);
    }
}