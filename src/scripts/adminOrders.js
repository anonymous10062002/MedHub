const users=`https://lame-hammer-server3.onrender.com/order`;
document.getElementById("logo").addEventListener("click",()=>{
    window.location.assign("admin.html")
});
(async function recentOrders(){
    try {
        let orderReq=await fetch(users);
        let cartData= await orderReq.json();
        orderReq.ok?console.log(cartData):alert("something went wrong!");
        getCard(cartData);
    } catch (error) {
        console.log(error);
    }
})()

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
                    </div>
                </div>`
    })
    landing.innerHTML=xyz.join('');
}