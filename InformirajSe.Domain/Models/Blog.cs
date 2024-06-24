using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Domain.Models
{
    public class Blog : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public string ContentBody { get; set; } = string.Empty;

        public DateTime DateCreated { get; set; } = DateTime.UtcNow;

        public Guid UserId { get; set; }

        public virtual User? User { get; set; }

        public virtual List<Comment>? Comments { get; set; }
    }
}
