const todomodel= require("../schemas/todo");
const deltodo = async (req, res, next) => {
  const id = req.params.id;
  const deltodoo = await todomodel.deleteOne({ _id: id });
  if (deltodoo) {
    res.status(200).send(`del to do with id:${id}`);
  } else {
    res.status(404).send(`to do was not found with id ${id}`);
  }
};

module.exports = deltodo;
