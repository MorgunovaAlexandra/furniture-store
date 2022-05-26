

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

                const html=card.courses.map(c=>{
                    return
                    `<tr>
                    <td><img class="img_card" src=${img} alt="ds"/></td>
                    <td>${c.name}</td>
                    <th>${c.price}</th>
                    <td>${c.count}</td>
                    <td><button class="js-remove" data-id="${c.id}">удалить</button></td>
                </tr>
                    `
                }).join('')
                $card.
               }else{
                $card.innerHTML='<p>в Корзине пусто</p>'
               }
           })
       }
    })
}