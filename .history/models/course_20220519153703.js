const uuid=require('uuid/')
class Course{
    constructor(name,price,img){
       this.name=name
       this.price=price
       this.img=img
       this.id=uuid()
    }
    save(){
        
    }
}