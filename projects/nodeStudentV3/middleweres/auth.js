const jwt = require("jsonwebtoken");
const secret = "this is secret key";

const createToken = (data) => {
  return jwt.sign({ data }, secret);
};

const authenticate = (req, res, next) => {
  try {
    let token = req.cookies["token"];
    // console.log(token,"token");
    if (!token) {
      throw new Error("no token");
    }
    let user = jwt.verify(token, secret);
    // console.log(user.data);
    req.user = user;

    next();
  } catch (err) {
    res.status(400).json({ success: false, err: err.message });
  }
};

const auth = ([...role]) => {
//   console.log(role);
    return (req, res, next) => {
        let user = req.user  
    if (role.includes(user.data.role)) {
      next();
    }
  };
};

module.exports = { createToken, authenticate, auth };
