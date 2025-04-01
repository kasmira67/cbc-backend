import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import jwt, { decode } from "jsonwebtoken";
import productRouter from "./routes/productRouter.js";
import { verifyJWT } from "./middleware/auth.js";
import orderRouter from "./routes/orderRouter.js";
import dotenv from 'dotenv';
dotenv.config()

const app = express();

mongoose.connect(process.env.MONGO_URL).then(
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

