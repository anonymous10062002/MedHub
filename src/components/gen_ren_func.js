
import config from "../../config.js";
let protein_URL = config.proteins
// generateCard Function
export function generateCard(dataId,img,name,strikedPrice,price) {
    return `
        <div class="card">
            <div class="card_img_div">
                <img src=${`${img}`} alt="">
            </div>
            <div class="card_body">
                <p class="card_name">${name.substring(0, 30)+'...'}</p>
                <p class="pack_size"></p>
                <p class="striked_price">${strikedPrice}</p>
                <div class="price_and_add_button">
                <p class="price">${price}</p>
                <button class="add_button" data-id = ${dataId}>ADD</button>
                </div>
            </div>
        </div>
    `;
    
}


// renderCardList function 
export function renderCardList(container,data) {
    container.innerHTML = `
    <div class="card_list">
    ${
        data.map((item)=> {
            let dataId = item.id;
            let img = item.image;
            let name = item.name;
            // let pack_size = item.pack_size;
            let striked_price = item.striked_price
            let price = item.price;
            return generateCard(dataId,img,name,striked_price,price);
        }).join('')}
    </div>
    `;
    let add_buttons = document.querySelectorAll(".add_button");

  for (let add_button of add_buttons) {
    add_button.addEventListener("click", (event) => {
      let id = event.target.dataset.id;
      sendToCartPage(id)
       console.log(id)
    });
  }
}


async function sendToCartPage(id){
    try{
      let fetchCartData = await fetch(`${protein_URL}${id}`)
      let data = await fetchCartData.json()
      
      sendData(data)
    }
    catch(err){
      console.log(err)
    }
  }
  
  async function sendData(data){
    try{
      let res = await fetch("http://localhost:3000/cartItem",{
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
      })
      if(res.ok){
        alert("Item added to cart")
      }
    }
    catch(err){
      console.log(err)
    }
  }
  