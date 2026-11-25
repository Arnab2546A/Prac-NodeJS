const mongoose=require('mongoose')
const connectDB=async()=>{
    try{
    await mongoose.connect(process.env.mongodb_uri)
    console.log('DB has connected')
    }
    catch(err){
        console.log('DB has not been connected for',err);
    }
}

module.exports=connectDB;