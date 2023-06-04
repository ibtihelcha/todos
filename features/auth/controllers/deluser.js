const usermodel = require("../schemas/user");
const deluser = async (req, res, next) => {
  const id = req.params.id;
  const deleteuser = await usermodel.deleteOne({ _id: id });
  if (deleteuser) {
    res.status(200).send(`del user with id:${id}`);
  } else {
    res.status(404).send(`user was not found with id ${id}`);
  }
};

module.exports = deluser;
