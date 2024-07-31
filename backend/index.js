import express, { response } from "express";
import { port } from "./config.js";



const app=express();
app.get("/",(req,res)=>{
    res.status(234).send('this is a bookstore');
})

app.listen(port,() => {
  console.log('app is listening to the port: '+port);
})