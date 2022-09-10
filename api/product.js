const { json, response } = require('express');
const express = require('express');
const router = express.Router();
const Note = require('../models/note-model')



router.get('/', (req, res) => {
    res.send('This is Home Page')
})

router.get('/list', async (req, res) => {
    var notes = await Note.find();
    res.json(notes);
})

router.post('/add', async (req, res) => {
    const newNote = new Note({
        id: req.body.id,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
    })
    await newNote.save();

    const response = { messege: 'New Note Created!' };
    res.json(response);
})

router.post('/delete', async (req, res) => {
    await Note.deleteOne({ id: req.body.id });

    const response = { messege: "note delete id is :" + req.body.id };
    res.json(response);
})

router.post('/update', async (req, res) => {
    await Note.updateOne({ id: req.body.id }, {
        $set:{
            title:req.body.title,
            content:req.body.content,
            dateAdded:req.body.dateAdded
        }
    }).then(()=>{
         res.json({messege:"note update at id : "+req.body.id});
    })
});

router.get('/list/:userId',async(req,res)=>{
   var details= await Note.find({userId:req.params.userId});
   res.json(details);

})

module.exports = router;
