using InformirajSe.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Domain.DTO
{
    public class BlogDTO
    {
        public Blog? Blog { get; set; }

        public Guid? CurrentUserId { get; set; }
    }
}
