FROM mcr.microsoft.com/dotnet/aspnet:6.0.0-alpine3.14-amd64 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0.100-alpine3.14-amd64 AS build
WORKDIR /src
COPY ["ChangeGameApi/ChangeGameApi.csproj", "ChangeGameApi/"]
RUN dotnet restore "ChangeGameApi/ChangeGameApi.csproj"
COPY . .
WORKDIR "/src/ChangeGameApi"
RUN dotnet build "ChangeGameApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ChangeGameApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ChangeGameApi.dll"]
