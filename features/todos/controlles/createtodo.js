const todomodel= require("../schemas/todo");

const createtodo = async (req, res, next) => {
    console.log(req.body);
    try {
        const response = await todomodel.create({
          
            value: req.body.value,
            date: req.body.date,
            state: req.body.state,
            user_id: req.body.user_id,
        });
        const createtodo = response._doc;
        if (createtodo) {
            const response= createtodo;
            return res.status(201).json(response);
        } else {
            return res.status(400).json({
                message: "Error creating todo",
            });
        }
    } catch (err) {
        console.log("err: ", err);
    }
};

module.exports =createtodo;