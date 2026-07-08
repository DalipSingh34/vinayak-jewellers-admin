const AdminModel = require("../models/Admin.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            })
        }

        const existing = await AdminModel.findOne({ email });
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await AdminModel.create({
            name, email, password: hashedPassword, role: "admin"
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully. Please login.",

            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },
        })

    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            })
        }

        const user = await AdminModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const profile = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            admin: req.admin
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { register, login, profile };