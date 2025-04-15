import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import mongoose from "mongoose";
dotenv.config();

const app = express();

app.listen(3000, () => {
  const db = connectDB();
  
  console.log("Server is running on port 3000, Hello!");
});


app.get("/products", (req, res) => {
});
