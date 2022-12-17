import config from "../../config.js";
let price_low_to_high = `${config.omega_and_fish_oil}?_sort=price`
let omega_and_fish_oil_URL = config.omega_and_fish_oil;

// importing Navbar and Footer
import { footerComp } from "../components/compFooter.js";
import { compNav } from "../components/compNav.js";

// appending the navbar
let navbar_div = document.getElementById('navbar_div');
navbar_div.innerHTML = compNav();

// appending the footer
let footer_div = document.getElementById('footer_div');
footer_div.innerHTML = footerComp();



// importing renderCardList() function
import { renderCardList } from "../components/gen_ren_func.js";

let protein_data_div = document.getElementById('protein_data_div');

;(async function fetch_protein() {
    try {
        let res = fetch(omega_and_fish_oil_URL);
        let protein_data = await (await res).json();
        renderCardList(protein_data_div,protein_data);
    } catch (error) {
        alert(error)
    }
})();

// add_button functionality
