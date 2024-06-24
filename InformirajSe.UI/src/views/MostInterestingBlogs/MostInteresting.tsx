import React, { useEffect, useState } from "react";
import '../MostInterestingBlogs/MostInteresting.scss';
import slika from '../../assets/blog-img.jpg';
import BlogCart from "../BlogCart/BlogCart";
import { BlogService } from "../../services/BlogService";
import { Blog } from "../../models/Blog";


export default function MostInterestingBlogs() {

    const service = new BlogService();
    const [mostInteresting, setMostInteresting] = useState<Blog[] | undefined>();

    const getData = async () => {
        const blogs = await service.getMostInteresting();

        if(!Boolean(blogs)) {
            return;
        }

        setMostInteresting(blogs);
    }

    useEffect(() => {
        getData();
    },[]);


    return (
        <div className="most-interesting-blogs-main-content">
            <h1 className="most-interesting-blogs-title">Истражи</h1>
            <p className="most-interesting-blogs-main-text">
            Добредојдовте на страницата "Истражи" - вашиот пристап до најинтересните и најинтерактивни блогови во последниот период.
            Овде, вие ќе откриете бројни виртуелни приказни исцрпно истражувајќи ги најсовремените и највлијателни блогови од нашите писатели.
            Нашата заедница активно споделува идеи, статии и искуства, а на оваа страна, вие ќе најдете блогови кои го привлекле вниманието на
            голем дел од нашите корисници. Овде, ви обезбедуваме лесен преглед нa нај читаните блогови изминатиот период.
            </p>

            <div className="most-interesting-blogs-blog-section">
                {mostInteresting?.map((item, idx) => {
                    return <BlogCart
                            key={idx} 
                            id={item.id ?? ""}
                            slika={slika}
                            naslov={item.title ?? ""}
                            avtor={item.user?.userName ?? ""}
                            datum={new Date(item.dateCreated)}
                            summary={item.contentBody?.substring(0, 100) + "..."}/>
                })}
            </div>
        </div>
    );
}