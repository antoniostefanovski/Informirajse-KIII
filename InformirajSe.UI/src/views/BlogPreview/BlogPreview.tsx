import React, { useEffect, useState } from "react";
import '../BlogPreview/BlogPreview.scss';
import cs from '../../assets/sc.jpg';
import CommentContainer from "../Comment/CommentContainer";
import { GetBlogDTO } from "../../models/dto/GetBlogDTO";
import { BlogService } from "../../services/BlogService";
import { Link, useLocation } from "react-router-dom";
import { CommentService } from "../../services/CommentService";
import { Comment } from "../../models/Comment";

export default function BlogPreview() {

    const blogService = new BlogService();
    const commentService = new CommentService();
    const [blogInfo, setBlogInfo] = useState<GetBlogDTO | undefined>();
    const [showButtons, setShowButtons] = useState(false);
    const [comments, setComments] = useState<Comment[] | undefined>();
    const [comment, setComment] = useState("");
    const [id, setId] = useState("");

    const location = useLocation();
    const { blogId } = location.state;

    useEffect(() => {
        getBlogData();
        getBlogComments();
        setId(blogId);
    }, []);

    const deleteBlog = async () => {
        let status = await blogService.deleteBlog(blogInfo?.blog?.id ?? "");

        if(!Boolean(status)) {
            return;
        }

        window.location.replace('http://localhost:3000/allblogs');
    }

    const getBlogData = async () => {
        if(!Boolean(blogId)) {
            return;
        }

        const blog = await blogService.getBlog(blogId);

        setBlogInfo(blog);

        if(blog?.blog?.user?.id !== blog?.currentUserId) {
            setShowButtons(false);
            return;
        }

        setShowButtons(true);
    }

    const getBlogComments = async () => {
        if(!Boolean(blogId)) {
            return;
        }

        const commentsData = await commentService.getComments(blogId);

        setComments(commentsData);
    }

    const addComment = async () => {
        let result = await commentService.addComment(comment, blogInfo?.blog?.id ?? "");

        if(Boolean(result)) {
            getBlogComments();
        }
    }
    
    const divStyle = {
        backgroundImage: `url(${cs})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="blog-preview-main">
            {/* <img src={cs} className="b-p-m-img"></img> */}
            <div className="wrapper" style={divStyle}>
                <div className="b-p-m"  >
                    <h1 className="blog-prev-title">{blogInfo?.blog?.title}</h1>
                    <div className="blog-prev-title-div">
                        <p className="blog-prev-auth">Автор: {blogInfo?.blog?.user?.userName}</p>
                        <p className="blog-prev-date">Креиран на: {new Date(blogInfo?.blog?.dateCreated ?? 0).toLocaleDateString('en-GB') }</p>
                    </div>
                </div> 
            </div>
             
            <div className="b-p-butons-div">
                { showButtons && <>
                    <Link to="/edit-blog" state={{ blogId: blogInfo?.blog?.id }}><button className="b-p-edit">Измени</button></Link>
                    <button className="b-p-delete" onClick={deleteBlog}>Избриши</button>
                </>}
            </div>
            
            <p className="b-p-text">{blogInfo?.blog?.contentBody}</p>

            <CommentContainer data={comments}/>

            <div className="add-comment-form">
                <h1 className="add-comment-form-h1">Сподели коментар</h1><br></br><br></br>
                <textarea className="comment-textarea" onChange={(e) => setComment(e.target.value)}></textarea><br></br><br></br>
                <button className="add-comment-btn" onClick={addComment}>Сподели!</button><br></br><br></br><br></br><br></br>
            </div>
        </div>
    )
}