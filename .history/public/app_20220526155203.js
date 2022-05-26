const $card=document.querySelector('#card')
if($card){
    $card.addEventListener('click',event=>{
       if(event.target.classList.contains('js-remove')){
           const id=event.terget.dataset.id
           console.log(id)
       }
    })
}