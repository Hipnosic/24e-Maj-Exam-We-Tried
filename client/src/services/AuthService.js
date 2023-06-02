//Använder ej denna fil!
import { auth } from "./http-common";

class AuthService {
  login(data) {
    return auth.post("/login", data);
  }

  register(data) {
    return auth.post("/register", data);
  }
}

export default new AuthService();
