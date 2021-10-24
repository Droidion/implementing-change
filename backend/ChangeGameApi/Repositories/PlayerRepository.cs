namespace ChangeGameApi.Repositories;

using Types;
using Dapper;
using Npgsql;

/// <summary>
/// Persistence management for players
/// </summary>
public class PlayerRepository : IPlayerRepository
{
    private readonly string _connString = Environment.GetEnvironmentVariable(Constants.PgConnString) ?? "";

    public async Task<IEnumerable<Player>> GetPlayers()
    {
        const string sql =
            "select p.id Id, p.team Team, p.pin Pin, g.id GameId from players p join games g on p.game_id = g.id where g.is_active = true order by p.team";
        await using var connection = new NpgsqlConnection(_connString);
        var players = await connection.QueryAsync<Player>(sql);
        return players ?? Array.Empty<Player>();
    }

    public async Task<Player?> GetPlayerByPin(string pin)
    {
        const string sql =
            "SELECT p.id Id, p.team Team, p.pin Pin, p.game_id GameId FROM players p JOIN games g ON g.id = p.game_id AND g.is_active = true WHERE p.pin=@Pin";
        await using var connection = new NpgsqlConnection(_connString);
        return await connection.QuerySingleOrDefaultAsync<Player>(sql, new { Pin = pin });
    }

    public async Task InsertPlayers(IEnumerable<Player> players)
    {
        const string sql =
            "insert into players (team, game_id, pin) values (@Team, @GameId, @Pin)";
        await using var connection = new NpgsqlConnection(_connString);
        await connection.ExecuteAsync(sql, players);
    }
}