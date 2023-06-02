import adminRouter from "../httpUtils";

class adminService {
    promoteUser(token, data) {
        const headers = {
            "Content-type": "application/json",
            "authorization": token
        }
    }
}

export default new adminService();