const {Router}=require('express');
const Card=require('../models/card')
const Course=require('../models/course')
const router=Router()
router.post('/',async (req,res)=>{
    const couse=await Course.getById(req.body.id)
})
module.exports=router;