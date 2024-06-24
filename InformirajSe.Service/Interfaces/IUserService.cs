using InformirajSe.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Service.Interfaces
{
    public interface IUserService
    {
        public List<User> GetAllUsers();

        public User GetById(Guid id);

        public User Register (string username, string email, string password, string repeatedPassword, string name, DateTime dateOfBirth, string gender);

        public User? Login(string username, string password); 

        public User UpdateUser (User user);

        public void DeleteUser (Guid id);

    }
}
