import axios from "axios";

const auth = axios.create({
    baseURL: "http://localhost:3000/auth",
    headers: {
        "Content-type": "applicatino/json"
    }
});

export {auth}