const {Router}=require('express')
const router=Router()

router.get('/kurs',(req,res)=>{
    res.render('courses',{
        title:'',
        isKurs:true
    })
})

module.export =router