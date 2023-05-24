/**
 * Author: Jakob Rolaandsson
 * Date: 24e May
 * 
 * This file is a util file for generating and verifying server created JWT access tokens. Currently keys are only valid for a duration of 45 minutes and will throw errors if expired key is attempted to be used. Whilst this is a flaw in the current version the script can be modified to use a long term refresh token and a short term access token to avoid unnecessary reauthentications.
 */

import jwt from 'jsonwebtoken';
import fs from 'fs';

const SUPER_SECRET = fs.readFileSync('./src/config/public.key.pem');

function generate(claims) {
  let payloadOptions = {
    issuer: "bookster-server-api",
    subject: "student licensed jwt access token",
    expiresIn: "45m"
  }

  let token = jwt.sign(claims, SUPER_SECRET, payloadOptions);

  return token;
}

function verify(token) {
  try {
    return jwt.verify(token, SUPER_SECRET);
  } catch (err) {
    let error = new Error();

    if (err.name == "JsonWebTokenError") {
      error.clientMessage = "Digital signing is invalid, request new token";
      error.serverMessage = "Token verification failed";
    }

    if (err.name == "TokenExpiredError") {
      error.clientMessage = "Digital signing is invalid, request new token";
      error.serverMessage = "Token expired";
    }

    throw error;
  }
}

export default { generate, verify }