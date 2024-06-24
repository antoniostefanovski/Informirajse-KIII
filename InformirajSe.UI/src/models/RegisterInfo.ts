export class RegisterInfo {
    public username: string | undefined;

    public password: string | undefined;

    public repeatedPassword: string | undefined;

    public email: string | undefined;

    public fullname: string | undefined;

    public dateOfBirth: string | undefined;

    public gender: string | undefined;

    public constructor(username: string, password: string, repeatedPassword: string, email: string, fullname: string, dateOfBirth: string, gender: string) {
        this.username = username;
        this.password = password;
        this.repeatedPassword = repeatedPassword;
        this.email = email;
        this.fullname = fullname;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
    }
}