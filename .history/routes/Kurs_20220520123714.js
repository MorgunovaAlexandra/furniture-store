const {Router}=require('express')
const router=Router()
с
router.get('/',(req,res)=>{
    res.render('courses',{
        title:'курсы',
        isKurs:true
    })
})

module.exports =router