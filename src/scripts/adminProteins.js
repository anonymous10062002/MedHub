const cartURL=`https://lame-hammer-server4.onrender.com/proteins/`;
document.getElementById("logo").addEventListener("click",()=>{
    window.location.assign("admin.html")
});

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
                        <img id="prodImg" src=${item.image} alt="image">
                        <h5 id="prodPrice">Price: ${item.price}/-</h5>
                    </div>
                    <div id="right">
                        <h4 id="prodDesc">${item.name}</h4>
                        <p id="des">${item.description}</p>
                        <button data-id=${item.id} id="delItem">Delete product</button>
                        <button data-id=${item.id} id="editItem">Edit price</button>
                    </div>
                </div>`
    })
    landing.innerHTML=xyz.join('');
    let delButtons=document.querySelectorAll("#delItem");
    delButtons.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            let uid=e.target.dataset.id;
            delProduct(uid);
        })
    })
    let vid;
    let editButtons=document.querySelectorAll("#editItem");
    editButtons.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            vid=e.target.dataset.id;
           openForm2();
           
           document.getElementById("sub2").addEventListener("click",(e)=>{
            e.preventDefault();
            let x=document.getElementById("price2").value;
            editProduct(vid,x);
           });
        })
        
    })
}

async function editProduct(vid,x){
    try {
       
        let editReq=await fetch(`${cartURL}/${vid}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                price:x
            })
        })
        let data=await editReq.json();
        console.log(data) 
        if(editReq.ok){
            alert("Product Edited successfully!");
            recentOrders();
            document.getElementById("farm2").style.height="0px";
        } 
    } catch (error) {
        console.log(error)
    }
}

// Function to delete a product

async function delProduct(id){
    try {
        let req=await fetch(`${cartURL}/${id}`,{
            method:"DELETE",
        });
        if(req.ok){
            alert("Product deleted successfully")
            recentOrders();
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to add a product

document.getElementById("addBtn").addEventListener("click",openForm);
// let arr=document.querySelectorAll("#editItem");
// for(let item of arr){
//     item.addEventListener("click",openForm2);
// }
function openForm2(){
    document.getElementById("farm2").style.height="auto";
}



function openForm(){
    document.getElementById("farm").style.height="auto";
}

document.getElementById("fom").addEventListener("submit",(e)=>{
    e.preventDefault();
    let medObj={
        name: document.getElementById("naam").value,
        image: document.getElementById("photo").value,
        description: document.getElementById("desc").value,
        price: +document.getElementById("price").value,
    };
    addProduct(medObj);
})

async function addProduct(medObj){
    try {
        let request=await fetch(cartURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(medObj)
        })
        if(request.ok){
            recentOrders();
            alert("New product added successfully!");
            document.getElementById("farm").style.height="0px";
        }
    } catch (error) {
        console.log(error)
    }
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
