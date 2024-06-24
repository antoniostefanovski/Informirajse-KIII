using InformirajSe.Domain.DTO;
using InformirajSe.Domain.Models;
using InformirajSe.Service.Interfaces;
using InformirajSe.Web.Attributes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Http;
using AuthorizeAttribute = InformirajSe.Web.Attributes.AuthorizeAttribute;

namespace InformirajSe.Web.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api")]
    public class LoginController : ControllerBase
    {
        private readonly IUserService userService;
        private readonly ISessionService sessionService;

        public LoginController(IUserService userService, ISessionService sessionService)
        {
            this.userService = userService;
            this.sessionService = sessionService;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Login(LoginDTO loginDTO)
        {
            var authUser = userService.Login(loginDTO.UserName, loginDTO.Password);

            if(authUser is null)
            {
                return BadRequest();
            }

            var session = new Session
            {
                UserId = authUser.Id,
            };

            if(session is null)
            {
                return BadRequest();
            }

            sessionService.InsertSession(session);

            var cookieOptions = new CookieOptions()
            {
                Path = "/",
                Domain = "localhost",
                HttpOnly = true
            };

            HttpContext.Response.Cookies.Append("SESSIONID", session.Id.ToString(), cookieOptions);

            return Ok();
        }

        [HttpGet("isAuthenticated")]
        public IActionResult IsAuth()
        {
            return Ok();
        }
    }
}
