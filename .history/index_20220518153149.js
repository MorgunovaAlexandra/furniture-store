const express=require('express');
const path=require('path')
const app=express()
app.get('/',(req,res)=>{
res.sendFile(path)
})
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log('сервер запущен'+PORT)
})