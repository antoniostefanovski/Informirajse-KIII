import { LoginInfo } from "../../models/LoginInfo";

export interface ValidationErrorsLogin {
    username?: string;
    password?: string;
}

const validateUsername = (value: string) => {
    if(value === "" || value === null) {
        return "Полето за корисничко име е задолжително.";
    }

    return "";
}

const validatePassword = (value: string) => {
    if(value === "" || value === null) {
        return "Полето за лозинка е задолжително.";
    }

    return "";
}

const validateInputs = (loginInfo: LoginInfo) => {
    let errors: ValidationErrorsLogin = {};

    errors.username = validateUsername(loginInfo.username ?? "");
    errors.password = validatePassword(loginInfo.password ?? "");

    return errors;
}

export { validateUsername, validatePassword, validateInputs };