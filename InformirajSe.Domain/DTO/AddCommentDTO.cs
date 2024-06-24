using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Domain.DTO
{
    public class AddCommentDTO
    {
        public string Comment { get; set; } = string.Empty;

        public Guid BlogId { get; set; }
    }
}
