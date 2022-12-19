import config from "../../config.js";
let protein_URL = config.proteins;
// let omega_and_fish_oil_URL = config.omega_and_fish_oil;

// importing Navbar and Footer
import { footerComp } from "../components/compFooter.js";
import { compNav } from "../components/compNav.js";

// appending the navbar
let navbar_div = document.getElementById('navbar_div');
navbar_div.innerHTML = compNav();

// appending the footer
let footer_div = document.getElementById('footer_div');
footer_div.innerHTML = footerComp();

// Importing sorting function
import { get_sorted_data } from "../components/sort_func.js";

// importing renderCardList() function
import { generateCard } from "../components/gen_ren_func.js";
// import { crud_get_opt } from "../components/CRUD_opt.js";


async function fetch_protein_data(page_number=1,data_per_page=10) {
    try {
        let res = await fetch(`https://lame-hammer-server4.onrender.com/proteins/?_page=${page_number}&_limit=${data_per_page}`);
        let protein_data = await res.json();
        // console.log(protein_data)
        // renderCardList2(protein_data_div,protein_data);
        renderCardList2(protein_data);
    } catch (error) {
      console.log(err);
    }
};
fetch_protein_data();

// let container = document.getElementById('protein_data_div')
// add_button functionality
//   ========================
function renderCardList2(data) {
  document.getElementById('protein_data_div').innerHTML = `
    <div class="card_list">
        ${data
          .map((item) => {
            let dataId = item.id;
            let img = item.image;
            let name = item.name;
            // let strikedPrice = item.strikedPrice;
            let strikedPrice = 'XYZ Proteins';
            // let dis = item.description;
            let price = item.price;
            return generateCard(dataId,img,name,strikedPrice,price)
          })
          .join("")}
        </div>
     `;
    // ---- Add Button in Card ----
    let add_buttons = document.querySelectorAll(".add_button");
  
    for (let add_button of add_buttons) {
      add_button.addEventListener("click", (event) => {
        let id = event.target.dataset.id;
        // let id = event.target.dataset.id;
        get_protein_item_by_id(id)
        
         console.log(id)
  
      });
    }
  }



  // ----- Send to Cart Page -----

async function get_protein_item_by_id(id){
  try{
    let fetchproteinData = await fetch(`https://lame-hammer-server4.onrender.com/proteins/${id}`)
    let protein_item = await fetchproteinData.json()
    console.log(protein_item);
    sent_to_cart(protein_item);
  }
  catch(err){
    console.log(err)
  }
}

async function sent_to_cart(data) {
  try {
    let res = await fetch(`https://lame-hammer-server4.onrender.com/cartItem`,{
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    // let response = await res.json();
    console.log(res)
    if(res.ok){
      alert("Item added to cart")
    }
  } catch (error) {
    console.log(error)
  }
}

//==================
// Sorting Function
let sorted_protein_data_asc = await get_sorted_data(protein_URL, 'price', 'asc');
let sorted_protein_data_desc = await get_sorted_data(protein_URL, 'price', 'desc')

let sort_button = document.getElementById('sort_tag');
sort_button.addEventListener('change', ()=> {
  if(sort_button.value=='low_to_high') {
    document.getElementById('protein_data_div').innerHTML = null;
    renderCardList2(sorted_protein_data_asc);
    
  } else if(sort_button.value=='high_to_low') {
    document.getElementById('protein_data_div').innerHTML = null;
    renderCardList2(sorted_protein_data_desc);
  }
})

//==================
// Pagination:

let pagination_button_wrapper = document.getElementById('pagination_button_wrapper');

let total_page = Math.ceil(50/10);

function render_pagination_button(total_page) {
  pagination_button_wrapper.innerHTML = `
  <div className="pagination_button_list">
  ${create_pegination_button(total_page).join(" ")}
    </div>
  `;

  let pagination_buttons = document.querySelectorAll('.pagination_button');
  for(let pagination_button of pagination_buttons) {
    pagination_button.addEventListener('click', (event)=> {
      let page_number = event.target.dataset.id;
      // console.log(event);
      console.log(page_number);
      fetch_protein_data(page_number,10);
    })
  } 
}

render_pagination_button(total_page);

function create_pegination_button(total_page) {
  let arr = [];
  for(let i=1;i <= total_page; i++) {
    arr.push(generate_button(i, 'pagination_button', i));
  }
  // console.log(arr);
  return arr;
}


function generate_button(text, cls, data_id) {
  return `<button class="${cls}" ${
    data_id ? `data-id = ${data_id}` : ""
  }> ${text} </button>`;
}