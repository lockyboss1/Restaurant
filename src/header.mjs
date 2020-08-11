export let header = () => {
    let container = document.getElementById("content");

    /*Header*/
    let h1 = document.createElement('h1');
    let topdiv = document.createElement('div');
    topdiv.id = 'topdiv';
    h1.textContent = 'MAMA PUT RESTAURANTS';

    /*THE NAVBAR */
    let div1 = document.createElement('div');
    let nav1 = document.createElement('h3');
    div1.id = 'home';
    div1.className = 'nav';
    nav1.textContent = 'HOME';

    let div2 = document.createElement('div');
    let nav2 = document.createElement('h3');
    div2.id = 'menu';
    div2.className = 'nav';
    nav2.textContent = 'MENU';

    let div3 = document.createElement('div');
    let nav3 = document.createElement('h3');
    div3.id = 'reservations';
    div3.className = 'nav';
    nav3.textContent = 'RESERVATIONS'; 

    container.appendChild(h1);
    div1.appendChild(nav1);
    div2.appendChild(nav2);
    div3.appendChild(nav3);
    topdiv.appendChild(div1);
    topdiv.appendChild(div2);
    topdiv.appendChild(div3);
    container.appendChild(topdiv);
}
header();