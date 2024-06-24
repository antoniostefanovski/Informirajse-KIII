import { RegisterInfo } from "../../models/RegisterInfo";

export interface ValidationErrors {
    username?: string;
    email?: string;
    password?: string;
    repeatedPassword?: string;
    fullname?: string;
    gender?: string;
    date?: string;
}

const usernamePattern =  new RegExp(/^[a-z][a-z0-9]*$/);
const emailPattern =  new RegExp(/^[a-z0-9]+(?:\.[a-z0-9]+)*@[^\s@]+\.[^\s@]+$/);
const passwordPattern = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|]).*$/);

const validateUsername = (value: string) => {
    if(value === "" || value === null) {
        return "Полето е задолжително.";
    }

    if(value.length < 4) {
        return "Корисничкото име мора да биде подолго од три карактери.";
    }

    if(!value.match(usernamePattern)) {
        return "Корисничкото име мора да започнува со буква и да содржи само букви и бројки.";
    }

    return "";
}

const validateEmail = (value: string) => {

    if(value === "" || value === null) {
        return "Полето е задолжително.";
    }

    if(!value.match(emailPattern)) {
        return "Неправилна e-mail адреса.";
    }

    return "";
}

const validateFullname = (value: string) => {

    if(value === "" || value === null) {
        return "Полето е задолжително.";
    }

    return "";
}

const validateGender = (value: string) => {

    if(value === "" || value === null) {
        return "Полето е задолжително.";
    }
    
    return "";
}

const validateDate = (value: string) => {

    if(value === "") {
        return "Полето е задолжително.";
    }

    return "";
}

const validatePassword = (value: string) => {

    if(value === "" || value === null) {
        return "Полето е задолжително.";
    }

    if(!value.match(passwordPattern)) {
        return "Внесете построга лозинка(1 голема буква, 1 бројка, 1 специјален карактер).";
    }
    
    if(value.length < 8) {
        return "Лозинката мора да биде 8 или повеќе карактери.";
    }

    return "";
}

const validateRepeatedPassword = (value: string, password: string) => {

    if(value === "" || value === null) {
        return "Полето е задолжително.";
    }

    if(value !== password) {
        return "Лозинките не се исти.";
    }

    return "";
}

const validateInputs = (registerInfo: RegisterInfo) => {
    let errors: ValidationErrors = {};

    errors.username = validateUsername(registerInfo.username ?? "");
    errors.password = validatePassword(registerInfo.password ?? "");
    errors.email = validateEmail(registerInfo.email ?? "");
    errors.repeatedPassword = validateRepeatedPassword(registerInfo.repeatedPassword ?? "", registerInfo.password ?? "");
    errors.fullname = validateFullname(registerInfo.fullname ?? "");
    errors.date = validateDate(registerInfo.dateOfBirth ?? "");
    errors.gender = validateGender(registerInfo.gender ?? "");

    return errors;
}

export { validateUsername, validateEmail, validateFullname, validateGender, validateDate, validatePassword, validateRepeatedPassword, validateInputs };