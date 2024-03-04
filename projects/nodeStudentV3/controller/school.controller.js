const { schoolService } = require("../srevices");

const addSchool = async (req, res) => {
  try {
    let adminId = req.body.admin;

    let school = await schoolService.addSchool(req.body);
    let admin = await schoolService.getAdmin(adminId);

    if (!school) {
      throw new Error("invalid creadencial");
    }
    school["admin"] = admin;
    res.status(201).json({ success: true, school });
  } catch (err) {
    res.status(400).json({ success: false, err: err.message });
  }
};

const getSchool = async (req, res) => {
  try {
    let school = await schoolService.getSchool();
    res.status(200).json({ success: true, school });
  } catch (err) {
    res.status(400).json({ success: false, err: err.message });
  }
};

const getAdminHistory = async (req, res) => {
  try {
    let { id } = req.params;

    let adminHistory = await schoolService.getAdminHistory();

    const result = adminHistory.filter((val) => val.admin._id.toString() == id);

    res.status(200).json({ success: true, result });
  } catch (err) {
    res.status(400).json({ success: false, err: err.message });
  }
};

module.exports = { addSchool, getSchool, getAdminHistory };
