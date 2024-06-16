const express = require("express");
const adminPanel = require("../controllers/admin-conttrols");
const userAuthMiddleware = require("../middlewares/user-authMiddleware");
const adminMiddleware = require("../middlewares/admin-miidleware");

const router = express.Router();

router.route("/users").get( adminMiddleware,userAuthMiddleware, adminPanel.getAllUsers);
router.route("/contact").get(userAuthMiddleware, adminPanel.getAllContact);

module.exports = router;