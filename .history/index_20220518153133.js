const express=require('express');
const path=r
const app=express()
app.get('/',(req,res)=>{
res.sendFile()
})
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log('сервер запущен'+PORT)
})