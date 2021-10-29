using System.Text;
using ChangeGameApi.Helpers;
using ChangeGameApi.Repositories;
using ChangeGameApi.Services;
using dotenv.net;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Serilog;
using Serilog.Events;

DotEnv.Load();
Dapper.DefaultTypeMap.MatchNamesWithUnderscores = true;
var envOptions = EnvOptionsHelper.LoadEnv();

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.Console()
    .WriteTo.Sentry(o =>
    {
        o.Dsn = envOptions.SentryUrl;
        // Debug and higher are stored as breadcrumbs (default is Information)
        o.MinimumBreadcrumbLevel = LogEventLevel.Debug;
        // Warning and higher is sent as event (default is Error)
        o.MinimumEventLevel = LogEventLevel.Warning;
    })
    .WriteTo.File("Logs/change-game.txt", rollingInterval: RollingInterval.Day)
    .MinimumLevel.Override("Microsoft.AspNetCore", LogEventLevel.Warning)
    .CreateLogger();

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddTransient<IPlayerRepository, PlayerRepository>();
builder.Services.AddTransient<IAdminRepository, AdminRepository>();
builder.Services.AddTransient<IGameRepository, GameRepository>();
builder.Services.AddTransient<IProgressRepository, ProgressRepository>();
builder.Services.AddTransient<ISignInRepository, SignInRepository>();
builder.Services.AddTransient<ITokenService, TokenService>();
builder.Services.AddTransient<IAuthService, AuthService>();
builder.Services.AddTransient<IGameService, GameService>();
builder.Services.AddTransient<IProgressService, ProgressService>();
builder.Services.AddTransient<IPlayerService, PlayerService>();
builder.Services.AddSingleton(envOptions);
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        b =>
        {
            b.AllowAnyOrigin();
            b.AllowAnyMethod();
            b.AllowAnyHeader();
        });
});
builder.Services.AddControllers();
builder.Services.AddAuthorization();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(opt =>
{
    opt.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(envOptions.JwtSecret))
    };
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Host.ConfigureLogging((_, logging) =>
{
    logging.ClearProviders();
});
builder.Host.UseSerilog();


var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.UseSerilogRequestLogging();
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();