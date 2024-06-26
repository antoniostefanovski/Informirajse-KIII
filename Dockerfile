FROM mcr.microsoft.com/dotnet/sdk:8.0 as build

WORKDIR /src
COPY . .

RUN dotnet publish "./InformirajSe.Web/InformirajSe.Web.csproj" -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /build
COPY --from=build /app .

EXPOSE 8080/tcp

ENTRYPOINT [ "dotnet", "/build/InformirajSe.Web.dll" ]