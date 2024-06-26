import { Comment } from "../models/Comment";
import { AddCommentDTO } from "../models/dto/AddCommentDTO";

export class CommentService{
    public async addComment(commentDescription: string, blogId: string){
        const model = new AddCommentDTO(commentDescription, blogId);

        try {
            const response = await fetch('http://api.informirajse.mk/api/add-comment', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(model)
            });

            if(response.ok) {
                return true;
            } else {
                console.error('Error: ', response.status, response.statusText);
                return false;
            }
        }
        catch(error: any) {
            console.error('Error: ', error.message);
            return false;
        }
    }

    public async getComments(blogId: string): Promise<Comment[] | undefined> {
        try {
            const response = await fetch(`http://api.informirajse.mk/api/get-comments/${blogId}`, {
                method: 'GET',
                credentials: 'include',
            });

            if(response.ok) {
                const responseData: Comment[] = await response.json();
                return responseData;
            } else {
                console.error('Error: ', response.status, response.statusText);
            }
        }
        catch(error: any) {
            console.error('Error: ', error.message);
        }
    }
}
