const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars')
const app=express()

const hbs=exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
})
app.engine('hbs',hbs.engine)//регестрируем движок и передаем значения
app.set('view ')
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'vue','index.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'vue','about.html'))
})
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log('сервер запущен'+PORT)
})