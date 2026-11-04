const express=require('express')
const app=express();

console.log('zzzzzzz')
console.log(express.json())
app.use(express.json())
const notes=[];
app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.status(201).json({
        message:'new note pushed'
    })
    
})


app.get('/notes',(req,res)=>{
    res.status(200).json(notes)
})


app.delete('/notes/:index',(req,res)=>{
    const idx=req.params.index;
    delete notes[idx];
    res.send('note deleted successfully')
})
console.log(notes)
module.exports=app;