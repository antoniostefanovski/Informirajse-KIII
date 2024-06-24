using InformirajSe.Domain.Models;
using InformirajSe.Repository.Interfaces;
using InformirajSe.Common.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Reflection.Metadata;

namespace InformirajSe.Web.Attributes
{
    public class AuthorizeAttribute : ActionFilterAttribute
    {
        private IRepository<Session> sessionRepository;
        private IUserRepository userRepository;

        public override async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var controllerActionDescriptor = context.ActionDescriptor as ControllerActionDescriptor;
            var isAllowedEndpoint = controllerActionDescriptor?.MethodInfo.GetCustomAttributes(inherit: true)
                    .Any(a => a.GetType().Equals(typeof(AllowAnonymousAttribute))) ?? false;

            if (isAllowedEndpoint)
            {
                await next();
                return;
            }

            var httpContext = context.HttpContext;

            userRepository = httpContext.RequestServices.GetRequiredService<IUserRepository>();
            sessionRepository = httpContext.RequestServices.GetRequiredService<IRepository<Session>>();

            try
            {
                var cookies = httpContext.Request.Cookies.ToList();

                if(!cookies.Any())
                {
                    HandleUnauthorizedRequest(context);
                    return;
                }

                var sessionId = ((KeyValuePair<string, string>?)cookies.FirstOrDefault(x => x.Key == "SESSIONID"))?.Value;

                if (string.IsNullOrEmpty(sessionId))
                {
                    HandleUnauthorized(context);
                    return;
                }

                var userSession = sessionRepository.Get(Guid.Parse(sessionId));

                if (userSession is null)
                {
                    HandleUnauthorized(context);
                    return;
                }

                if(userSession.ExpiryBy.CompareTo(DateTime.UtcNow) < 0)
                {
                    HandleUnauthorized(context);
                    return;
                }

                userSession.ExpiryBy = DateTime.UtcNow.AddHours(2);
                sessionRepository.Update(userSession);
                UserProfile.Session = userSession;

                await next();

            }

            catch (Exception ex)
            {
                ExpireCookies(context.HttpContext);
                context.Result = new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        private void HandleUnauthorizedRequest(ActionExecutingContext context)
        {
            context.Result = new StatusCodeResult(StatusCodes.Status403Forbidden);
        }

        private void ExpireCookie(string name, IResponseCookies responseCookies, bool httpOnly = true)
        {
            var cookieOptions = new CookieOptions()
            {
                HttpOnly = httpOnly,
                Expires = DateTime.UtcNow.AddDays(-1)
            };

            responseCookies.Delete(name, cookieOptions);
        }

        private void ExpireCookies(HttpContext context)
        {
            ExpireCookie("SESSIONID", context.Response.Cookies);
        }

        private void HandleUnauthorized(ActionExecutingContext context)
        {
            ExpireCookies(context.HttpContext);
            HandleUnauthorizedRequest(context);
        }
    }
}
