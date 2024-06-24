
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
    public class BlogsController : ControllerBase
    {
        private readonly IBlogService blogService;
        private readonly IUserService userService;

        public BlogsController(IBlogService blogService, IUserService userService)
        {
            this.blogService = blogService;
            this.userService = userService;
        }

        [AllowAnonymous]
        [HttpGet("blogs")]
        public IActionResult GetBlogs()
        {
            return Ok(blogService.GetAllBlogs());
        }

        [AllowAnonymous]
        [HttpPost("filter-blogs")]
        public IActionResult FilterBlogs(SearchDTO searchDTO)
        {
            if(searchDTO is null)
            {
                return BadRequest();
            }

            var blogs = blogService.FilterBlogs(searchDTO.author, searchDTO.from, searchDTO.to);

            if(blogs is null)
            {
                return BadRequest();
            }

            return Ok(blogs);
        }

        [AllowAnonymous]
        [HttpGet("blog/{id}")]
        public IActionResult GetBlog(Guid id)
        {
            var blog = blogService.GetById(id);

            if(blog is null)
            {
                return BadRequest();
            }

            var response = new BlogDTO
            {
                Blog = blog,
                CurrentUserId = UserProfile.Session?.User?.Id 
            };

            return Ok(response);
        }

        [AllowAnonymous]
        [HttpGet("most-interesting")]
        public IActionResult GetMostInterestingBlogs()
        {
            return Ok(blogService.FindMostInterestingBlogs());
        }

        [HttpPost("delete-blog/{id}")]
        public IActionResult DeleteBlog(Guid id)
        {
            blogService.DeleteBlog(id);

            return Ok();
        }

        [HttpPost("edit-blog")]
        public IActionResult EditBlog(EditBlogDTO editBlogDTO)
        {
            var blog = blogService.GetById(editBlogDTO.Id);

            if(blog is null)
            {
                return BadRequest();
            }

            blogService.UpdateBlog(editBlogDTO);

            return Ok();
        }

        [HttpPost("new-blog")]
        public IActionResult AddNewBlog(AddBlogDTO addBlogDTO)
        {
            if(addBlogDTO is null)
            {
                return BadRequest();
            }

            var blog = new Blog
            {
                Title = addBlogDTO.Title,
                ContentBody = addBlogDTO.BodyContent,
                UserId = UserProfile.Session.User!.Id
            };

            blogService.AddNewBlog(blog);

            return Ok();
        }
    }
}
