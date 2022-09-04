const express=require('express');
const router=express.Router();

router.get('/',async(req,res)=>{
    try {
        res.json({
            status:200,
            message:'get data has successfully',
        })
    } catch (error) {
        console.error(error);
        return res.status(500).send('server error')
    }
});

router.get('/api2',async(req,res)=>{
    try {
        res.json({
            status:200,
            message:'get data has successfully 2',
        })
    } catch (error) {
        console.error(error);
        return res.status(500).send('server error')
    }
});

module.exports=router;