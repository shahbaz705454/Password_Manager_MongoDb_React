const Password = require("../Models/Passwords");

exports.getAllPasswords = async (req, res) => {
    try {
        const passwords = await Password.find();
        return res.status(200).json({
            success: true,
            passwords,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};