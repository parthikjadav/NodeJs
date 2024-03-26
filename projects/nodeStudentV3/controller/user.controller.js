const { userService } = require("../srevices");

const getUser = (req, res) => {
  let user = req.user;

  console.log(user, "ejtiehr");

  res.status(200).json({ success: true, user });
};

const addUser = async (req, res) => {
  let body = req.body;
  let user = await userService.addUser(body);
  console.log(user);

  res.status(200).json({ success: true, user });
};

module.exports = { getUser, addUser };
