
    import { footerComp } from "../components/compFooter.js";
    let footer_div = document.getElementById('footer_div');
    footer_div.innerHTML = footerComp();
    let postUserURL=`https://lame-hammer-server4.onrender.com/users`;
    let form=document.getElementById("signupForm");
    form.addEventListener("submit",saveCredentials);
    function saveCredentials(event){
        event.preventDefault();
        let userName=document.getElementById("username").value;
        let passWord=document.getElementById("password").value;
        let mobileNum= document.getElementById("mobile").value;
        let userObj={
            username:userName,
            password:passWord,
            mobile:mobileNum
        }
        funcPost(userObj);
     }
async function funcPost(userObj) {
    try {
        let req = await fetch(postUserURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        if (req.ok) {
            window.location.assign("login.html");
        }
    } catch (error) {
        console.log(error)
    }
}
// SLIDER FUNCTION //
function first() {
    document.getElementById("sliderImage").src = "https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png"
    document.getElementById("sliderHeading").innerText = "Medicines, Home Delivered"
    document.getElementById("sliderPara").innerText = "Order any medicine or health product and we'll deliver it for free. Enjoy discounts on everthing."
}
function second() {
    document.getElementById("sliderImage").src = "https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
    document.getElementById("sliderHeading").innerText = "Health Related Queries?"
    document.getElementById("sliderPara").innerText = "Consult our certified doctors from anywhere, anytime, and for free. We guarentee our policy."
}
function third() {
    document.getElementById("sliderImage").src = "https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png"
    document.getElementById("sliderHeading").innerText = "Go To Health App"
    document.getElementById("sliderPara").innerText = "Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home."
}
setInterval(first, 3000);
setInterval(second, 6000);
setInterval(third, 9000);
