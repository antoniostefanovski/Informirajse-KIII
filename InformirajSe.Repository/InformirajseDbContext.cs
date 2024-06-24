using InformirajSe.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Repository
{
    public class InformirajseDbContext : DbContext
    {
        public InformirajseDbContext(DbContextOptions<InformirajseDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        public DbSet<Session> Sessions { get; set; }

        public DbSet<Blog> Blogs { get; set; }

        public DbSet<Comment> Comments { get; set; }
    }
}
