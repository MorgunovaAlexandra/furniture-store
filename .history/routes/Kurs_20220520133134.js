const {Router}=require('express')
const {Course}=require('../models/')
const router=Router()

router.get('/',async(req,res)=>{
//const courses=await Course.getAll()
    res.render('courses',{
        title:'курсы',
        isKurs:true,
        //courses
    })
})

module.exports =router