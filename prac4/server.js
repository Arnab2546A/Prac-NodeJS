require('dotenv').config()
const app=require('./src/app')

app.listen(process.env.port,()=>{
    console.log(`the server is running on port ${process.env.port}`)
})