const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const product = require('./api/product')

const PORT = process.env.port || 5050;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use("/", product);

app.listen(PORT, () => {
    console.log('Server is running in port ' + PORT);
});

mongoose.connect('mongodb+srv://mnvr:mnvr@samplecluster.n0zzr.mongodb.net/flutterNoteApp?retryWrites=true&w=majority').then(()=>{
    console.log('data base connection success');
}).catch(()=>{
    console.log('connection error');
});