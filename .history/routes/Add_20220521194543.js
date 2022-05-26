const {Router}=require('express');
const Course=require('../models/course')
const router=Router()
router.get('/',(req,res)=>{
    res.render('add',{
        title:'добавить курсы',
        isAdd:true
    })
 })
router.post('/',async(req,res)=>{
    const course=new Course(req.body.name,req.body.price,req.body.img)
    await course.save()
    console.log(req.body.m)
    res.redirect('/')
})

module.exports=router