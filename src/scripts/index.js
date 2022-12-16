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

// importing APIs
import config from "../../config.js";
let baseURL = config.baseURL;
let omega_and_fish_oil_URL = config.omega_and_fish_oil;
 let popular_combo_deals = config.popular_combo_deals;

// importing gen_ren_func
import { renderCardList } from "../components/gen_ren_func.js";


// Fetching Oil Data
;(async function fetchFunc() {
    try {
        let res = await fetch(omega_and_fish_oil_URL);
        let oil_data = await res.json();
        renderCardList(oil_div,oil_data);
    } catch (error) {
        alert(error);
    }
    
})()

let popular_combo_deals_div = document.getElementById('popular_combo_deals_div');
// Fetching Combo Data
;(async function fetchFunc() {
    try {
        let res = await fetch(popular_combo_deals);
        let popular_combo_deals_data = await res.json();
        renderCardList(popular_combo_deals_div,popular_combo_deals_data);
    } catch (error) {
        alert(error);
    }
})()
