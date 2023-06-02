import authService from "../service/authService.js"

const authenticate = (request, response) => {
  const {username, password} = request.body;
  
  try {
    const userAccessDetails = authService.authenticate({username, password});

    return response.status(200).send({message: "Successfully signed in", token: userAccessDetails.accessToken, name: username, role: userAccessDetails.role})
  } catch (error) {
    return response.status(403).send({error: error.message});
  }
}

const register = (request, response) => {
  const {username, password} = request.body;
  
  try {
    const context = authService.register({username, password});

    return response.status(201).send({message: "Account successfully created" });
  } catch(error) {
    return response.status(403).send({error: error.message});
  }
}

export default {authenticate, register};