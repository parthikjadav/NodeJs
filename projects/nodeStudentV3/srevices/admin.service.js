const { adminSchema } = require("../models");

const addAdmin = (body) => {
  return adminSchema.create(body);
};

const adminAuth = (username) => {
  return adminSchema.findOne({ username });
};

const alreadyExist = (username) => {
  return adminSchema.findOne({ username });
};

const getAdmin = () => { 
  return adminSchema.find();
}

module.exports = { addAdmin, adminAuth, alreadyExist,getAdmin};
