using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Domain.DTO
{
    public class SearchDTO
    {
        public string author { get; set; } = string.Empty;

        public string from { get; set; } = string.Empty;

        public string to { get; set; } = string.Empty;
    }
}
