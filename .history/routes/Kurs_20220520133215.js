const {Router}=require('express')
const {Course}=require('../models/course')
const router=Router()
const courses=Course.getAll()
router.get('/',async(req,res)=>{
//const courses=await Course.getAll()
    res.render('courses',{
        title:'курсы',
        isKurs:true,
        //courses
    })
})

module.exports =router