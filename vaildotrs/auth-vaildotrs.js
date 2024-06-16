const zod = require("zod");
const loginSchema = zod.object({
    email: zod.string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "Email must be at least 3 chars." })
    .max(255, { message: "Email must not be more than 255 chars." })
    .email({ message: "Invalid email address" }),
    password: zod.string({ required_error: "Password is required" })
        .trim()
        .min(7, { message: "Password must be at least 7 chars." })
        .max(1024, { message: "Password must not be more than 1024 chars." }),
});

const signupSchema = loginSchema.extend({
    username: zod.string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 chars." })
        .max(255, { message: "Name must not be more than 255 chars." }),

    phone: zod.string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at least 10 chars." })
        .max(20, { message: "Phone must not be more than 20 chars." }),
    
});

module.exports = {signupSchema,loginSchema};
