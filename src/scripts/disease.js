// importing navbar here
import { compNav } from "../components/compNav.js";
let navbar_div = document.getElementById('navbar_div');
navbar_div.innerHTML = compNav();

// importing footer here
import { footerComp } from "../components/compFooter.js";
let footer_div = document.getElementById('footer_div');
footer_div.innerHTML = footerComp();


let disease = document.querySelector("#disease");
let data = [];
let totalPages = Math.ceil(75 / 6) - 1;
let baseurl = "https://639ada81d51415019741833a.mockapi.io/disease";
let defaulturl = "https://639ada81d51415019741833a.mockapi.io/disease?page=1&limit=6";
async function diseasefetch(url) {
    try {
        let req = await fetch(url);
        let result = await req.json();
        data = result;
        let arr = data.map((item) => {
            return `<div class="disease">
            <div class="intro">
         <img src="${item.image}" class="diseaseImage"></img>
         <h1 class="diseaseName">${item.name}</h1>
         </div>
         <div class="diseaseDescription">
         <h3>Overview</h3>
         <p>${item.description}<p>
         </div>
        </div>`
        })
        disease.innerHTML = arr.join(" ");
    }
    catch (error) {
        alert(error);
    }
}

diseasefetch(defaulturl);

function displayAllButtons(totalPages) {
    document.querySelector("#pagination").innerHTML = `
    ${createAllButton(totalPages).join(" ")}
    `
}
displayAllButtons(totalPages);
let arr = document.querySelectorAll(".pageButton");
for (let page of arr) {
    page.addEventListener("click", (event) => {
        let x = event.target.id;
        let url = baseurl + `?page=${x}&limit=6`;
        diseasefetch(url);
    })
}

function getButton(txt) {
    return `<button class="pageButton" id="${txt}">${txt}</button>`
}
function createAllButton(totalPages) {
    let buttonArray = [];
    for (let i = 1; i <= totalPages; i++) {
        buttonArray.push(getButton(i));
    }
    return buttonArray;
}

