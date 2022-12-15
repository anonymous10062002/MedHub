// importing navbar here
import { compNav } from "../components/compNav.js";
let navbar_div = document.getElementById('navbar_div');
navbar_div.innerHTML = compNav();
// importing footer here
 import { footerComp } from "../components/compFooter.js";

let footer_div = document.getElementById('footer_div');
footer_div.innerHTML = footerComp();

// importing slider here
import compSlider from "../components/compCarousel.js";
compSlider('carousel_div')

let data = [
    {
      "createdAt": "createdAt 1",
      "name": "Tata 1mg Salmon Omega 3 Fish Oil Capsule",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/fwram2p7rbkoigjg6zas.jpg",
      "variety": "Pack Size (3)",
      "serving": "bottle of 60 cpsules",
      "striked_price": "['MRP ₹995', '47% off']",
      "price": "₹448",
      "description": "bottle of 60 capsule",
      "id": "1"
    },
    {
      "createdAt": "createdAt 1",
      "name": "Dr. Morepen Omega 3 Triple Strength 1250mg Deep Sea Fish Oil with DHA & EPA 900mg Softgel",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/e5722339955b423b9e5cdaa70b9f43f9.jpg",
      "variety": "Pack Size (2)",
      "product_highlight": "",
      "serving": "serving of 60 soft gelatin capsules",
      "striked_price": "['MRP ₹1099', '40% off']",
      "price": "₹659",
      "description": "['Manages and reduces the risk of heart disease','Supports heart, brain, eyes and joints health','Helps in reducing the signs of ageing','Molecularly distilled high-concentration soft gels']",
      "id": "2"
    },
    {
      "createdAt": "createdAt 1",
      "name": "Zingavita Omega 3 Fish oil 1000mg solfget",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/z4zgcpwseeba8moxo8bg.jpg",
      "variety": "variety 3",
      "product_highlight": "['Helps in improving cardiovascular health','Supports healthy functioning of the brain','Helps in regulating cholesterol levels and high blood pressure','Supports flexibility and mobility of joints','Rich in omega 3 fatty acids EPA and DHA']",
      "serving": "",
      "striked_price": "['MRP ₹799', '56% off']",
      "price": "₹349",
      "description": "",
      "id": "3"
    }
]

let card = document.getElementById('card')
// generateCard Function
function generateCard(img,name,serving,strikedPrice,price) {
    return `
        <div class="card">
            <div class="card_img">
                <img src=${img} alt="">
            </div>
            <div class="card_body">
                <p class="card_name">${name}</p>
                <p class="serving">${serving}</p>
                <p class="strikedOfPrice">${strikedPrice}</p>
                <p class="price">${price}</p>
            </div>
        </div>
    `
}

let oil_div = document.getElementById('oil_div');
// renderCardList function 
function renderCardList(data) {
    oil_div.innerHTML = `${
        data.map((item)=> {
            let img = item.image;
            let name = item.name;
            let serving = item.serving;
            let striked_price = item.striked_price
            let price = item.price;
            generateCard(img,name,serving,striked_price,price);
        })
    }
    `
}