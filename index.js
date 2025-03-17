import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import jwt, { decode } from "jsonwebtoken";
import productRouter from "./routes/productRouter.js";
import { verifyJWT } from "./middleware/auth.js";
import orderRouter from "./routes/orderRouter.js";

const app = express();

//mongodb+srv://admin:123@cluster0.jxwc0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect("mongodb+srv://admin:123@cluster0.jxwc0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
    () => {
        console.log("Connected to the Database")
    }
).catch(
    () => {
        console.log("Connection fail")
    }
)

//middleware
app.use(bodyParser.json());
app.use(verifyJWT)




//user
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use("/api/order", orderRouter)





//app run
app.listen(3000, () => {
    console.log("Server is Running on port 3000")
}
)

