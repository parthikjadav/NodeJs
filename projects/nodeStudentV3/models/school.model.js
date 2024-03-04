const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
   
  },
  shortCode: {
    type: String,
    required: true,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "adminSchema",
    required: true,
  },
});

const school = mongoose.model("schoolSchema", schoolSchema);

module.exports = school;
