const usermodel = require("../schemas/user");

const getusers = async (req, res, next) => {
  try {
    const users = await usermodel.find();
    if (users.length === 0) {
      return res.status(404).send("no users found");
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("server error ");
  }
};
module.exports = getusers;
