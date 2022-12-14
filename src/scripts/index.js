
// const baseURL = "https://63987644044fa481d69e5f64.mockapi.io/posts/"
const baseURL = "http://localhost:3000/products/"

let getData = async() => {
    let res = await fetch(`${baseURL}`)
    // let res = await fetch(`${baseURL}/${id}`)
    let data = await res.json();
    console.log(data);
}
getData();
console.log('hello')



let postBut = document.getElementById('post');
postBut.addEventListener('click', ()=> {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let image = document.getElementById('image').value;
    let price = document.getElementById('price').value;
    let des = document.getElementById('des').value;

    let obj = {
        id: id,
        name: name,
        image: image,
        price: price,
        des: des
    }
    
    postItem(obj);
})

// Post function:
async function postItem(obj) {
    let res = await fetch(`${baseURL}`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json'
        }
    })
    let data = await res.json();
    console.log(res);
    console.log(data);
}


// Patch function:
let updateBut = document.getElementById('update');
updateBut.addEventListener('click', ()=> {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let image = document.getElementById('image').value;
    let price = document.getElementById('price').value;
    let des = document.getElementById('des').value;

    let obj = {
        name: name,
        image: image,
        price: price,
        des: des
    }
    
    updateItem(id, obj);
})


async function updateItem(id, obj) {
    let res = await fetch(`${baseURL}${id}`, {
        method: 'PATCH',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let data = await res.json();
    console.log(res);
    console.log(data);
}

let deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', ()=> {
    let id = document.getElementById('id').value;
    deleteItem(id);
})

// DELETE Function
async function deleteItem(id) {
    let res = await fetch(`${baseURL}${id}`, {
        method: 'DELETE'
    })

    let data = await res.json();
    console.log(data)
}