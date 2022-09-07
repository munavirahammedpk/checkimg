const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const product = require('./api/product')

const PORT = process.env.port || 5050;

app.use(bodyParser.urlencoded({ extended: true }));
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
})

// const express = require('express');
// const { url } = require('inspector');
// const app = express();
// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://mnvr:mnvr@samplecluster.n0zzr.mongodb.net/flutterNoteApp?retryWrites=true&w=majority")
//     .then(() => {
//         console.log('Database connection successful');
//     }).catch(() => {
//         console.log('Database connection error');
//     })

// const noteRouter = require('./api/product')
// app.use('/', noteRouter);



// const PORT = process.env.port || 5050

// app.listen(PORT, () => {
//     console.log('Server started At ' + PORT);
// });

