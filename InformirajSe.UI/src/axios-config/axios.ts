import axios from "axios";

// kaj mene backendot startuva na 9090 mozhe da ima problem so portata

export const instance = axios.create({
    baseURL: 'http://localhost:9090/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
});