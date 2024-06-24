import React from "react";
import '../NewsCart/NewsCart.scss';
import slika from '../../assets/blog-img.jpg';


interface NewsCart {
    naslov: string;
    slika: string;
    datum: string;
}

const NewsCart: React.FC<NewsCart> = (props) =>{
    return (
        <div className="news-cart-main-content">
            <img src={slika} className="news-img"></img>
            <p className="news-title">{props.naslov}</p>
            <p className="news-date">{props.datum}</p>
        </div>
    )
}

export default NewsCart;