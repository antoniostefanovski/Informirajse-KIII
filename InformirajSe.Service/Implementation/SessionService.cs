using InformirajSe.Domain.Models;
using InformirajSe.Repository.Interfaces;
using InformirajSe.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Service.Implementation
{
    public class SessionService : ISessionService
    {
        private readonly IRepository<Session> repository;

        public SessionService(IRepository<Session> repository)
        {
            this.repository = repository;
        }

        public void DeleteSession(Guid id)
        {
            var session = this.GetById(id);

            repository.Delete(session);
        }

        public Session GetById(Guid id)
        {
            return repository.Get(id);
        }

        public Session InsertSession(Session session)
        {
            return repository.Insert(session);
        }
    }
}
