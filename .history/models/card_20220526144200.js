const path=require('path');
const fs=require('fs');
const { json } = require('stream/consumers');
//const p=path.join(path.dirname(process.mainModule.filename),'data','card.json')
class Card{
    
    static async add(course){
        const card= await Card.fetch()
        const indx=card.courses.findIndex(i=>i.id===course.id)
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
        card.price+=+course.price

        return new Promise((res,rej)=>{
            fs.writeFile(path.join(__dirname,'..','data','card.json'),JSON.stringify(card),(err)=>{
                if(err){
                    rej(err)
                }
                else{
                    res()
                }
            })
        })
    }
    static  async fetch(){
        return  new Promise((res,rej)=>{
            fs.readFile(path.join(__dirname,'..','data','card.json'),'utf-8',(err,data)=>{
                if(err){
                    rej(err)
                }
                else{
                    
                    res(JSON.parse(data))
                }
            })
        })
    }
    static async delete(id){
     const card=await Card.fetch()
     console.log('yf',card)
     const indx=card.courses.findIndex((i)=>i.id===id)
     console.log('indx',indx)
     const course=card.courses[indx]
     console.log(course)
     if(course.count===1){
         //удалить
       
         card.courses.filter((i)=>JSON.stringify(i.id)!==JSON.stringify(id))
         
         console.log('1 стол',course.count)
     }else{
         //уменьшить сcount
         
         card.courses[indx].count--
         console.log('уменьшаем количество')
     }
     card.price -=course.parse
     return new Promise((res,rej)=>{
        fs.writeFile(path.join(__dirname,'..','data','card.json'),JSON.stringify(card),(err)=>{
            if(err){
                rej(err)
            }
            else{
                res()
            }
        })
    })
    }
}
module.exports=Card