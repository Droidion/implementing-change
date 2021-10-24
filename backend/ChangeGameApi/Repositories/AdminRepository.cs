namespace ChangeGameApi.Repositories;

using Types;
using Dapper;
using Npgsql;

/// <summary>
/// Persistence management for admins
/// </summary>
public class AdminRepository : IAdminRepository
{
    private readonly string _connString = Environment.GetEnvironmentVariable(Constants.PgConnString) ?? "";

    public async Task<Admin?> GetAdminByLogin(string login)
    {
        const string sql =
            "SELECT id Id, name Name, login Login, password Password FROM admins WHERE login=@Login";
        await using var connection = new NpgsqlConnection(_connString);
        return await connection.QuerySingleOrDefaultAsync<Admin>(sql, new { Login = login });
    }
}