import { StringLiteral } from "typescript";

export class AddBlogDTO{
    public title?: string;
    public bodyContent?: string;

    constructor(title: string, bodyContent: string){
        this.title = title;
        this.bodyContent = bodyContent;
    }
}