
    let form=document.getElementById("signupForm");
    form.addEventListener("submit",saveCredentials);
    function saveCredentials(event){
        event.preventDefault();
        let userName=document.getElementById("username").value;
        let passWord=document.getElementById("password").value;
        localStorage.setItem("username",userName);
        localStorage.setItem("password",passWord);
        window.location.assign("login.html");
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
