import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"

export const UserData = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "Email already exists" })
        }
        const hashPass = await bcryptjs.hash(password, 10);
        const newUser = new User({
            fullname: fullname,
            email: email,
            password: hashPass
        })

        await newUser.save()
        res.status(201).json({ message: "User Created Successfully" })
    } catch (error) {
        console.log("Error " + error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        const passMatch = await bcryptjs.compare(password, user.password)

        if (!user || !passMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        else {
            return res.status(200).json({
                message: "Login Successfull",
                user: {
                    _id: user._id,
                    email: user.email,
                    password: user.password
                },
            })
        }
    } catch (error) {
        console.log("Error " + error.message);
        res.status(500).json({ message: "Internal Server Error" })
    }
}