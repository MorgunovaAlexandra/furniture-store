const path=require('path');
const fs=require('fs')
const p=path.dirname(path.join(
    process.mainModule.filename,
    'data',
    'card.json'
))
class Card{
    constructor(){
     
    }
    static add(){
        
    }
    static async fetch(){
        return new Promise((res,rej)=>{
            fs.readFile(p,'utf-8',(err,data)=>{
                if(err){
                    re
                }
            })
        })
    }
}
module.exports=Card