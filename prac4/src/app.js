const express=require('express')
const connectDB=require('./config/db')
const noteModel=require('./models/note.model')
const app=express();
app.use(express.json())

connectDB();
app.get('/',(req,res)=>{
    res.send('done')
})

app.post('/create',async (req,res)=>{
   let {title,description}=req.body;
   const newNote=await noteModel.create({
    title,
    description
   })

   res.json({
    success:true,
    message:"note created successfully",
    newNote
   })
})

module.exports=app;