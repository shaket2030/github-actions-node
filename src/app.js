const express=require('express');
const app=express();

app.get('/demo',(req,res)=>{
    res.status(200).send('demo endpoint working properly');

});
module.exports=app;