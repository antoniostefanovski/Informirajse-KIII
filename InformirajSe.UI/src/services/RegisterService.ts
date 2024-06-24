import { RegistrationError } from "../enums/RegistrationError";
import { RegisterInfo } from "../models/RegisterInfo";
import { Registration } from "../models/Registration";

export class RegisterService {

    public async register(username: string, password: string,  repeatedPassword: string, email: string, fullname: string, dateOfBirth: string, gender: string): Promise<Registration> {
        const model = new RegisterInfo(username, password, repeatedPassword, email, fullname, dateOfBirth, gender);

        try {
            const response = await fetch('http://localhost:6501/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(model)
            });

            if(response.ok) {
                return { ok: true };
            } else {
                return { ok: false, errorType: (await response.json()).errorType };
            }
        }
        catch(error: any) {
            return { ok: false, errorType: RegistrationError.InternalServerError };
        }
    }

}