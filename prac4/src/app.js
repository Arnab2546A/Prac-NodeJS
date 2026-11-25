const express=require('express')
const connectDB=require('./config/db')
const notesRoute=require('./routes/note.route')
require('dotenv').config()
const app=express();
app.use(express.json())

connectDB();
app.get('/',(req,res)=>{
    res.send('done')
})

app.use('/notes',notesRoute)
console.log(process.env.mongodb_uri)
module.exports=app;