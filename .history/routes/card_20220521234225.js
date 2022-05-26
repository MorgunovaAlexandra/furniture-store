const {Router}=require('express');
const Card=require('../models/card')
const Course=require('../models/course')
const router=Router()
router.post('/add',async (req,res)=>{
    const couse=await Course.getById(req.body.id);
    await Card.add(couse)
    res.redirect('/card')
})
router.get('/',async(req,res)=>{
    res.render()
    const Card=
})
module.exports=router;