const todomodel = require("../../todos/schemas/todo");
const getdatetodo = async (req, res, next) => {
  console.log(req.query.date);
  try {
    const filter = {
      user_id: req.params.id,
    };
    if (req.query?.date) {
      filter.date = req.query.date;
    };
    const dateuser = await todomodel.find(filter);
    if (dateuser.length === 0) {
      return res.status(404).send("no users found");
    }
    res.status(200).json(dateuser);
  } catch (error) {
    res.status(500).send("server error ");
  }
};
module.exports = getdatetodo;
