const {Router}=require('express')
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