const uuid=require('uuid');
const fs=require('fs');
const path=require('path')
class Course{
    constructor(name,price,img){
       this.name=name
       this.price=price
       this.img=img
       this.id=uuid.v4()
    }
    toJson(){
        return {
            name:this.name,
            price:this.price,
            img:this.img,
            id:this.id
        }
            
       
    }
    async save(){
        const course=await Course.getAll()
        course.push(this.toJson())
        console.log(course)
       fs.writeFile(
           path.join(__dirname,'..','data','courses.json'),
           JSON.stringify(course),
           (err)=>{
               if(err) throw err
           }
       )
    }
    static getAll(){
        return new Promise((resolve,reject)=>{
            fs.readFile(path.join(__dirname,'..','data','courses.json'),'utf-8',(err,data)=>{
                if (err)
                 {reject(err)}
                 else{
                     resolve(JSON.parse(data))
                 }
            })
        })
     
    }
    static async update(cours){
        const course= await Course.getAll()
        console.log(course)
         const indx=course.findIndex(i=>i.id==cours.id)
        // course[indx]=cours
        // return new Promise((resolve,reject)=>{
        //     fs.readFile(path.join(__dirname,'..','data','courses.json'),'utf-8',(err,data)=>{
        //         if (err)
        //          {reject(err)}
        //          else{
        //              resolve(JSON.parse(course))
        //          }
        //     })
        // })
    }
    static async getById(id){
        const courses=await Course.getAll()
        return courses.find(i=>i.id===id)
        

    }
}
module.exports=Course;