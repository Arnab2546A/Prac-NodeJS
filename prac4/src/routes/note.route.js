const express=require('express')
const route=express.Router();
const {createNoteController,getNoteController}=require('../controllers/note.controller')
route.post('/create',createNoteController);
route.get('/getNotes',getNoteController)
module.exports=route