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