const express=require('express')
const route=express.Router();
const {createNoteController,getNoteController,getNoteByIdController,updateNoteController,deleteNoteController}=require('../controllers/note.controller')
route.post('/create',createNoteController);
route.get('/getNotes',getNoteController);
route.get('/:id',getNoteByIdController)
route.put('/:id',updateNoteController)
route.delete('/:id',deleteNoteController)
module.exports=route