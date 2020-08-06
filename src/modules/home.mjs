let container = document.getElementById("content");
let topdiv = document.createElement('div');     
let div1 = document.createElement('div');       
let div2 = document.createElement('div');       
let div3 = document.createElement('div');       
let div4 = document.createElement('div');       
let h1 = document.createElement('h1');
let nav1 = document.createElement('h3');
let nav2 = document.createElement('h3');
let nav3 = document.createElement('h3');
let nav4 = document.createElement('h3');
topdiv.id = 'topdiv';
h1.textContent = 'MAMA-PUT RESTAURANT';

/*THE NAVBAR */
div1.id = 'home';
div1.className = 'nav';
nav1.textContent = 'HOME'

div2.id = 'menu';
div2.className = 'nav';
nav2.textContent = 'MENU';

div3.id = 'reservations';
div3.className = 'nav';
nav3.textContent = 'RESERVATIONS';

div4.id = 'reviews';
div4.className = 'nav';
nav4.textContent = 'REVIEWS';

container.appendChild(h1);
div1.appendChild(nav1);
div2.appendChild(nav2);
div3.appendChild(nav3);
div4.appendChild(nav4);
topdiv.appendChild(div1);
topdiv.appendChild(div2);
topdiv.appendChild(div3);
topdiv.appendChild(div4);
container.appendChild(topdiv);


