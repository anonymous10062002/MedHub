const cartURL=`http://localhost:3000/cartItem`;
async function recentOrders(){
    try {
        let orderReq=await fetch(cartURL);
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
                        <p>${item.name}</p>
                        <img src=${item.image} alt="image">
                        <h3>${item.price}</h3>
                    </div>
                    <div id="right">
                        <h2>Description</h2>
                        <p>${item.description}</p>
                    </div>
                </div>`
    })
    landing.innerHTML=xyz.join('');
}