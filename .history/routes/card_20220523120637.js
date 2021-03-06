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
    
    const card=await Card.fetch()
    res.render('card',{
        title:'Корзина',
        card,
        courses:card.
        isCard:true
    })
})
module.exports=router;