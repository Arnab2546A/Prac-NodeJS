const noteModel=require('../models/note.model')

const createNoteController=async (req,res)=>{
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
}

const getNoteController=async (req,res)=>{
   try{
      const getAllNotes=await noteModel.find();
      res.status(200).json({
         message:"all nodes received",
         getAllNotes
      })
   }
   catch(err){
      console.log("notes are not fetched")
   }
}

module.exports={createNoteController,getNoteController}