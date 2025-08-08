import express from "express"
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router(); 

//  post  route here 
router.post("/signup",signup)

// Login  post route here 
router.post("/login", login)

// Logout  post   route here 
router.post("/logout",logout)



//  Update  put  route here 
router.put("/update-profile", protectRoute, updateProfile)


//  check authentication  get route 
router.get("/check", protectRoute,  checkAuth)





export default router; 