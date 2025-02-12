const express = require("express");

const router = express.Router();

const { createPassword } = require("../controller/createPassword");
const { editPassword } = require("../controller/editPassword");
const { deletePassword } = require("../controller/deletePassword");
const { getAllPasswords } = require("../controller/getAllPassword");

router.get("/getAllPasswords", getAllPasswords);
router.post("/createPassword", createPassword);
router.post("/editPassword", editPassword);
router.post("/deletePassword", deletePassword);

module.exports = router;