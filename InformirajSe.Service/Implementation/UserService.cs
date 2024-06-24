using InformirajSe.Domain.Enums;
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
    public class UserService : IUserService
    {
        private readonly IUserRepository repository;

        public UserService(IUserRepository repository)
        {
            this.repository = repository;
        }

        public void DeleteUser(Guid id)
        {
            var user = this.GetById(id);

            repository.Delete(user);
        }

        public List<User> GetAllUsers()
        {
            return repository.GetAll().ToList();
        }

        public User GetById(Guid id)
        {
            return repository.Get(id);
        }

        public User? Login(string username, string password)
        {
            var user = repository.GetUserByUsername(username);

            if(user != null && user.Password.Equals(password)) 
            {
                return user;
            }

            return null;
        }

        public User Register(string username, string email, string password, string repeatedPassword, string name, DateTime dateOfBirth, string gender)
        {
            if(string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                throw new ArgumentNullException("Username or password cannot be null or empty");
            }

            if(!password.Equals(repeatedPassword))
            {
                throw new ArgumentException("Passwords do not match");
            }

            var existingUser = repository.GetUserByUsername(username);

            if(existingUser != null)
            {
                throw new ArgumentException(@"User with username {0} already exists", username);
            }

            var user = new User
            {
                UserName = username,
                Email = email,
                Password = password,
                Name = name,
                DateOfBirth = dateOfBirth.ToUniversalTime(),
                Role = UserRole.User,
                Gender = gender
            };

            repository.Insert(user);

            return user;
        }

        public User UpdateUser(User user)
        {
            return repository.Update(user);
        }
    }
}
