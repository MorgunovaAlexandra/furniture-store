const path=require('path');
const fs=require('fs')
//const p=path.join(path.dirname(process.mainModule.filename),'data','card.json')
class Card{
    
    static async add(course){
        const card= await Card.fetch()
        console.log(card)
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
     const car=JSON.parse(JSON.stringify(card))
     let roc=null
     if(course.count===1){
         //удалить
         console.log('я тут')
        
         roc=car.courses.filter((i)=>i.id!==id)
         console.log('roc',roc)
     }else{
         //уменьшить сcount
         const a=('eee',car.courses[indx].count)
         const b=a-1//count
        car.courses[indx].count=b)
         console.log(car.courses[indx])//объект измененный
         //roc=car.courses[indx].count--
     }
     card.price -=course.price
     const obj={
        "courses": roc ,
         "price":card.price
     }
     return new Promise((res,rej)=>{
        fs.writeFile(path.join(__dirname,'..','data','card.json'),JSON.stringify(obj),(err)=>{
            if(err){
                rej(err)
            }
            else{
                res(obj)
            }
        })
    })
    }
}
module.exports=Card