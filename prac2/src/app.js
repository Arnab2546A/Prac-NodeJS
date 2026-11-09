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

app.delete('/notes/:idx',async(req,res)=>{
    const idx=req.params.idx;
    await noteModel.findOneAndDelete({_id:idx});
    res.status(200).json({
        message:"note deleted successfully"
    })
})

app.patch('/notes/:idx',async(req,res)=>{
    const idx=req.params.idx;
    await noteModel.findOneAndUpdate({_id:idx},{
        description:req.body.description
    })
    res.status(200).json({
        message:"note updated successully"
    })
})

app.get('/notes',async (req,res)=>{
    const notes=await noteModel.find();
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})


module.exports=app;