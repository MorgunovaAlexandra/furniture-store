const {Router}=require('express')
const router=Router()
const {Course}=require('../models/course')
router.get('/',async(req,res)=>{
const courses=Course.get
    res.render('courses',{
        title:'курсы',
        isKurs:true
    })
})

module.exports =router