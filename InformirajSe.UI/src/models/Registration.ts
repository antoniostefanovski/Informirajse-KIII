import { RegistrationError } from "../enums/RegistrationError";

export class Registration {
    public errorType?: RegistrationError;

    public ok: boolean = false;
}