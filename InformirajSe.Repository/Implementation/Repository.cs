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
    public class Repository<T> : IRepository<T> where T : class, BaseEntity
    {
        private readonly InformirajseDbContext dbContext;

        private readonly DbSet<T> entities;

        public Repository(InformirajseDbContext dbContext)
        {
            this.dbContext = dbContext;
            this.entities = dbContext.Set<T>();
        }

        public T Delete(T entity)
        {
            if(entity == null)
            {
                throw new ArgumentNullException(entity + " does not exist");
            }

            entities.Remove(entity);
            dbContext.SaveChanges();

            return entity;
        }

        public T Get(Guid? id)
        {
            if (typeof(T).IsAssignableFrom(typeof(Session)))
            {
                return entities
                        .Include("User")
                        .FirstOrDefault(x => x.Id == id);
            }

            else if (typeof(T).IsAssignableFrom(typeof(Blog)))
            {
                return entities
                            .Include("User")
                            .FirstOrDefault(x => x.Id == id);
            }

            return entities.FirstOrDefault(x => x.Id == id);
        }

        public IQueryable<T> GetAll()
        {
            if(typeof(T).IsAssignableFrom(typeof(User)))
            {
                return entities
                            .Include("Blogs")
                            .Include("Comments")
                            .AsQueryable();
            }

            else if (typeof(T).IsAssignableFrom(typeof(Blog)))
            {
                return entities
                            .Include("User")
                            .Include("Comments")
                            .AsQueryable();
            }

            else if(typeof(T).IsAssignableFrom(typeof(Comment)))
            {
                return entities
                            .Include("User")
                            .Include("Blog")
                            .AsQueryable();
            }
            else
            {
                return entities.AsQueryable();
            }
        }

        public T Insert(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(entity + " does not exist");
            }

            entities.Add(entity);
            dbContext.SaveChanges();

            return entity;
        }

        public T Update(T entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException(entity + " does not exist");
            }

            entities.Update(entity);
            dbContext.SaveChanges();

            return entity;
        }
    }
}
