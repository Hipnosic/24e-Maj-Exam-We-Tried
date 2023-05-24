import userRepository from "../repository/userRepository.js";
import jwtUtil from "../util/jwtUtil.js";


function authenticate(userDetails) {
  const user = userRepository.getUser(userDetails.username);
  console.log(user)

  if(user === undefined || user.password !== userDetails.password) {
    let error = new Error("Failed to identify user with given credentials");
    error.name = "InvalidAuthenticationException";
    throw error;
  }
  
  return jwtUtil.generate({username: user.username, role: user.role});
}

function register(userDetails) {
  const user = userRepository.getUser(userDetails.username);

  if(user !== undefined) {
    let error = new Error("User already exist");
    error.name = "UserAlreadyExistException";
    throw error;
  }

  return userRepository.addUser({...userDetails, role: "USER"});
}

export default { authenticate, register };