const Password = require("../Models/Passwords");

exports.deletePassword = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }

        const deletedPassword = await Password.findByIdAndDelete(id);
        if (!deletedPassword) {
            return res.status(404).json({ message: "Password entry not found" });
        }

        res.status(200).json({
            success: true,
            message: "Password entry deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};