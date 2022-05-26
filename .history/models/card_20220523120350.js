const path=require('path');
const fs=require('fs')
const p=path.dirname(path.join(
    process.mainModule.filename,
    'data',
    'card.json'
))
class Card{
    
    static async add(course){
        const card=await Card.fetch()
        const indx=card.findIndex(i=>i.id===course.id)
        const canditate=card.courses[indx]
        if(canditate){
            //курс уже есть
            canditate.count++;
            card.courses[indx]=canditate
        }
        else{
            //нужно добавить
            course.count=1;
            card.courses.push(course)
        }
        card.price=+
    }
    static async fetch(){
        return new Promise((res,rej)=>{
            fs.readFile(p,'utf-8',(err,data)=>{
                if(err){
                    rej(err)
                }
                else{
                    JSON.parse(data)
                }
            })
        })
    }
}
module.exports=Card