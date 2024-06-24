using InformirajSe.Domain.DTO;
using InformirajSe.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformirajSe.Service.Interfaces
{
    public interface IBlogService
    {
        public List<Blog> GetAllBlogs();

        public Blog GetById(Guid id);

        public Blog AddNewBlog(Blog blog);

        public Blog UpdateBlog(EditBlogDTO editBlogDTO);

        public void DeleteBlog(Guid id);

        public List<Blog> FindMostInterestingBlogs();

        public List<Blog> FilterBlogs(string author, string from, string to);
    }
}
