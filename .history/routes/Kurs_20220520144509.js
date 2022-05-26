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
router.get('/:id',async(req,res)=>{
    const cours=await Course.getById(req.params.id)
    res.render('cours',{
        title:``,
        cours
    })
})

module.exports =router