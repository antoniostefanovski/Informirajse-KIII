using InformirajSe.Domain.DTO;
using InformirajSe.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Service.Interfaces
{
    public interface ICommentService
    {
        public List<CommentDTO> GetAllComments(Guid blogId);

        public Comment GetById(Guid id);

        public Comment AddNewComment(AddCommentDTO commentDTO);

        public Comment UpdateComment(Comment comment);

        public void DeleteComment(Guid id);
    }
}
