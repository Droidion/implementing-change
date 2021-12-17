namespace ChangeGameApi.Repositories;

using Models;
using Dapper;
using Npgsql;

/// <summary>
/// Persistence management for game progress
/// </summary>
public class ProgressRepository : IProgressRepository
{
    private readonly EnvOptions _envOptions;

    public ProgressRepository(EnvOptions envOptions)
    {
        _envOptions = envOptions;
    }
    
    public async Task InsertProgress(Progress progress)
    {
        const string sql =
            "INSERT INTO progress (player_id, timestamp, day, approval, period) VALUES (@PlayerId, now(), @Day, @Approval, @Period)";
        await using var connection = new NpgsqlConnection(_envOptions.PostgresConnectionString);
        await connection.ExecuteAsync(sql, new
        {
            PlayerId = progress.PlayerId,
            Day = progress.Day,
            Approval = progress.Approval,
            Period = progress.Period
        });
    }

    public async Task<IEnumerable<Progress>> ListProgressesForActiveGame()
    {
        const string sql =
            @"SELECT DISTINCT ON(pl.team)
                 pr.player_id PlayerId, pl.team, pr.day, pr.approval, pr.period
            FROM progress pr
                JOIN players pl ON pr.player_id = pl.id
                JOIN games g ON pl.game_id = g.id
                LEFT JOIN signins s ON pl.id = s.player_id
            WHERE g.is_active = true
            ORDER BY pl.team, pr.timestamp DESC;";
        await using var connection = new NpgsqlConnection(_envOptions.PostgresConnectionString);
        var progresses = await connection.QueryAsync<Progress>(sql);
        return progresses ?? Array.Empty<Progress>();
    }
}