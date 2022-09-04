const express=require('express');
const app =express();
const product=require('./api/product')

const PORT=process.env.port||5050;

app.use("/",product);

app.listen(PORT,()=>{
    console.log('Server is running in port '+ PORT);
})