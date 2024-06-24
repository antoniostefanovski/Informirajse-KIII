using InformirajSe.Domain.Models;
using InformirajSe.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Repository.Implementation
{
    public class UserRepository : Repository<User>, IUserRepository
    {

        private readonly InformirajseDbContext dbContext;

        public UserRepository(InformirajseDbContext dbContext)
            : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public User GetUserByUsername(string username)
        {
            return dbContext.Users.FirstOrDefault(x => x.UserName == username);
        }
    }
}
