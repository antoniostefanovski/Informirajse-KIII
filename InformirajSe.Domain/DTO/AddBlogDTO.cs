using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Domain.DTO
{
    public class AddBlogDTO
    {
        public string Title { get; set; } = string.Empty;
        public string BodyContent { get; set; } = string.Empty;
    }
}
