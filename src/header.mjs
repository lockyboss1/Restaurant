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
}
header();