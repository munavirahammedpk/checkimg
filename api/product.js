const express=require('express');
const router=express.Router();
const Note =require('../models/note-model')



router.get('/', (req, res) => {
    res.send('This is Home Page')
})

router.get('/list',async (req, res) => {
    //var userid = req.params.userId;
    //var notes=await Note.find({userId:userid});
    //console.log(req.params.text);
     var notes=await Note.find();
     res.json(notes);
})

router.post('/add',async (req, res) => {

    const newNote= Note({
        id:req.body.id,
        userId:req.body.userId,
        title:req.body.title,
        content:req.body.content,
    })
    await newNote.save();
    
    const response={messege:'New Note Created!'};
    res.json(response);
})

module.exports=router;





// const express=require('express');
// const router=express.Router();

// router.get('/',async(req,res)=>{
//     try {
//         res.json({
//             status:200,
//             message:'get data has successfully',
//         })
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send('server error')
//     }
// });

// router.get('/api2',async(req,res)=>{
//     try {
//         res.json({
//             status:200,
//             message:'get data has successfully 2',
//         })
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send('server error')
//     }
// });

// module.exports=router;