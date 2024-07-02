const express=require('express');
const app=express();

app.get('/demo',(req,res)=>{
    res.status(200).send('demo1 endpoint working properly');

});
module.exports=app;
