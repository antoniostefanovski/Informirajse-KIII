using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Domain.Models
{
    public class Comment : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }

        public string Description { get; set; } = string.Empty;

        public DateTime CreatedDate { get; set; }

        public Guid BlogId { get; set; }

        public virtual Blog? Blog { get; set; }

        public Guid UserId { get; set; }

        public virtual User? User { get; set; }
    }
}
