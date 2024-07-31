import express, { response } from "express";
import { port ,mongodburl} from "./config.js";
import mongoose from "mongoose";


const app=express();
app.get("/",(req,res)=>{
    res.status(234).send('this is a bookstore');
})

app.listen(port,() => {
  console.log('app is listening to the port: '+port);
})

mongoose.connect(mongodburl)
.then(() => {console.log(" Mongodb is connected")})
.catch((err) => {console.log("error")});
