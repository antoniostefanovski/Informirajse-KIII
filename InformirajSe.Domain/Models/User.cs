using InformirajSe.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Domain.Models
{
    public class User : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }

        public string UserName { get; set; } = string.Empty;

        public string Name { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;

        public DateTime DateOfBirth { get; set; }

        public UserRole Role { get; set; }

        public string Gender { get; set; } = string.Empty;

        public virtual List<Blog>? Blogs { get; set; }

        public virtual List<Comment>? Comments { get; set; }
    }
}
