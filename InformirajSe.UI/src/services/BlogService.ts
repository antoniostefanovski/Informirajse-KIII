import {AddBlogDTO} from '../models/dto/AddBlogDTO';
import {EditBlogDTO} from '../models/dto/EditBlogDTO';
import { BlogSearchDTO } from '../models/dto/BlogSearchDTO';
import { Blog } from '../models/Blog';
import { GetBlogDTO } from '../models/dto/GetBlogDTO';

export class BlogService{

    public async addNewBlog(title: string, bodyContent: string){
        const model = new AddBlogDTO(title, bodyContent);

        try {
            const response = await fetch('http://api.informirajse.mk/api/new-blog', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(model)
            });

            if(response.ok) {
                 window.location.replace('http://informirajse.mk/allblogs');
                return true;
            } else if(response.status == 403) {
                window.location.replace('http://informirajse.mk/login');
                return false;
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

    public async editBlog(blogId: string, title: string, bodyContent: string, callback: Function){
        const model = new EditBlogDTO(blogId, title, bodyContent);

        try {
            const response = await fetch(`http://api.informirajse.mk/api/edit-blog`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(model)
            });

            if(response.ok) {
                callback();
                return;
            } else if(response.status == 403) {
                window.location.replace('http://informirajse.mk/login');
                return false;
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

    public async deleteBlog(blogId: string){
        try {
            const response = await fetch('http://api.informirajse.mk/api/delete-blog/'+ blogId, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(response.ok) {
                 window.location.replace('http://informirajse.mk/blogs');
                return true;
            } else if(response.status == 403) {
                window.location.replace('http://informirajse.mk/login');
                return false;
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

    public async getBlogs(): Promise<Blog[] | undefined> {

        try {
            const response = await fetch('http://api.informirajse.mk/api/blogs', {
                method: 'GET',
                credentials: 'include',
            });

            if(response.ok) {
                const responseData: Blog[] = await response.json();
                return responseData;
            } else {
                console.error('Error: ', response.status, response.statusText);
            }
        }
        catch(error: any) {
            console.error('Error: ', error.message);
        }
    }
    
    public async filterBlogs(author: string, from: string, to: string): Promise<Blog[] | undefined> {
        const model = new BlogSearchDTO(author, from, to);

        try {
            const response = await fetch('http://api.informirajse.mk/api/filter-blogs', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(model)
            });

            if(response.ok) {
                const responseData: Blog[] = await response.json();
                return responseData;
            } else {
                console.error('Error: ', response.status, response.statusText);
            }
        }
        catch(error: any) {
            console.error('Error: ', error.message);
        }
    }

    public async getBlog(id: string): Promise<GetBlogDTO | undefined> {

        try {
            const response = await fetch(`http://api.informirajse.mk/api/blog/${id}`, {
                method: 'GET',
                credentials: 'include'
            });

            if(response.ok) {
                const responseData: GetBlogDTO = await response.json();
                return responseData;
            } else {
                console.error('Error: ', response.status, response.statusText);
            }
        }
        catch(error: any) {
            console.error('Error: ', error.message);
        }
    }

    public async getMostInteresting(): Promise<Blog[] | undefined> {
        try {
            const response = await fetch('http://api.informirajse.mk/api/most-interesting', {
                method: 'GET',
                credentials: 'include'
            });

            if(response.ok) {
                const responseData: Blog[] = await response.json();
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