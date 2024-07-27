const express = require("express");
const notes=require("./data/notes")
dotenv.config()
const PORT=process.env.PORT || 3000

const app=express();
app.get("/",(req,res)=>{
    res.send("API IS RUNNING")
})

app.get("/api/notes",(req,res)=>{
   res.send(notes);
})

app.listen(PORT,()=>{
    console.log("Server listening at {5000} port");
})