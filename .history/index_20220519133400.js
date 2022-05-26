const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars')
const app=express()
const kursRoute=require('./routes/Kurs');
const addRoute=require('./routes/Add');
const homeRoute=require('./routes/Home')
const hbs=exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
})
app.engine('hbs',hbs.engine)//регестрируем движок и передаем значения
app.set('view engine','hbs')
app.set('views','views')

app.use(express.static('public'));

app.use('kursRoute)
app.use(addRoute)
app.use(homeRoute)

const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log('сервер запущен'+PORT)
})