import express from "express";
const app = express();

app.get('/',(req,res)=>{
    res.send('HTTPS in ExpressJS')
})

app.get('/fruit',(req,res)=>{
    res.send('tomato is not a fruit')
})

export default app;