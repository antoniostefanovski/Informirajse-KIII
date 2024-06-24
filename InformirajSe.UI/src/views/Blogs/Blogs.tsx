import React, { useEffect } from "react";
import './Blogs.scss';
import { IoMdSearch } from "react-icons/io";
import BlogCart from "../BlogCart/BlogCart";
import slika from '../../assets/blog-img.jpg';
import { useState } from 'react';
import { BlogService } from "../../services/BlogService";
import { Blog } from "../../models/Blog";


export default function Blogs() {
    const service = new BlogService();
    const [author, setAuthor] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const getData = async () => {
        let data = await service.getBlogs() ?? [];
        setBlogs(data);
    }

    const filterData = async () => {
        let data = await service.filterBlogs(author, from, to);

        setBlogs(data ?? []);
    }
    
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container border mt-4" style={{marginLeft:'auto', marginRight:'auto', width: '75%', height: '150px', marginTop:'75px', marginBottom:'500px', border:'solid', borderColor:'#6633FF', borderWidth:'4px', borderRadius:'25px'}}>
            <div className="d-flex justify-content-between align-items-center" style={{ padding: '10px'}}>
                {/* <input 
                    type="text" 
                    name="search" 
                    className="blogs-searchbar" 
                    onChange={(e) => setKeyword(e.target.value)} 
                    placeholder="Што би сакале да читате?" 
                    style={{flex: 1, marginRight: '10px'}} 
                /> */}
                <input 
                    type="text" 
                    placeholder="Автор" 
                    className="blogs-searchbar" 
                    style={{flex: 1, marginRight: '10px'}} 
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {/* <select className="blogs-datelist" style={{flex: 1}}>
                    <option>Датум...</option>
                    <option value="rastecki">Растечки</option>
                    <option value="opagacki">Опаѓачки</option>
                </select> */}
            </div>
            <div className="d-inline-flex justify-content-between align-items-center" style={{width:'100%', marginTop:'25px'}}>
                <input type="date" 
                       placeholder="Датум од" 
                       className="blogs-searchbar" style={{marginRight:'5%'}}
                       onChange={(e) => setFrom(e.target.value)} />
                <input type="date" 
                       placeholder="Датум до" 
                       className="blogs-searchbar" 
                       style={{marginRight:'12%'}}
                       onChange={(e) => setTo(e.target.value)} />
                <button className="btn blogs-search-button" onClick={filterData}>Пребарај</button>
            </div>
            
            <div className="blogs-blog-section">
                { blogs.length === 0 && <p>Нема записи.</p>}
                { blogs.length > 0 && blogs.map((item, idx) => (
                    <BlogCart
                        key={idx}
                        id={item.id ?? ""} 
                        slika={slika}
                        naslov={item.title ?? ""}
                        avtor={item.user?.userName ?? ""}
                        datum={new Date(item.dateCreated)}
                        summary={item.contentBody?.substring(0, 100) + "..."}
                    />
                ))}
            </div>
        </div>
    )
    
}