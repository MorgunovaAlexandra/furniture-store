const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars')
const app=express()

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
    title:'Главная'
}
})
app.get('/about',(req,res)=>{
    //res.sendFile(path.join(__dirname,'vue','about.html'))
    res.render('about',{
        title:'О курсах',

    })
})
app.get('/add',(req,res)=>{
    res.render('add',{
        title:'добавить курсы'
    })
})
app.get('/kurs',(req,res)=>{
    res.render('courses',{
       title:"Курсы"
    })
})
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log('сервер запущен'+PORT)
})