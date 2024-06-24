using InformirajSe.Domain.Models;

namespace InformirajSe.Common.Models
{
    public static class UserProfile
    {
        private static Session _session;

        public static Session Session
        {
            get
            {
                return _session;
            }
            set
            {
                _session = value;
            }
        }
    }
}
