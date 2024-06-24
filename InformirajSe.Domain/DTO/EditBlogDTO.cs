using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Domain.DTO
{
    public class EditBlogDTO : AddBlogDTO
    {
        public Guid Id { get; set; }
    }
}
