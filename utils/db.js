const mongoose = require("mongoose");

const URI = process.env.MONGOOSE_URL;

const mongoDb = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
}

module.exports = mongoDb;
