
import { footerComp } from "../components/compFooter.js";
let footer_div = document.getElementById('footer_div');
footer_div.innerHTML = footerComp();

    // let storedUsername=localStorage.getItem("username");
    // let storedPassword=localStorage.getItem("password");
    document.getElementById("loginForm").addEventListener("submit",(event)=>{
        event.preventDefault();
        let entName=document.getElementById("username").value;
        let entPass=document.getElementById("password").value;
        verify(entName,entPass);
    });
    async function verify(entName,entPass){
        
    }
    function first(){
        document.getElementById("sliderImage").src="https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png"
        document.getElementById("sliderHeading").innerText= "Medicines, Home Delivered"
        document.getElementById("sliderPara").innerText= "Order any medicine or health product and we'll deliver it for free. Enjoy discounts on everthing."
    }
    function second(){
        document.getElementById("sliderImage").src="https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
        document.getElementById("sliderHeading").innerText= "Health Related Queries?"
        document.getElementById("sliderPara").innerText= "Consult our certified doctors from anywhere, anytime, and for free. We guarentee our policy."
    }
    function third(){
        document.getElementById("sliderImage").src="https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png"
        document.getElementById("sliderHeading").innerText= "Go To Health App"
        document.getElementById("sliderPara").innerText= "Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home."
    }
    setInterval(first,3000);
    setInterval(second,6000);
    setInterval(third,9000);
