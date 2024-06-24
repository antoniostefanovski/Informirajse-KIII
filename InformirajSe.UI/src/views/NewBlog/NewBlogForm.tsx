import React, { useEffect, useState } from 'react';
import '../NewBlog/NewBlog.scss';
import { BlogService } from '../../services/BlogService';

export default function NewBlog(){

    
    const service = new BlogService();
    const [title, setTitle] = useState("");
    const [contentBody, setContentBody] = useState("");
    const [error, setError] = useState("");


    const validateInput = (title: string, bodyContent: string) => {
        if((title === "" || title === null) || (bodyContent === "" || bodyContent === null)) {
            return false;
        }
        return true;
    }

    const addBlog = async () => {
        let result = validateInput(title, contentBody);

        if(!result){
            setError("Пополнете ги сите полиња!");
            return;
        }

        setError("");
        await service.addNewBlog(title, contentBody);
    }

    

    return(
        <div className="new-blog-main-content">
            <h1 className="main-title">Споделете нов блог со нашата заедница!</h1>
            <div className="new-blog-form">
                <div className="tmp">
                    <h3 className="new-blog-label">Наслов*</h3><br></br>
                    <input type="text" className="new-blog-title-input" onChange={(e) => setTitle(e.target.value)}></input><br></br><br></br><br></br><br></br><br></br>
                </div>
                {/* 
                <div className="tmp">
                    <h3 className="new-blog-label">Краток опис*</h3><br></br>
                    <input type="text" className="new-blog-title-summary"></input><br></br><br></br><br></br><br></br><br></br>
                </div>*/}
                <div className="tmp">
                  <h3 className="new-blog-label">Вашиот текст*</h3><br></br>
                    <textarea className="new-blog-content-input" id="blog-content" name="blog-content" onChange={(e) => setContentBody(e.target.value)}></textarea><br></br><br></br>   <br></br><br></br>  
                </div>
                
                <button type="submit" className="new-blog-submit" onClick={addBlog}>Сподели!</button>
            </div>
        </div>
    )
}