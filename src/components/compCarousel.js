// SLIDER FUNCTION //
// compSlider() will take the id of the container in which the slider will go.
export default function compSlider(slider_div) {

    let container = document.createElement('img');
    container.setAttribute('id', 'slider_image')
    container.setAttribute('src', 'https://onemg.gumlet.io/f4588afb-3c1e-4924-ab9f-a1764044a714_1670244640.jpg?w=899&h=200&format=auto')
    let slider_container = document.getElementById(slider_div)
    slider_container.append(container);

    let img1 = 'https://onemg.gumlet.io/f4588afb-3c1e-4924-ab9f-a1764044a714_1670244640.jpg?w=899&h=200&format=auto';
    let img2 = 'https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/b58b9e0e-a6f7-45b5-a28a-dd833066c127.png';
    let img3 = 'https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/d107adc7-c59b-47cc-ac5e-f3cb282157db.png';
    function first(){
        document.getElementById("slider_image").src = img3;
    }
    function second(){
        document.getElementById("slider_image").src = img2;
    }
    function third(){
        document.getElementById("slider_image").src = img1;
    }
    setInterval(first,2000);
    setInterval(second,4000);
    setInterval(third,6000);

    }