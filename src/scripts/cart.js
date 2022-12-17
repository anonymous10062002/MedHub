let CartBaseURL = "https://lame-hammer-server.onrender.com/cartItem";
let flag = true;

async function getCartData() {
  try {
    let res = await fetch(CartBaseURL)
    let cartData = await res.json()
    if (cartData.length !== 0) {
      getData(cartData)
      priceDetails(cartData)
    }
    else {
      flag = false;
      document.querySelector("#coupon").innerHTML = "Apply Coupon"
      priceDetails(cartData)

      document.getElementById("cart_div").innerHTML = `
      <div id="empty_cart">
        <a href="index.html"><img src="./src/images/image.png" alt=""></a>
      </div>
      `;
    }
  } catch (error) {
    console.log(error)
  }
}
getCartData()

function getData(data) {
  document.getElementById("cart_div").innerHTML = `
        ${data
      .map((item) => {
        let dataId = item.id;
        let imgSrc = item.image;
        let title = item.name;
        let price = item.price;
        return renderLSData(dataId, imgSrc, title, price);
      })
      .join("")}
    `;
  let deleteBtns = document.querySelectorAll(".delete_btn");

  for (let deleteBtn of deleteBtns) {
    deleteBtn.addEventListener("click", (event) => {
      let id = event.target.dataset.id;
      deleteFromCartPage(id)
    });
  }



  function renderLSData(dataId, imgSrc, title, price) {
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
        <button class="delete_btn" data-id = ${dataId}><img src="https://img.1mg.com/images/delete_icon.svg" alt="Remove"></button>
        <p><button>-</button> 1 <button>+</button></p>
    </div>
</div>
  `
  }
}

function priceDetails(data) {

  data.length === 0 ? shipping_fee = 0 : shipping_fee = 70;
  data.length === 0 ? discount_par = 0 : discount_par = 15;

  let total = 0
  data.forEach((item) => {
    total += item.price
  })

  let MRP = document.querySelector("#total_MRP")
  MRP.innerHTML = "₹" + total

  let discount = document.querySelector("#discount")
  discount.innerHTML = discount_par + "%";

  let shipping = document.querySelector("#shipping")
  shipping.innerHTML = shipping_fee;

  let save = document.querySelector("#total_save")
  save.innerHTML = "₹" + Math.floor(total * 0.15)

  let paid = document.querySelector("#total_paid")
  paid.innerHTML = "₹" + Math.floor((total * 0.85) + shipping_fee)

}

let checkout_btn = document.querySelector("#checkout_btn")
checkout_btn.addEventListener("click", (e) => {
  if(flag){
    location.href = "payment.html"
  } 
  else{
    alert("Your cart is empty...")
  }
})

async function deleteFromCartPage(id) {
  let res = await fetch(`${CartBaseURL}/${id}`, {
    method: "DELETE",
  })
  if (res.ok) {
    // alert("Item deleted from Cart")
    getCartData()
  }
}