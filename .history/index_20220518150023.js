const express=require('express')
const app=express()
const PORT=process.env.PORT
app.listen(3000,()=>{
    console.log('сервер запущен')
})