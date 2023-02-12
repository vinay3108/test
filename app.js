const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("server is running");
})

app.listen(4000,()=>{
    console.log(`server running on port 4000`);
})