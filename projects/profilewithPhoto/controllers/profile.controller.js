const addUser = async (req, res) => {
  console.log(req.body, "add");
  res.render("./index");
};

module.exports = addUser;
