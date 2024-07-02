const express=require('express');
const app=express();

app.get('/demo',(req,res)=>{
    res.status(400).send('demo endpoint not working properly');

});
module.exports=app;
