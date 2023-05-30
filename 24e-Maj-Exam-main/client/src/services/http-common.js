import axios from "axios";

const auth = axios.create({
    baseURL: "http://localhost:3000/auth",
    headers: {
        "Content-type": "applicatino/json"
    }
});

const books = axios.create({
    baseURL: "http://localhost:3000/library",
    headers: {
        "Content-type": "application/json",
    }
});

const admin = axios.create({
    baseURL: "http://localhost:3000/admin",
    headers: {
        "Content-type": "application/json",
    }
});

export {auth, books, admin}