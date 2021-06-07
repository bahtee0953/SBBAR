
// let block_wrapper = document.querySelector(".block_wrapper")
// let block_card = document.createElement("div")
// block_card.className = "block-card"

// let img = document.createElement("img")
// img.setAttribute("src", "img/foot2_1.png");
// let h2 = document.createElement('h2')
// h2.className = "foot"
// h2.innerHTML = "Фарель с булгуром"
// block_card.appendChild(img)
// block_card.appendChild(h2)

// block_wrapper.appendChild(block_card)
// let block_card_info = document.createElement('div')
// block_card_info.className = "block-card-info"
// block_card.appendChild(block_card_info)

// let block_card_kol = document.createElement('div')
// block_card_kol.className = "block-card-kol"
// block_card_info.appendChild(block_card_kol)

// let h5 = document.createElement('h5')
// h5.innerHTML = 'Количество'
// block_card_kol.appendChild(h5)
// let count = document.createElement('div')
// count.className = "count"
// block_card_kol.appendChild(count)

// let count_btn = document.createElement('button')
// count_btn.className = "count_btn" 
// count_btn.style.direction = "minus"
// count_btn.setAttribute('data-direction', 'minus')
// count_btn.innerHTML = "-" 

// let count_value = document.createElement('input')
// count_value.className = "count_value"
// count_value.setAttribute('value', '0')
// count_value.setAttribute('type', 'text')

// let count__btn = document.createElement('button')
// count__btn.className = "count_btn"
// count__btn.setAttribute('data-direction', 'plus')
// count__btn.innerHTML = "+" 

// count.appendChild(count_btn)
// count.appendChild(count_value)
// count.appendChild(count__btn)

// let block_card_price = document.createElement('div')
// block_card_price.className = 'block-card-price'
// block_card_info.appendChild(block_card_price)

// let price = document.createElement('h5')
// price.innerHTML = "цена"

// let price_span = document.createElement('span')
// price_span.innerHTML = "10000s"

// block_card_price.appendChild(price)
// block_card_price.appendChild(price_span)

// let block_card_priceEnd = document.createElement('div')
// block_card_price.className = 'block-card-PriceEnd'
// block_card_info.appendChild(block_card_priceEnd)

// let price_end = document.createElement('h5')    
// price_end.innerHTML = "Конечная цена"

// let price_spanEnd = document.createElement('span')
// price_spanEnd.innerHTML = "2000s"

// block_card_priceEnd.appendChild(price_end)
// block_card_priceEnd.appendChild(price_spanEnd)


// let block_wrapper = document.querySelector(".block_wrapper")
//  let block_card = document.createElement("div")
//  block_card.className = "block-card"

// let karzina = [
//     {
//         name:"фарель с булгуром",
//         text:"Описание продукта,особенности,плюсы и минусы",
//         img:'../img/foot2_1.png',
//         price:"10000",
//         picce_new:"2000"
//     },
// ]
// debugger;
// let add = () =>{
//     karzina.map=((el)=>{
//         return(
//         block_card.innerHTML = `
//                 <img src=${el.img} alt="">
//                 <h2 class="foot">${el.name}</h2>
//                 <div class="block-card-info">
//                     <div class="block-card-kol">
//                         <h5>Количество</h5>
//                         <div class="count">
//                         <button class="count_btn" data-direction="minus">-</button>
//                         <input type="text" value="0" class="count_value">
//                         <button class="count_btn" data-direction="plus">+</button>  
//                         </div> 
//                     </div>
//                     <div class="block-card-price">
//                         <h5>цена</h5>
//                         <span>${el.price}с</span>
//                     </div>
//                     <div class="block-card-PriceEnd">
//                         <h5>Конечная цена</h5>
//                         <span>${el.price_new}с</span>
//                     </div>
//                 </div>
//         `)
//     })
// }
// add()
// block_wrapper.appendChild(block_card)
