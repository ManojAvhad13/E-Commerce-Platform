const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
    try {
        const { email, password, name } = req.body;

        // Validation
        if (!email) return res.status(400).json({ success: false, message: "Email is required" });
        if (!password) return res.status(400).json({ success: false, message: "Password is required" });
        if (!name) return res.status(400).json({ success: false, message: "Name is required" });

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create payload
        const payload = {
            name,
            email,
            password: hashPassword,
            role: "GENERAL", // Default role
            profilePic: req.body.profilePic || null, // Optional profile picture
        };

        // Save new user
        const newUser = new userModel(payload);
        const savedUser = await newUser.save();

        // Send success response
        res.status(201).json({
            data: savedUser,
            success: true,
            message: "User created successfully!",
        });

    } catch (error) {
        // Handle errors
        console.error("Error during user sign-up:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
}

module.exports = userSignUpController;
