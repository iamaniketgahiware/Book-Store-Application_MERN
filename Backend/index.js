import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
const app = express()

app.use(cors());
app.use(express.json());

dotenv.config()

import bookRoute from "./router/book.router.js"
import userRoute from "./router/user.route.js"

const PORT = process.env.PORT || 4000
const URI = process.env.MONGODBURI

try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
} catch (error) {
    console.log("Error", error);
}


app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})