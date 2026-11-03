const express=require('express')
const app=express();
app.listen(3000)
app.get('/',(req,res)=>{
    res.send("hello universe")
})

app.get('/about',(req,res)=>{
    res.send('sending response for about route')
})