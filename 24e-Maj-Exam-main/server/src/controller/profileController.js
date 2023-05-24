import userService from "../service/userService.js";

const getProfile = (request, response) => {
  const user = userService.getUser(response.locals.username);

  return response.send({user});
}

export default { getProfile };