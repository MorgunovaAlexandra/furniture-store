const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars')
const app=express()
const kursRoute=require('./routes/Kurs');
const addRoute=require('./routes/Add');
const homeRoute=require('./routes/Home');
const cardRoute=require('./routes/card')
const hbs=exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
})
app.engine('hbs',hbs.engine)//регестрируем движок и передаем значения
app.set('view engine','hbs')
app.set('views','views')

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use('/kurs',kursRoute)
app.use('/add',addRoute)
app.use('/',homeRoute)
//app.use('/card',cardRoute)

const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log('сервер запущен'+PORT)
})