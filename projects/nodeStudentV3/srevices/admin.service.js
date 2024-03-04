const { adminSchema } = require("../models");

const addAdmin = (body) => {
  return adminSchema.create(body);
};

const adminAuth = (username, password) => {
  return adminSchema.findOne({ username, password });
};

const alreadyExist = (username) => {
  return adminSchema.findOne({ username });
};

module.exports = { addAdmin, adminAuth, alreadyExist };
