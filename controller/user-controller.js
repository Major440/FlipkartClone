import User from "../model/userSchema.JS";

export const userSignup = async (req, res) => {
    try {
        const exist = await User.findOne({ username: req.body.username });
        if (exist) {
            return res.status(401).json("Username already exists");
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json("User is successfully registered");
    } catch (err) {
        console.log("Error:", err.message);
    }
};

export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({
            username: request.body.username,
            password: request.body.password,
        });
        if (user) {
            return response
                .status(200)
                .json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json("Invalid Login");
        }
    } catch (error) {
        console.log("Error: ", error.message);
    }
};
