export default (request, response, next) => {
  const {username, password} = request.body;
  if(username === undefined || password === undefined) {
    return response.status(403).send({error: "Missing password or username field"});
  } else {
    next();
  }
  
}