const express=require('express')
const app=express();
const noteModel=require('./models/note.model')
app.use(express.json())


app.post('/notes',async (req,res)=>{
    const data=req.body;
   await noteModel.create({
        title:data.title,
        description:data.description,
    })
    res.status(201).json({
        message:'new note created'
    })
    
})


app.get('/notes',async (req,res)=>{
    const notes=await noteModel.find();
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})


app.delete('/notes/:index',(req,res)=>{
    const idx=req.params.index;
    delete notes[idx];
    res.send('note deleted successfully')
})

app.patch('/notes/:index',(req,res)=>{
    const idx=req.params.index;
    notes[idx].description=req.body.description;
    res.send('note description updated successfully')
})
module.exports=app;