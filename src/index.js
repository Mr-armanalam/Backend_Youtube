// require("dotenv").config({path: './env'})
import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Error connecting to MongoDB", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MONGODB connection failed !!! ", err);
  });

/*

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

(async () =>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) =>{
            console.error("Error connecting to MongoDB", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error:",error)
        throw error
    }
})()
    */
