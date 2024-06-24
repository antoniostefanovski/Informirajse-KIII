using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Domain.DTO
{
    public class RegisterDTO
    {
        public string UserName { get; set; } = string.Empty;

        public string FullName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;

        public string RepeatedPassword { get; set; } = string.Empty;

        public string Gender { get; set; } = string.Empty;

        public DateTime DateOfBirth { get; set; }

    }
}
