using InformirajSe.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Service.Interfaces
{
    public interface ISessionService
    {
        public Session GetById(Guid id);

        public Session InsertSession(Session session);

        public void DeleteSession(Guid id);
    }
}
