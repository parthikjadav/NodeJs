const {uploadToCloudinary} = require("../middleweres/coludinary.middlewere");
const { userSchema } = require("../models");

const addUser = async (req, res) => {
  try {
    let { username, password, email, fullName } = req.body;

    if (!req.files.avatar[0].path) {
      throw new Error("Avatar is required");
    }

    let avatarfile = req.files.avatar[0].path;
    let avatar = await uploadToCloudinary(avatarfile);
    let coverImagefile = req.files.coverImage[0].path;
    let coverImage;

    if (coverImagefile) {
      coverImage = await uploadToCloudinary(coverImagefile);
    }

    let finalBody = {
      username,
      password,
      email,
      fullName,
      avatar,
      coverImage,
    };

    let user = await userSchema.create(finalBody);
    res.status(201).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
};

module.exports = { addUser };
