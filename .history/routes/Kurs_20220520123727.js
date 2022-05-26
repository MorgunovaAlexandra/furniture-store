const {Router}=require('express')
const router=Router()
const {Cou}
router.get('/',(req,res)=>{
    res.render('courses',{
        title:'курсы',
        isKurs:true
    })
})

module.exports =router