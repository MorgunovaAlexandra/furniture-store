const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars')
const app=express()
const kursRoute=require('./routes/Kurs');
const addRoute
const hbs=exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
})
app.engine('hbs',hbs.engine)//регестрируем движок и передаем значения
app.set('view engine','hbs')
app.set('views','views')

app.use(express.static('public'));

app.get('/',(req,res)=>{
res.render('index'),{
    title:'Главная',
    isHome:true
}
})

app.get('/add',(req,res)=>{
    res.render('add',{
        title:'добавить курсы',
        isAdd:true
    })
})
app.get('/kurs',(req,res)=>{
    res.render('courses',{
       title:"Курсы",
       isKurs:true
    })
})
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log('сервер запущен'+PORT)
})