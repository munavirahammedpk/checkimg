// const express=require('express');
// const app =express();
// const product=require('./api/product')

// const PORT=process.env.port||5050;

// app.use("/",product);

// app.listen(PORT,()=>{
//     console.log('Server is running in port '+ PORT);
// })

const express = require('express');
const { url } = require('inspector');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mnvr:mnvr@samplecluster.n0zzr.mongodb.net/flutterNoteApp?retryWrites=true&w=majority")
    .then(() => {
        console.log('Database connection successful');
        const noteRouter = require('./api/product')
        app.use('/', noteRouter);
    }).catch(() => {
        console.log('Database connection error');
    })



const PORT = process.env.port || 5050

app.listen(PORT, () => {
    console.log('Server started At ' + PORT);
});

