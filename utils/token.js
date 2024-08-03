const jwt = require("jsonwebtoken");

const createNewToken = (payload) => {
    return jwt.sign({ userId: payload }, process.env.SECRET_KEY, { expiresIn: '10d' });     //initialy getuid used but we want use env
}


module.exports = createNewToken;          // not imported before