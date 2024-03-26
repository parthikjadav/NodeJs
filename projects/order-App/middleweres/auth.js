const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

const createCookie = (data) => {
  return jwt.sign(data, secret);
};

const authenticate = (req, res, next) => {
  try{let token = req.cookies["token"]

  console.log(token)

  if(!token){
    throw new Error("user not authenticated")
  }
  }catch(err){
    res.status(500).json({success:true,err:err.message})  
  }
  
}

module.exports = {
  createCookie,
  authenticate
};
