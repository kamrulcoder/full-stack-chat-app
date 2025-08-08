// ========================
// import all dependecies 
// ========================
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from 'cookie-parser';
import cors from "cors"







// ========================
// import all routes here  
// ========================
import authRoute from "./routes/auth.route.js"
import messagesRoute from "./routes/messages.route.js"
import { app, server } from "./lib/socket.js"
import path from "path";


// implement all global middleware 
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(cookieParser())
const allowedOrigins = ['http://localhost:5173', 'https://your-production-react-app.com'];
const __dirname = path.resolve();
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // If you need to send cookies or authorization headers
};

app.use(cors(corsOptions));
dotenv.config();



// ===============================
// All routes implement here   
// ===============================

app.use("/api/auth", authRoute)
app.use("/api/messages", messagesRoute)



if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
  });
}


// ===============================
// Mongodb connect with server   
// ===============================

const mongodb_url = process.env.MONGO_URL;
const port = process.env.PORT || 5000;
async function connectToDatabase() {
  try {
    await mongoose.connect(mongodb_url);
    server.listen(port, () => {
      console.log(`server is listening with mongodb on  port ${port}`);
    })
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

connectToDatabase();





