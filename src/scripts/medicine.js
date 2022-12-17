import { compNav } from "../components/compNav.js";
let navbar_div = document.getElementById('navbar_div');
navbar_div.innerHTML = compNav();

import { footerComp } from "../components/compFooter.js";
let footer_div = document.getElementById('footer_div');
footer_div.innerHTML = footerComp();

let baseURL = "http://localhost:3000/medicines";

// function handel(){
//   let x = document.querySelector("#select").value;
// console.log(x)
//   // if(x === "Low to High"){
//   //   baseURL = "http://localhost:3000/medicines?sortBy=price&order=desc"
//   //   fetchMedicineData();
//   // }
// }
// handel()

async function fetchMedicineData(pageNumber = 1, dataParPage = 10) {
  try {
    let fetchData = await fetch(
      `${baseURL}?_page=${pageNumber}&_limit=${dataParPage}`
    );
    let data = await fetchData.json();
    // console.log(data);
    getData(data);
  } catch (err) {
    console.log(err);
  }
}
fetchMedicineData();

function getData(data) {
  document.getElementById("app").innerHTML = `
     <div class="card-list">
      ${data
        .map((item) => {
          let dataId = item.id;
          let imgSrc = item.image;
          let title = item.name;
          let dis = item.description;
          let price = item.price;
          return renderData(dataId, imgSrc, title, dis, price);
        })
        .join("")}
      </div>
   `;
  // ---- Add Button in Card ----
  let addBtns = document.querySelectorAll(".card_btn");

  for (let addBtn of addBtns) {
    addBtn.addEventListener("click", (event) => {
      let id = event.target.dataset.id;
      sendToCartPage(id)
       //console.log(id)
    });
  }
}
 

function renderData(dataId, imgSrc, title, dis, price) {
  return `
    <div  class="card">
  <div class = "card_image">
    <img 
      src=${imgSrc}
      alt=${title}'s image
    />
  </div>
  <div class = "card_t">
    <h3>${title}</h3>
    <p>${dis}</p>
    <p>MRP₹ ${price}</p>
    <button class="card_btn" data-id = ${dataId}>ADD</button>
  </div>
</div>
   `;
}

// ---- Pagination ----
let pagination = document.querySelector("#pagination-wrapper");
let totalPage = Math.ceil(91 / 10);

function renderPaginationBtn(totalPage) {
  pagination.innerHTML = `
  <div className="pagination-btn-list">
  ${createPagButton(totalPage).join(" ")}
    </div>
  `;
  let paginationBtns = document.querySelectorAll(".pagination-btn");
  for (let paginationBtn of paginationBtns) {
    paginationBtn.addEventListener("click", (event) => {
      let pageNumber = event.target.dataset.id;
      fetchMedicineData(pageNumber, 10);
    });
  }
}
renderPaginationBtn(totalPage);

function createPagButton(totalPage) {
  let arr = [];
  for (let i = 1; i <= totalPage; i++) {
    arr.push(getAsBtn(i, "pagination-btn", i));
  }
  return arr;
}

function getAsBtn(text, cls, dataId) {
  return `<button class="${cls}" ${
    dataId ? `data-id = ${dataId}` : ""
  }> ${text} </button>`;
}

// ----- Send to Cart Page -----

async function sendToCartPage(id){
  try{
    let fetchCartData = await fetch(`${baseURL}/${id}`)
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

