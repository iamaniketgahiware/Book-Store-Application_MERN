import express from "express"
import { UserData, Login } from "../controller/user.controller.js"

const route = express.Router()

route.post("/signup", UserData)
route.post("/login", Login)

export default route

