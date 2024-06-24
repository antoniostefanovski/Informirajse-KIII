import { Blog } from "./Blog";
import { User } from "./User";

export class Comment {
    public id: string | undefined;

    public description: string | undefined;

    public createdDate: Date = new Date();

    public blog?: Blog;

    public user?: User;
};