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
        const course=Course.getAll()
    }
    static getAll(){
        return new Promise((resolve,reject)=>{
            fs.readFile(path.join(__dirname,'..','data','courses.json'),'utf-8',(err,data)=>{
                if (err) {reject(err)}
            })
        })
     
    }
}