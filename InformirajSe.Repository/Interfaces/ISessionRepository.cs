using InformirajSe.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Repository.Interfaces
{
    public interface ISessionRepository : IRepository<Session>
    {
        User GetSessionUser(Guid id);
    }
}
