const jwt = require("jsonwebtoken");
const User = require("../modules/user-module");

const userAuthMiddleware = async (req, res, next) => {
    try {
        // Retrieve the token from the Authorization header of the request
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ msg: "No authorization token provided" });
        }

        // Remove the 'Bearer' prefix and any leading/trailing whitespace
        const jwtToken = token.replace("Bearer", "").trim();

        // Verify the token and extract payload
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        if (!isVerified || !isVerified.email) {
            return res.status(401).json({ msg: "Invalid token" });
        }

        // Retrieve user data from the database
        const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });
        if (!userData) {
            return res.status(401).json({ msg: "User not found" });
        }

        // Set user information in the request object
        req.user = userData;
        req.token = jwtToken; // It's better to store the cleaned token
        req.userId = userData._id;

        next();
    } catch (error) {
        res.status(401).json({ msg: "Unauthorized: Invalid token" });
    }
};

module.exports = userAuthMiddleware;
