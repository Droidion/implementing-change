namespace ChangeGameApi.Services;

using Helpers;
using Repositories;
using Types;
using Microsoft.AspNetCore.Authorization;

/// <summary>
/// Business logic for authenticating users
/// </summary>
[AllowAnonymous]
public class AuthService : IAuthService
{
    private readonly IPlayerRepository _playerRepository;
    private readonly IAdminRepository _adminRepository;
    private readonly ISignInRepository _signInRepository;
    private readonly ITokenService _tokenService;

    public AuthService(IPlayerRepository playerRepository, IAdminRepository adminRepository, ISignInRepository signInRepository, ITokenService tokenService)
    {
        _playerRepository = playerRepository;
        _adminRepository = adminRepository;
        _tokenService = tokenService;
        _signInRepository = signInRepository;
    }

    public async Task<AuthenticatedAdmin?> AuthenticateAdmin(string login, string password)
    {
        var admin = await _adminRepository.GetAdminByLogin(login);
        if (admin == null || !HashingHelper.VerifyHash(password, admin.Password)) return null;
        var accessToken = _tokenService.GenerateAccessToken(admin.Id ?? 0, 0, Constants.Admin);
        var centrifugoToken = _tokenService.GenerateCentrifugoToken(Constants.Admin);
        return new AuthenticatedAdmin(admin.Name, admin.Login, accessToken, centrifugoToken);
    }

    public async Task<AuthenticatedPlayer?> AuthenticatePlayer(string pin)
    {
        var player = await _playerRepository.GetPlayerByPin(pin);
        if (player == null) return null;
        var token = _tokenService.GenerateAccessToken(player.Id ?? 0, player.Team, Constants.Player);
        await _signInRepository.LogSignIn(player.Id.GetValueOrDefault());
        return new AuthenticatedPlayer(player.Team, token);
    }
}