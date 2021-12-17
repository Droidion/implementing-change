
namespace ChangeGameApi.Repositories;

using Models;

/// <summary>
/// Persistence management for admins
/// </summary>
public interface IAdminRepository
{
    /// <summary>
    /// Retrieves from database admin by their login
    /// </summary>
    /// <param name="login">Admin's login</param>
    /// <returns>Admin</returns>
    Task<Admin?> GetAdminByLogin(string login);
}