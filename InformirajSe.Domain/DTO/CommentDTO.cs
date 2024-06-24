using InformirajSe.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Domain.DTO
{
    public class CommentDTO
    {
        public Guid Id { get; set; }

        public string Description { get; set; } = string.Empty;

        public DateTime CreatedDate { get; set; }

        public Blog? Blog { get; set; }

        public User? User { get; set; }
    }
}
