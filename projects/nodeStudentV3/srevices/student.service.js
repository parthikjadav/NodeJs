const { studentSchema } = require("../models");

const addStudent = (body) => {
  return studentSchema.create(body);
};

const getStudent = () => {
  return studentSchema.find();
};

const findStudent = (username) => {
  return studentSchema.findOne({ username });
};

const deleteStudent = (id) => {
  return studentSchema.findByIdAndDelete(id);
};

const updateStudent = (id, body) => {
  return studentSchema.findByIdAndUpdate(id, body);
};

const findStudentforUpdate = (id) => {
  return studentSchema.findOne({ id });
};

module.exports = {
  addStudent,
  getStudent,
  findStudent,
  deleteStudent,
  updateStudent,
  findStudentforUpdate,
};
