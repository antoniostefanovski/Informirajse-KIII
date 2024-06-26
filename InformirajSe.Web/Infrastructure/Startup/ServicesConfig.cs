using InformirajSe.Repository.Implementation;
using InformirajSe.Repository.Interfaces;
using InformirajSe.Service.Implementation;
using InformirajSe.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace InformirajSe.Web.Infrastructure.Startup
{
    public static class ServicesConfig
    {
        public static IServiceCollection ConfigureServices(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowLocalhost3000",
                    builder => builder
                                     .WithOrigins("http://localhost:3000")
                                     .AllowAnyMethod()
                                     .AllowAnyHeader()
                                     .AllowCredentials());
                options.AddPolicy("AllowProduction",
                    builder => builder
                                     .WithOrigins("http://informirajse.mk")
                                     .AllowAnyMethod()
                                     .AllowAnyHeader()
                                     .AllowCredentials());
            });

            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddScoped(typeof(IUserRepository), typeof(UserRepository));
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<ISessionService, SessionService>();
            services.AddScoped<IBlogService, BlogService>();
            services.AddScoped<ICommentService, CommentService>();

            return services;
        }

        public static IEnumerable<string> GetPendingMigrations(this DbContext dbContext)
        {
            try
            {
                return dbContext.Database.GetPendingMigrations();
            }
            catch
            {
                return Enumerable.Empty<string>();
            }
        }
    }
}
