const uuid=require('uuid/v4');
const fs=require('fs');
const path=require('path')
class Course{
    constructor(name,price,img){
       this.name=name
       this.price=price
       this.img=img
       this.id=uuid()
    }
    save(){
        
    }
    static getAll(){
     fs.readFile(path.join(__dirname,'..','data','courses.json'),'utf-8',(err,data)=>{
         if 
     })
    }
}