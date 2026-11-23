const mongoose=require('mongoose')
const connectDB=async()=>{
    try{
    await mongoose.connect('mongodb+srv://duaarnab1_db_user:Arnab%402004@cluster0.wthofvn.mongodb.net/')
    console.log('DB has connected')
    }
    catch(err){
        console.log('DB has not been connected for',err);
    }
}

module.exports=connectDB;