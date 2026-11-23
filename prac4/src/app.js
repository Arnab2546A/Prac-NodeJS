const express=require('express')
const connectDB=require('./config/db')
const app=express();

connectDB();
app.get('/',(req,res)=>{
    res.send('done')
})

module.exports=app;