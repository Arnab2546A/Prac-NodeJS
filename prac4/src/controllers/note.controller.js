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

const getNoteByIdController=async (req,res)=>{
   try{
      const noteId=req.params.id;
   const getNote=await noteModel.findById(noteId)
   res.status(200).json({
      message:"note founded successfuly",
      getNote
   })
   }
   catch(err){
      res.status(500).send("note is not updated")
   }
}

const updateNoteController=async (req,res)=>{
   try{
      const noteId=req.params.id;
      const updatedBody=req.body;
      const updateNote=await noteModel.findByIdAndUpdate(noteId,updatedBody,{returnDocument: 'after'})
      res.status(200).json({
         message:"note updated successfully",
         updateNote
      })
   }
   catch(err){
      res.status(500).send("note is not updated")
   }
}

const deleteNoteController=async (req,res)=>{
   try{
      const noteId=req.params.id;
      await noteModel.findByIdAndDelete(noteId);
      res.status(200).json({
         message:"note deleted successfully"
      })
   }
   catch(err){
      res.status(500).send("note is not founded")
   }

}

module.exports={
   createNoteController,
   getNoteController,
   getNoteByIdController,
   updateNoteController,
   deleteNoteController
}