const Admin = require('./admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signToken = id => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
}

const register = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    const adminDetails = {
        name: req.body.name,
        email: req.body.email,
        password: secPass
    }
    const adminObject = await Admin.create(adminDetails).then((data) => {
        res.status(200).json({
            message: "success",
            data: data
        });
    }).catch(err => {
        res.status(500).json({
            message: "error",
            error: err
        });
    });
}

const login = async (req, res, next) => {
    const { email, password } = req.body
    if (!email && !password) {
        res.status(400).json({
            message: "Please provide email and password",
        });
    }
    const admin = await Admin.findOne({ email: email });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
        res.status(401).json({
            message: "Incorrect email or password",
        });
    }
    const token = signToken(admin._id);
    res.status(200).json({
        message: "success",
        data: admin,
        token: token
    });
}


module.exports = {
    register,
    login
}