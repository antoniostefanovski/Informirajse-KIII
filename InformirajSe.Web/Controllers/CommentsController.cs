using InformirajSe.Common.Models;
using InformirajSe.Domain.DTO;
using InformirajSe.Domain.Models;
using InformirajSe.Service.Interfaces;
using InformirajSe.Web.Attributes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AuthorizeAttribute = InformirajSe.Web.Attributes.AuthorizeAttribute;

namespace InformirajSe.Web.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api")]
    public class CommentsController : ControllerBase
    {
        private readonly ICommentService commentService;
        private readonly IBlogService blogService;

        public CommentsController(ICommentService commentService, IBlogService blogService)
        {
            this.commentService = commentService;
            this.blogService = blogService;
        }

        [HttpPost("add-comment")]
        public IActionResult AddComment(AddCommentDTO commentDTO)
        {
            if(commentDTO is null)
            {
                return BadRequest();
            }

            commentService.AddNewComment(commentDTO);

            return Ok();
        }

        [HttpPost("delete-comment/{id}")]
        public IActionResult DeleteComment(Guid id)
        {
            var comment = commentService.GetById(id);

            if(comment is null)
            {
                return BadRequest();
            }

            commentService.DeleteComment(id);

            return Ok();
        }

        [AllowAnonymous]
        [HttpGet("get-comments/{blogId}")]
        public IActionResult GetComments(Guid blogId)
        {
            if (blogId == Guid.Empty)
            {
                return BadRequest();
            }

            var comments = commentService.GetAllComments(blogId);

            return Ok(comments);
        }
    }
}
