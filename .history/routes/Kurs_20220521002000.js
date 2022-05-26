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
router.get('/:id/edit',async(req,res)=>{
    const cours=await Course.getById(req.params.id)
    if(req.params.allow){
        return res.redirect('/')
    }
    res.render('editCorse',{
        cours
    })
})
router.post('/courses/edit',async(req,res)=>{
    await Course.update(req.body)
    res.redirect('/courses')
})
router.get('/:id',async(req,res)=>{
    const cours=await Course.getById(req.params.id)
    res.render('cours',{
        layout:'empty',
        title:`${cours.name}`,
        cours
    })
})

module.exports =router