let getDataFromLS = JSON.parse(localStorage.getItem("LSarray"));

// let x = getDataFromLS.map((item) => {

// })
getData(getDataFromLS)

function getData(data) {
    document.getElementById("cart_div").innerHTML = `
        ${data
            .map((item) => {
                let imgSrc = item.image;
                let title = item.name;
                let price = item.price;
                return renderLSData(imgSrc, title, price);
            })
            .join("")}
    `;
    let deleteBtns = document.querySelectorAll(".delete_btn");

  for (let deleteBtn of deleteBtns) {
    deleteBtn.addEventListener("click", (event) => {
    //   let id = event.target.dataset.id;
    //   sendToCartPage(id)
      console.log(event)
    });
  }



function renderLSData(imgSrc, title, price) {
    return `
<div class="product">
    <div class="product_image">
        <img src="${imgSrc}" alt="" />
        <div class="product_name">
           <h3>${title}</h3>
           <p>₹ ${price}</p>
        </div>
    </div>
    <div class="product_btn">
        <button class="delete_btn"><img src="https://img.1mg.com/images/delete_icon.svg" alt="Remove"></button>
        <p><button>-</button> 1 <button>+</button></p>
    </div>
</div>
  `
}  
   
//     let x = document.getElementById("cart-div")

//     let y = data.map((item) => {
//         // document.getElementById("cart-div").innerHTML = null
// console.log(item)
//         let product = document.createElement("div")
//         product.setAttribute("class", product)

//         let product_image = document.createElement("div")
//         product_image.setAttribute("class", product_image)

//         let image = document.createElement("img")
//         image.src = item.image

//         let product_name = document.createElement("div")
//         product_name.setAttribute("class", product_name)

//         let h3 = document.createElement("h3")
//         h3.innerHTML = item.name

//         let p = document.createElement("p")
//         p.innerHTML = "₹" + item.price

//         product_name.append(h3,p)
//         product_image.append(image,product_name)

//         let product_btn = document.createElement("div")
//         product_btn.setAttribute("class", product_btn)

//         let delete_btn = document.createElement("button")
//         delete_btn.innerHTML = "Remove"

//         product_btn.append(delete_btn)

//         product.append(product_image,product_btn)

//         return product

//     })

//    x.innerHTML = y.join(" ")
}