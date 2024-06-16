const User = require("../modules/user-module");
const bcrypt = require("bcryptjs");
// home logic
const home = async (req, res) => {
    try {
        res.status(200).send("this is router pate this is  conttrolles")
    } catch (error) {
        res.status(400).send({ msg: "page not found" })
    }
};

// register logic
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExit = await User.findOne({ email });

        if (userExit) {
            return res.status(400).json({ message: "email already exists" });
        }

        const saltBrepat = 10;
        const hash_Password = await bcrypt.hash(password, saltBrepat);

        const userCreated = await User.create({
            username,
            email,
            phone,
            password: hash_Password
        });

        res.status(201).json({ msg: "register successful", token: await userCreated.generateToken(), userId: userCreated._id.toString() });

        console.log(req.body);
    } catch (error) {
        res.status(400).send({ msg: "page not found" })
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExit = await User.findOne({ email });

        if (!userExit) {
            return res.status(401).json({ msg: "Invaild user exit !" })
        }

        const isPassword = await bcrypt.compare(password, userExit.password);

        if (isPassword) {
            res.status(201).json({
                msg: "login successful",
                token: await userExit.generateToken(),
                userId: userExit._id.toString()
            });
        } else {
            res.status(401).send({ msg: "invaild email and password !" })

        }
    } catch (error) {
        res.status(500).send({ msg: "internal server error" })

    }
}

const userAuth = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData)
        return res.status(200).json({userData});
    } catch (error) {
        console.log("some error in your userAuth router", error)
    }
}

module.exports = { home, register, login, userAuth };