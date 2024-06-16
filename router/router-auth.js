const express = require("express");
const controllers = require("../controllers/router-controllers");
const validate = require("../middlewares/vaildoter-middleware");
const { signupSchema, loginSchema } = require("../vaildotrs/auth-vaildotrs");
const userAuthMiddleware = require("../middlewares/user-authMiddleware");


const router = express.Router();

// Home route
router.get("/", controllers.home);

// Register route
router.route("/register").post(validate(signupSchema), controllers.register);

// Login route
router.route("/login").post(validate(loginSchema), controllers.login);

// user auth
router.route("/user").get(userAuthMiddleware, controllers.userAuth);

module.exports = router;
