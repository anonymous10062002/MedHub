
// import config from "../../config.js";
// let baseURL = config.cartItem;


// importing navbar here
import { compNav } from "../components/compNav.js";
let navbar_div = document.getElementById('navbar_div');
navbar_div.innerHTML = compNav();
import { compSideNav } from "../components/CompsideNav.js";
let bd = window.addEventListener("resize", myfun)
function myfun(event) {
  let s = event.target.outerWidth;
  if (s <= 1000) {
    navbar_div.innerHTML = null;
    navbar_div.innerHTML = compSideNav();
  }
  if (s > 1000) {
    navbar_div.innerHTML = null;
    navbar_div.innerHTML = compNav();
  }

}
// importing footer here
import { footerComp } from "../components/compFooter.js";
let footer_div = document.getElementById('footer_div');
footer_div.innerHTML = footerComp();


let CartBaseURL = "https://lame-hammer-server3.onrender.com/cartItem";
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
        <button class="delete_btn placeicon" data-id = ${dataId}> &#xf2ed</button>
        <p><button>-</button> 1 <button>+</button></p>
    </div>
</div>
  `
  }
}
{/* <img src="https://img.1mg.com/images/delete_icon.svg" alt="Remove"></img> */ }
function priceDetails(data) {

  let shipping_fee = 0;
  let discount_par = 0;

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
  if (flag) {
    location.href = "payment.html"
  }
  else {
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