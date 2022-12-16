// generateCard Function
export function generateCard(img,name,strikedPrice,price) {
    return `
        <div class="card">
            <div class="card_img_div">
                <img src=${`${img}`} alt="">
            </div>
            <div class="card_body">
                <p class="card_name">${name.substring(0, 30)+'...'}</p>
                <p class="pack_size"></p>
                <p class="striked_price">${strikedPrice}</p>
                <div class="price_and_add_button">
                <p class="price">${price}</p>
                <button class="add_button">ADD</button>
                </div>
            </div>
        </div>
    `
}


// renderCardList function 
export function renderCardList(container,data) {
    container.innerHTML = `
    <div class="card_list">
    ${
        data.map((item)=> {
            let img = item.image;
            let name = item.name;
            // let pack_size = item.pack_size;
            let striked_price = item.striked_price
            let price = item.price;
            return generateCard(img,name,striked_price,price);
        }).join('')};
    </div>
    `;
}