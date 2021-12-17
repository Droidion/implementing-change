
namespace ChangeGameApi.Repositories;

using Models;
using Dapper;
using Npgsql;

/// <summary>
/// Persistence management for admins
/// </summary>
public class AdminRepository : IAdminRepository
{
    private readonly EnvOptions _envOptions;

    public AdminRepository(EnvOptions envOptions)
    {
        _envOptions = envOptions;
    }

    public async Task<Admin?> GetAdminByLogin(string login)
    {
        const string sql =
            "SELECT id Id, name Name, login Login, password Password FROM admins WHERE login=@Login";
        await using var connection = new NpgsqlConnection(_envOptions.PostgresConnectionString);
        return await connection.QuerySingleOrDefaultAsync<Admin>(sql, new { Login = login });
    }
}