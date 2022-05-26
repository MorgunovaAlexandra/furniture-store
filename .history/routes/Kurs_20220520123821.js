const {Router}=require('express')
const router=Router()
const {Course}=require('../models/course')
router.get('/',await(req,res)=>{

    res.render('courses',{
        title:'курсы',
        isKurs:true
    })
})

module.exports =router