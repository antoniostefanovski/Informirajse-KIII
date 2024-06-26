import { LoginInfo } from "../models/LoginInfo";

export class LoginService {

    public async login(username: string, password: string): Promise<boolean> {
        const model = new LoginInfo(username, password);

        try {
            const response = await fetch('http://api.informirajse.mk/api/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(model)
            });

            if(response.ok) {
                // window.location.replace('http://informirajse.mk/');
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

    public async isAuthenticated(): Promise<boolean> {
        try {
            const response = await fetch('http://api.informirajse.mk/api/isAuthenticated', {
                credentials: 'include',
            });

            if(response.ok) {
                return true;
            }

            return false;
        }
        catch(error: any) {
            console.error('Error:', error.message);
            return false;
        }
    }

}
