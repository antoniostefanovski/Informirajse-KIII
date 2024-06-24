using InformirajSe.Common.Models;
using InformirajSe.Domain.DTO;
using InformirajSe.Domain.Models;
using InformirajSe.Repository.Interfaces;
using InformirajSe.Service.Interfaces;

namespace InformirajSe.Service.Implementation
{
    public class CommentService : ICommentService
    {
        private readonly IRepository<Comment> repository;

        public CommentService(IRepository<Comment> repository)
        {
            this.repository = repository;
        }

        public Comment AddNewComment(AddCommentDTO commentDTO)
        {
            var comment = new Comment
            {
                Description = commentDTO.Comment,
                CreatedDate = DateTime.UtcNow,
                BlogId = commentDTO.BlogId,
                UserId = UserProfile.Session.User!.Id
            };

            return repository.Insert(comment);
        }

        public void DeleteComment(Guid id)
        {
            var comment = this.GetById(id);

            if(UserProfile.Session?.User?.Id == comment.User!.Id)
            {
                throw new Exception();
            }

            repository.Delete(comment);
        }

        public List<CommentDTO> GetAllComments(Guid blogId)
        {
            var comments = repository.GetAll().Where(x => x.BlogId == blogId).ToList();

            var result = comments.Select(x =>
            {
                return new CommentDTO
                {
                    Id = x.Id,
                    Description = x.Description,
                    CreatedDate = x.CreatedDate,
                    Blog = x.Blog,
                    User = x.User
                };
            });

            return result.ToList();
        }

        public Comment GetById(Guid id)
        {
            return repository.Get(id);
        }

        public Comment UpdateComment(Comment comment)
        {
            if (UserProfile.Session?.User?.Id == comment.User!.Id)
            {
                throw new Exception();
            }

            return repository.Update(comment);
        }
    }
}
