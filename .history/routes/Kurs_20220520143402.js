const {Router}=require('express')
const Course=require('../models/course')
const router=Router()

router.get('/',async(req,res)=>{
const courses=await Course.getAll()
    res.render('courses',{
        title:'курсы',
        isKurs:true,
        courses
    })
})
const cours=await Course

module.exports =router