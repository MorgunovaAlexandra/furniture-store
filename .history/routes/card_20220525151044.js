const {Router}=require('express');
const Card=require('../models/card')
const Course=require('../models/course')
const router=Router()
// router.post('/add',async (req,res)=>{
//     const couse=await Course.getById(req.body.id);
//     console.log(couse)
//     await Card.add(couse)
//     res.redirect('/card')
// })
// router.get('/',async(req,res)=>{
    
//     const card=await Card.fetch()
//     console.log(card.courses)
//     res.render('card',{
//         title:'Корзина',
//         card,
//         courses:card.courses,
//         price:card.price,
//         isCard:true
//     })
// })
router.get('/',async(req,res)=>{
    console.log('перед fetch')
    const card= Card.fetch()
    console.log('после')
    res.render('card',{
                 title:'Корзина',
                card,
                 courses:card.courses,
                 price:card.price,
        //         isCard:true
        //     })
})
module.exports=router;