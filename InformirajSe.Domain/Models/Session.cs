using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Domain.Models
{
    public class Session : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }

        public Guid? UserId { get; set; }

        public virtual User? User { get; set; }

        public DateTime ExpiryBy { get; set; }

        public Session()
        {
            ExpiryBy = DateTime.UtcNow.AddHours(2);
        }
    }
}
