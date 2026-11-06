const mongoose=require('mongoose');


const connectDB=async ()=>{
  await mongoose.connect('mongodb+srv://duaarnab1_db_user:duaarnab@prac2.vgnxtq8.mongodb.net/pracDB');
  console.log("DB is connected")
}

module.exports=connectDB
