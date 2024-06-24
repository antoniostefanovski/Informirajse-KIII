using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Domain.Models
{
    public interface BaseEntity
    {
        Guid Id { get; set; }
    }
}
