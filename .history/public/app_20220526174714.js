

const $card=document.querySelector('#card')
if($card){
    $card.addEventListener('click',event=>{
       if(event.target.classList.contains('js-remove')){
           const id=event.target.dataset.id
           console.log(id)

           fetch('card/remove/'+id,{
               method:'delete',

           }).then(res=>res.json()).then(card=>{
               console.log(card)
               if(card.courses.lenght){

                
               }else{
                $card.innerHTML='<p>в Корзине пусто</p>'
               }
           })
       }
    })
}