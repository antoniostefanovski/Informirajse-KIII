export class BlogSearchDTO {
    public author?: string;
    public from?: string;
    public to?: string;

    constructor(author: string, from: string, to: string){
        this.author = author;
        this.from = from;
        this.to = to;
    }
}