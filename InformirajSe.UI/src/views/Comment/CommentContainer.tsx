import React from "react";
import '../Comment/CommentContainer.scss';
import { SlUserFemale, SlUser } from "react-icons/sl";
import { Comment } from "../../models/Comment";
import { CommentService } from "../../services/CommentService";

type Props = {
    data: Comment[] | undefined;
}

export default function CommentContainer (data: Props) {

    const commentService = new CommentService();

    const deleteComment = () => {
        
    }


    return(
        <>
        {data.data?.map((item, idx) => {
            return <div className="comment-main" key={idx}>
                        <div className="comment-left">
                            {item.user?.gender == "Male" ? <SlUser /> : <SlUserFemale />}
                        </div>
                        <div className="comment-right">
                            <p className="comment-author-name">Author {item.user?.userName}({item.user?.name})</p><br></br>
                            <p className="comment-text">{item.description}</p>
                            <br/>
                            <p className="comment-text">{new Date(item.createdDate ?? 0).toLocaleDateString('en-GB')}</p>
                            <br/>
                        </div>
                    </div>
        })}
        </>
    )
}