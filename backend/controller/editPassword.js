const Password = require("../Models/Passwords");

exports.editPassword = async (req, res) => {
    try {
        const { id, site, username, password } = req.body;
        if (!id || !site || !username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const updatedPassword = await Password.findByIdAndUpdate(
            id,
            { site, username, password },
            { new: true, runValidators: true }
        );
        if (!updatedPassword) {
            return res.status(404).json({ message: "Password entry not found" });
        }

        return res.status(200).json({
            success: true,
            updatedPassword,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};