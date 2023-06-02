import fs from 'fs';
import crypto from 'crypto';

const validAppid = JSON.parse(fs.readFileSync('./src/config/appid.json'));
const contextUUID = {}

validAppid.forEach(appid => contextUUID[appid] = crypto.randomUUID());


export default (request, response, next) => {
  const appid = request.headers['appid'];

  if(appid == undefined) return response.status(403).send("missing appid header");
  if(!validAppid.includes(appid)) return response.status(401).send("Unauthorized appid");

  response.locals.contextUUID = contextUUID[appid];
  next();
}