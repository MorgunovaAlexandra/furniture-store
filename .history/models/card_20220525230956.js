const path=require('path');
const fs=require('fs')
//const p=path.join(path.dirname(process.mainModule.filename),'data','card.json')
class Card{
    
    static async add(course){
        console.log('fetch')
        const card= await Card.fetch()
        console.log('cardddd',card)
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
        return await new Promise((res,rej)=>{
            fs.readFile(path.join(__dirname,'..','data','card.json'),'utf-8',(err,data)=>{
                if(err){
                    rej(err)
                }
                else{
                    console.log('это тутт',JSON.parse(data))
                    res(JSON.parse(data))
                }
            })
        })
    }
}
module.exports=Card