const {Router}=require('express');
const Card = require('../models/card');
const Course=require('../models/course')
const router=Router()
 router.post('/add',async (req,res)=>{
     const couse=await Course.getById(req.body.id);
     const ccard=await Card.add(couse)
     res.redirect('/card')
 })

router.get('/',async(req,res)=>{
    const card= await Card.fetch()
    //console.log(card)
    res.render('card',{
                 title:'Корзина',
                 card,
                 courses:card.courses,
                 price:card.price,
                 isCard:true
             })
})
//удаление из корзины
router.delete('/remove/:id',(req,res)=>{
    await Card.delete(req.params.id)
})

module.exports=router;