import React, { useEffect, useState } from "react";
import './BlogCart.scss';
import { BlogService } from "../../services/BlogService";
import { GetBlogDTO } from "../../models/dto/GetBlogDTO";
import { Link } from "react-router-dom";

interface BlogCart {
    id: string;
    naslov: string;
    slika: string;
    avtor: string;
    datum: Date;
    summary: string;
}

const BlogCart: React.FC<BlogCart> = (props) => {


    return(
        <div className="blogcart-main-content">
            <div className="blogcart-left-side">
                <img src={props.slika} className="blogcart-img"></img>
            </div>
            <div className="blogcart-right-side">
                <p className="cart-title">{props.naslov}</p>
                <p className="blog-cart-date">{props.datum.toLocaleDateString('en-GB')}</p>
                <p className="blog-cart-summary">{props.summary}</p>
                <p className="blog-cart-author">Автор: {props.avtor}</p>
                <div className="blog-cart-div">
                    {/* TODO: HashLink da instaliram i da go napram so HashLink mesto so Link za da nosi najgore na stranata. */}
                    <Link to="/blog" state={{ blogId: props.id }}><button className="blog-cart-button">Прочитај повеќе</button></Link>
                </div>
            </div>
            
        </div>
    )
}

export default BlogCart;