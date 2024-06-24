using InformirajSe.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Repository.Interfaces
{
    public interface IUserRepository : IRepository<User>
    {
        User GetUserByUsername(string username);
    }
}
