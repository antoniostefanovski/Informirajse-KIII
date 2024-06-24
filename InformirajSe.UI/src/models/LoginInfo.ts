export class LoginInfo {
    public username: string | undefined;
    
    public password: string | undefined;

    public constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}