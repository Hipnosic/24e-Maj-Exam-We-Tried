import axios from "axios";
const libraryRouter = axios.create({
  baseURL: "http://localhost:3000/library",
  headers: {
    "Content-type": "application/json",
  }
});

const authRouter = axios.create({
  baseURL: "http://localhost:3000/auth",
  headers: {
    "Content-type": "application/json"
  }
});

const adminRouter = axios.create({
  baseURL: "http://localhost:3000/admin",
  headers: {
    "Content-type": "application/json",
    "Authorization": ""
  }
});

export {libraryRouter, authRouter, adminRouter}