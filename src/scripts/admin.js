const ordersURL=`http://localhost:3000/cartItem`;
document.getElementById("logo").addEventListener("click",()=>{
    window.location.assign("admin.html")
})
async function recentOrders(){
    try {
        let orderReq=await fetch(ordersURL);
        let cartData= await orderReq.json();
        orderReq.ok?console.log(cartData):alert("something went wrong!");
        getCard(cartData);
    } catch (error) {
        console.log(error);
    }
}
recentOrders();

function getCard(data){
    let landing=document.getElementById("landing");
    let xyz=data.map((item)=>{
        return `<div id="card">
                    <div id="left">
                        <img id="prodImg" src=${item.image} alt="image">
                        <h5 id="prodPrice">Price: ${item.price}/-</h5>
                    </div>
                    <div id="right">
                        <h4 id="prodDesc">${item.name}</h4>
                        <p id="des">${item.description}</p>
                        <button id="delItem">Delete product</button>
                    </div>
                </div>`
    })
    landing.innerHTML=xyz.join('');
}
function pdctDrpDn()
{
    if(document.getElementById("productDropDown").style.height==false ||document.getElementById("productDropDown").style.height=="0px"){
 document.getElementById("productDropDown").style.height="100px";
    }
    else{
        document.getElementById("productDropDown").style.height="0px";
    }
}