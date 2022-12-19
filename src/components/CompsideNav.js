export function compSideNav() {
    return `
    <div id="middlePartNav">
        <div class="openbutton">
            <span onclick="opennav()">&#9776;</span>
          <a href="./index.html">  <img src="./src/images/logo.png" alt="logo"></a>
        </div>

        <div id="searchBar">
            <input type="text" placeholder="Search for Medicines and Health Products">
            <button class="placeicon">&#xf002;</button>
        </div>

    </div>

    <div class="sidenav">
        <div class="sidenav1">
            <span onclick="closenav()">&#9776;</span>
           <a href="./index.html> <img src="./src/images/logo.png" alt="logo"> </a>
        </div>

        <a href="./index.html" class="placeicon">&#xf015; <span class="text">Home</span></a>
        <a href="./medicine.html" class="placeicon">&#xf484;<span class="text">Medicines</span> </a>
        <a href="./disease.html" class="placeicon">&#xf7e6; <span class="text">Diseases</span></a>
        <a href="./cart.html" class="placeicon">&#xf07a; <span class="text">Cart</span></a>
        <a href="./protein_supliments.html" class="placeicon">&#xf44b; <span class="text">Protein</span></a>
        <a href="./signup.html" class="placeicon">&#xf039;<span class="text">Register</span> </a>
        <a href="./login.html" class="placeicon">&#xf2f6;<span class="text">Login</span></a>


    </div>
`
}