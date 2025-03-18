import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


// generate the token
const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
}


// function for register user
const registerUser = async (req, res) => {

    try {
        const { name, email, password, phonenumber } = req.body;

        if (!name || !email || !password || !phonenumber) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (String(phonenumber).length !== 10) return res.status(400).json({ message: 'phonenumber must be 10 numbers' });

        const isUserExists = await User.findOne({ email });
        if (isUserExists) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        User.create({
            name, email, phonenumber, password: hashedPassword
        });

        res.status(201).json({ message: "User created sucessfully" });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
};


// function for login
const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ message: "All fields are required" });

        const user = await User.findOne({ email });


        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.json({ message: 'Login sucessful', token: generateToken(user._id) });

    }

    catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: err.message });
    }

};

// Get the user profile
const getUser = async (req, res) => {

    try {
        const user = await User.findById(req.user.id);
        // console.log(user);

        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: "Data retrived successfully", data: user });
    }

    catch (err) {
        return res.status(500).json({ message: err.message });
    }

};


// update the user
const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        const { email, password, phonenumber, name } = req.body;

        user.name = name || user.name;
        user.email = email || user.email;
        user.phonenumber = phonenumber || user.phonenumber;

        if (password) user.password = await bcrypt.hash(req.body.password, 10);

        await user.save();

        res.status(200).json({ message: "Details updated", data: user });
    }

    catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

// Delete the user
const deleteUser = async (req, res) => {

    try {
        const user = User.findById(req.user.id);
        if (!user) return res.status(401).json({ message: "User not found" });

        await User.deleteOne();
        res.status(200).json({ message: "User deleted sucessfully" });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }

};

export { registerUser, loginUser, getUser, updateUser, deleteUser };