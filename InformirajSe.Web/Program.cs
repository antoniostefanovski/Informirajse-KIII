
using InformirajSe.Repository;
using InformirajSe.Web.Infrastructure.Startup;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace InformirajSe.Web
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.ConfigureServices();

            builder.Services.AddDbContext<InformirajseDbContext>(options =>
                options.UseNpgsql(builder.Configuration.GetConnectionString("InformirajseDbConnection")), ServiceLifetime.Transient, ServiceLifetime.Singleton);

            builder.Services
                .AddControllers()
                .AddNewtonsoftJson(options =>
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            if(app.Environment.IsDevelopment())
            {
                app.UseCors("AllowLocalhost3000");
            }

            var dbContext = app.Services.GetRequiredService<InformirajseDbContext>();

            if (dbContext.GetPendingMigrations().Any())
            {
                await dbContext.Database.MigrateAsync();
            }

            app.UseAuthorization();


            app.MapControllers();

            // added but dont know why might delete later
            app.UseExceptionHandler("/api/error/home");

            await app.RunAsync();
        }
    }
}
