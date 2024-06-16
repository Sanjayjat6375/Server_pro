require("dotenv").config();
const cors = require("cors")
const express = require("express");
const app = express();
const authRouter = require("./router/router-auth.js");
const contactRouter = require("./router/contact-auth.js");
const mongoDb = require("./utils/db.js");
const errorMiddleWare = require("./middlewares/error-middleware.js");
const serviceRouter = require("./router/service-auth.js");
const adminRouter = require("./router/admin-route.js");
 
// cors connect to backend to fronted
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/router", authRouter);
app.use("/api/form", contactRouter)
app.use("/api/service", serviceRouter)
app.use("/api/admin", adminRouter)

app.use(errorMiddleWare);
const PORT = process.env.PORT || 3000;

mongoDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error("Failed to connect to the database", error);
});
