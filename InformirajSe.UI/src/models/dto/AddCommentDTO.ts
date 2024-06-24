import { StringLiteral } from "typescript";

export class AddCommentDTO{
    public comment?: string;
    public blogId?: string;

    constructor(commentDescription: string, blogId: string) {
        this.comment = commentDescription;
        this.blogId = blogId;
    }
}