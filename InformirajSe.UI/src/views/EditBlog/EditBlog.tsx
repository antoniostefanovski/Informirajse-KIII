import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { GetBlogDTO } from '../../models/dto/GetBlogDTO';
import { BlogService } from '../../services/BlogService';
import { EditBlogDTO } from '../../models/dto/EditBlogDTO';
import { useNavigate } from 'react-router-dom';

export default function EditBlog () {

    const blogService = new BlogService();

    const [blogInfo, setBlogInfo] = useState<GetBlogDTO | undefined>();
    const [title, setTitle] = useState(blogInfo?.blog?.title ?? "");
    const [content, setContent] = useState(blogInfo?.blog?.contentBody ?? "");

    const location = useLocation();
    const history = useNavigate();
    
    const { blogId } = location.state;

    const getData = async () => {
        if(!Boolean(blogId)) {
            return;
        }

        const blog = await blogService.getBlog(blogId);

        setBlogInfo(blog);
        setTitle(blog?.blog?.title ?? "");
        setContent(blog?.blog?.contentBody ?? "");
    }

    const editBlog = () => {
        if(title === '' || content === '') {
            return;
        }

        blogService.editBlog(blogId, title, content, goBack);
    }

    const goBack = () => {
        history('/blog', {
            state: { blogId: blogInfo?.blog?.id }
        });
    }

    useEffect(() => {
        getData();
    },[]);

    return (
        <div>
            <p>Edit Blog</p>
            <div>
                <label>Blog Title</label>
                <input type='text' 
                       placeholder='Enter your blog title'
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}/>

                <br/><br/>

                <label>Blog Content</label>
                <textarea name="content" onChange={(e) => setContent(e.target.value)} placeholder='Enter your blog title' value={content}></textarea>
                <br/><br/>

                <button onClick={editBlog}>Измени</button>
            </div>
        </div>
    );
}