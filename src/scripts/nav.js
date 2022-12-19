let resorces = document.getElementById('resorces');
let vitamins = document.getElementById('vitamins');
let diabetes = document.getElementById('diabetes');
let healthcare = document.getElementById('healthcare');
let personal = document.getElementById('personal');
let health = document.getElementById('health');
let ayurveda = document.getElementById('ayurveda');
let homeopathy = document.getElementById('homeopathy');
let searchValue = document.getElementById("srch");
let searchButton = document.getElementById("srchbtn");

resorces.addEventListener('click', opennav);
vitamins.addEventListener('click', opennav1);
diabetes.addEventListener('click', opennav2);
healthcare.addEventListener('click', opennav3);
personal.addEventListener('click', opennav4);
health.addEventListener('click', opennav5);
ayurveda.addEventListener('click', opennav6);
homeopathy.addEventListener('click', opennav7);
searchButton.addEventListener("click", srch);

async function srch() {
    let x = searchValue.value;
    console.log(x);
    let res = await fetch("https://lame-hammer-server3.onrender.com/all_data");
    let data = await res.json();
    let arr = await data.filter((item) => {
        return item.name == x || item.category == x;
    })

    console.log(arr);
    let c = arr[0].category;
    if (c == "diseases") {
        window.location = "./disease.html";

    }
    else if (c == "medicine") {

        window.location = "./medicine.html";
    }
    else {
        window.location = "./protein_supliments.html";
    }
}


function opennav() {
    if (document.querySelector(".dropDown").style.height == false || document.querySelector(".dropDown").style.height == "0px") {
        document.querySelector(".dropDown").style.height = "200px";
        document.querySelector(".menu").style.color = "blue";
    }
    else {
        document.querySelector(".dropDown").style.height = "0px";
        document.querySelector(".menu").style.color = "black";
    }

}
function opennav1() {

    if (document.querySelector(".vitamin").style.height == false || document.querySelector(".vitamin").style.height == "0px") {
        document.querySelector(".vitamin").style.height = "350px";
        document.querySelector(".vitamin1").style.color = "blue";
    }
    else {
        document.querySelector(".vitamin").style.height = "0px";
        document.querySelector(".vitamin1").style.color = "black";
    }
}
function opennav2() {

    if (document.querySelector(".diabetes").style.height == false || document.querySelector(".diabetes").style.height == "0px") {
        document.querySelector(".diabetes").style.height = "350px";
        document.querySelector(".diabetes1").style.color = "blue";
    }
    else {
        document.querySelector(".diabetes").style.height = "0px";
        document.querySelector(".diabetes1").style.color = "black";
    }
}
function opennav3() {

    if (document.querySelector(".Health").style.height == false || document.querySelector(".Health").style.height == "0px") {
        document.querySelector(".Health").style.height = "350px";
        document.querySelector(".Health1").style.color = "blue";
    }
    else {
        document.querySelector(".Health").style.height = "0px";
        document.querySelector(".Health1").style.color = "black";
    }
}
function opennav4() {

    if (document.querySelector(".Personal").style.height == false || document.querySelector(".Personal").style.height == "0px") {
        document.querySelector(".Personal").style.height = "350px";
        document.querySelector(".Personal1").style.color = "blue";
    }
    else {
        document.querySelector(".Personal").style.height = "0px";
        document.querySelector(".Personal1").style.color = "black";
    }
}
function opennav5() {

    if (document.querySelector(".HealthC ").style.height == false || document.querySelector(".HealthC ").style.height == "0px") {
        document.querySelector(".HealthC ").style.height = "350px";
        document.querySelector(".HealthC1").style.color = "blue";
    }
    else {
        document.querySelector(".HealthC ").style.height = "0px";
        document.querySelector(".HealthC1").style.color = "black";
    }
}
function opennav6() {

    if (document.querySelector(".Ayurveda ").style.height == false || document.querySelector(".Ayurveda ").style.height == "0px") {
        document.querySelector(".Ayurveda").style.height = "350px";
        document.querySelector(".Ayurveda1").style.color = "blue";

    }
    else {
        document.querySelector(".Ayurveda").style.height = "0px";
        document.querySelector(".Ayurveda1").style.color = "black";
    }
}
function opennav7() {

    if (document.querySelector(".homopathy").style.height == false || document.querySelector(".homopathy").style.height == "0px") {
        document.querySelector(".homopathy").style.height = "350px";
        document.querySelector(".homopathy1").style.color = "blue";
    }
    else {
        document.querySelector(".homopathy").style.height = "0px";
        document.querySelector(".homopathy1").style.color = "black";
    }
}