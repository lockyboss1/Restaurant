import header from './header.mjs';
import footer from './footer.mjs'
import renderHomePage from './home.mjs';
import renderMenuPage from './menu.mjs';
import renderReservationPage from './reservation.mjs';

let homeBtn = document.getElementById("home");
let menuBtn = document.getElementById("menu");
let reservationBtn = document.getElementById("reservations");
let homediv = document.getElementById("homediv");
let menudiv = document.getElementById("menudiv");
let reservationdiv = document.getElementById("reservationdiv");

window.onload = function () {
    homediv.style.display = 'block';
    menudiv.style.display = 'none';
    reservationdiv.style.display = 'none';
    document.title = 'Mama Put | Home';
    homeBtn.style.fontSize = '22px';
};

menuBtn.onclick = function () {
    menudiv.style.display = 'block';
    homediv.style.display = 'none';
    reservationdiv.style.display = 'none';
    document.title = 'Mama Put | Menu';
    menuBtn.style.fontSize = '22px';
    reservationBtn.style.fontSize = '17px';
    homeBtn.style.fontSize = '17px';
};

reservationBtn.onclick = function () {
    reservationdiv.style.display = 'block';
    homediv.style.display = 'none';
    menudiv.style.display = 'none';
    document.title = 'Mama Put | Reservations';
    reservationBtn.style.fontSize = '22px';
    homeBtn.style.fontSize = '17px';
    menuBtn.style.fontSize = '17px';
};

homeBtn.onclick = function () {
    homediv.style.display = 'block';
    menudiv.style.display = 'none';
    reservationdiv.style.display = 'none';
    document.title = 'Mama Put | Home';
    homeBtn.style.fontSize = '22px';
    menuBtn.style.fontSize = '17px';
    reservationBtn.style.fontSize = '17px';
};

