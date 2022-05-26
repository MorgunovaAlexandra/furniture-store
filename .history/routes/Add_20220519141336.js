const {Router}=require('express');
const router=Router()
router.get('/',(req,res)=>{
    res.render('add',{
        title:'добавить курсы',
        isAdd:true
    })
 })
router.

module.exports=router