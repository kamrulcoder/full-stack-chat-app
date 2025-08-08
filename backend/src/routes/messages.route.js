import express from "express"
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();


//: message's user get route 
router.get("/users", protectRoute,  getUsersForSidebar)


// Get message get route  by user id  
router.get("/:id",protectRoute,  getMessages)


// Send  message  post route here 
router.post("/send/:id",protectRoute,  sendMessage)

export default router; 