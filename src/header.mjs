<<<<<<< HEAD
import './styles/base.scss';

export  default function header() {
    let container = document.getElementById("content");

    /*Header*/
    let header = document.createElement('header');
    let topdiv = document.createElement('div');
    topdiv.id = 'topdiv';

    let headerimg = document.createElement('img');
    headerimg.id = 'headerimg';
    headerimg.src = 'images/header.png';

    let h1 = document.createElement('h1');
    h1.textContent = 'MAMA PUT RESTAURANTS';

    /*THE NAVBAR */
    var li1 = document.createElement("LI");
    li1.id = 'home';
    li1.className = 'nav';
    li1.textContent = 'HOME';

    var li2 = document.createElement("LI");
    li2.id = 'menu';
    li2.className = 'nav';
    li2.textContent = 'MENU';

    var li3 = document.createElement("LI");
    li3.id = 'reservations';
    li3.className = 'nav';
    li3.textContent = 'RESERVATIONS'; 

    header.appendChild(headerimg);
    topdiv.appendChild(li1);
    topdiv.appendChild(li2);
    topdiv.appendChild(li3);
    header.appendChild(h1);
    header.appendChild(topdiv);
    container.appendChild(header);
=======
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
>>>>>>> f18a9dbcaf58333f29161cfa912f4f4e913c73fa
}
header();