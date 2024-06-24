import { AddBlogDTO } from "./AddBlogDTO";

export class EditBlogDTO extends AddBlogDTO {
    public id?: string;

    constructor(id: string, title: string, bodyContent: string) {
        super(title, bodyContent);
        this.id = id;
    }
}