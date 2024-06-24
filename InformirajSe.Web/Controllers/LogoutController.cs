using InformirajSe.Common.Models;
using InformirajSe.Service.Interfaces;
using InformirajSe.Web.Attributes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InformirajSe.Web.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api")]
    public class LogoutController : ControllerBase
    {
        private readonly ISessionService sessionService;

        public LogoutController(ISessionService sessionService)
        {
            this.sessionService = sessionService;
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            var session = UserProfile.Session;

            if(session is null)
            {
                return BadRequest();
            }

            sessionService.DeleteSession(session.Id);

            var cookieOptions = new CookieOptions()
            {
                Path = "/",
                Domain = "localhost",
                HttpOnly = true
            };

            HttpContext.Response.Cookies.Append("SESSIONID", "", cookieOptions);

            return Ok();

        }
    }
}
