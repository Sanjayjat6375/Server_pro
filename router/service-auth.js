const express = require("express");
const { getService, postService } = require("../controllers/service-controllers");

const router = express.Router();

// Service GET request
router.route("/").get(getService);

// Service POST request 
router.route("/servicepage").post(postService);

module.exports = router;
