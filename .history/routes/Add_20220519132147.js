const {Router}=require('express');
const router=Router()
router.get('/add',(req,res)=>{
    res.render('add',{
        title:'добавить курсы',
        isAdd:true
    }))