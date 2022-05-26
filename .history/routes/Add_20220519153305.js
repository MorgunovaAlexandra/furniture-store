const {Router}=require('express');
const Course=re
const router=Router()
router.get('/',(req,res)=>{
    res.render('add',{
        title:'добавить курсы',
        isAdd:true
    })
 })
router.post('/',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports=router