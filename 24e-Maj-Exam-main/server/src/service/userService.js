import userRepository from "../repository/userRepository.js";

const getUser = (username) => userRepository.getUser(username);


export default {getUser};