const express = require("express");
const contactControllers = require("../controllers/contact-controllers");
const router = express.Router();

router.route("/contact").post(contactControllers);

module.exports = router;