const usermodel = require("../schemas/user");

const sign_up = async (req, res, next) => {
    console.log(req.body);
    try {
        const response = await usermodel.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        });
        const sign_up = response._doc;
        if (sign_up) {
            const { password, __v, ...otheruserInfo } = sign_up;
            return res.status(201).json(otheruserInfo);
        } else {
            return res.status(400).json({
                message: "Error creating user",
            });
        }
    } catch (err) {
        console.log("err: ", err);
    }
};

module.exports =sign_up;