import fs from 'fs';
import crypto from 'crypto';

const users = JSON.parse(fs.readFileSync("./src/config/users.json", "utf8"));
let userContext = undefined

const getUserContext = () => {
  if(userContext === undefined) {
    userContext = {version: -1, users: Array.from(users)};
  }

  return userContext;
}

const searchUser = (username) => {
  return getUserContext().users.filter(user => user.username.toLowerCase().includes(username.toLowerCase()));
}
const getUser = (username) => {
  return getUserContext().users.find(user => user.username === username);
}

const getUsers = () => {
  return getUserContext().users;
}

const addPurchase = (username, book) => {
  const user = getUser(username);
  if(user.purchases === undefined) {
    user.purchases = [];
  }
  user.purchases.push(book);
  
  const ctx = getUserContext();
  ctx.version = crypto.randomUUID();
  return ctx;
}

const addUser = (user) => {
  const ctx = getUserContext();
  ctx.users.push(user);
  ctx.version = crypto.randomUUID();

  return ctx;
}

const patchUser = (username, user) => {
  const ctx = getUserContext();
  ctx.users = ctx.users.map(entry => entry.username === username ? {...user} : entry);
  ctx.version = crypto.randomUUID();

  return ctx;
}

const deleteUser = (user) => {
  const ctx = getUserContext();
  ctx.users = ctx.users.filter(entry => entry.username !== user.username);
  ctx.version = crypto.randomUUID();

  return ctx;
}

export default { addPurchase, searchUser, getUsers, addUser, patchUser, deleteUser, getUser };


