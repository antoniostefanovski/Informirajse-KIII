using InformirajSe.Domain.DTO;
using InformirajSe.Service.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InformirajSe.Web.Controllers
{
    [ApiController]
    [Route("api")]
    public class RegisterController : ControllerBase
    {
        private readonly IUserService userService;

        public RegisterController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterDTO registerDTO)
        {
            if(registerDTO is null)
            {
                return BadRequest();
            }

            userService.Register(registerDTO.UserName,
                                 registerDTO.Email,
                                 registerDTO.Password,
                                 registerDTO.RepeatedPassword,
                                 registerDTO.FullName,
                                 registerDTO.DateOfBirth,
                                 registerDTO.Gender
                                 );

            return Ok();
        }
    }
}
