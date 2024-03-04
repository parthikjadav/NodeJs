const { facultySchema } = require("../models");

const addFaculty = (body) => {
  return facultySchema.create(body);
};

const findFaculty = (username) => {
  return facultySchema.findOne({ username });
};

module.exports = { addFaculty, findFaculty };
