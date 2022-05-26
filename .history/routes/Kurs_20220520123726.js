const {Router}=require('express')
const router=Router()
const {Cour}
router.get('/',(req,res)=>{
    res.render('courses',{
        title:'курсы',
        isKurs:true
    })
})

module.exports =router