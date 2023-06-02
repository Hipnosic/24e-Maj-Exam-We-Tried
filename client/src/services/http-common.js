<<<<<<< HEAD
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
=======
const BASE_URL = "http://localhost:3000";

const auth = {
  post: async (url, data) => {
    try {
      const response = await fetch(`${BASE_URL}/auth${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }

      return await response.json();
    } catch (error) {
      throw new Error("Error: " + error.message);
    }
  },
};

const books = {
  get: async (url) => {
    try {
      const response = await fetch(`${BASE_URL}/library${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }

      return await response.json();
    } catch (error) {
      throw new Error("Error: " + error.message);
    }
  },
};

const admin = {
  get: async (url) => {
    try {
      const response = await fetch(`${BASE_URL}/admin${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }

      return await response.json();
    } catch (error) {
      throw new Error("Error: " + error.message);
    }
  },
};

export { auth, books, admin };
>>>>>>> dab7938fd369ea6e0f9c3c8722fa0c80e4a1f412
