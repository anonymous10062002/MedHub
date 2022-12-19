const usersURL=`https://lame-hammer-server3.onrender.com/users`;
let table=document.getElementById("table");

(async function getUsers(){
    try {
        let userReq=await fetch(usersURL);
        let userData= await userReq.json();
        console.log(userData);
        if(userReq.ok){
            displayUsers(userData);
        }
    } catch (error) {
        console.log(error);
    }
})()

function displayUsers(userData){
    let x = 0;
    let tableData = userData.map((item)=>{
        if(x===1){
            return `<thead>
                        <td>Sr no.</td>
                        <td>Username</td>
                        <td>Mobile</td>
                        <td>Password</td>
                    </thead>
                    <tr>
                        <td id="id">${++x}</td>
                        <td id="name">${item.username}</td>
                        <td id="mobile">${item.mobile}</td>
                        <td id="password">${item.password}</td>
                    </tr>`
        }
        return `<tr>
                    <td id="id">${++x}</td>
                    <td id="name">${item.username}</td>
                    <td id="mobile">${item.mobile}</td>
                    <td id="password">${item.password}</td>
                </tr>`
    })
    table.innerHTML=tableData.join('');
}