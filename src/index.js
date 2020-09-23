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
    homediv.style.display = 'none';
    menudiv.style.display = 'block';
    reservationdiv.style.display = 'none';
    document.title = 'Mama Put | Home';
};

menuBtn.onclick = function () {
    menudiv.style.display = 'block';
    homediv.style.display = 'none';
    reservationdiv.style.display = 'none';
    document.title = 'Mama Put | Menu';
};

reservationBtn.onclick = function () {
    reservationdiv.style.display = 'block';
    homediv.style.display = 'none';
    menudiv.style.display = 'none';
    document.title = 'Mama Put | Reservations';
};

homeBtn.onclick = function () {
    homediv.style.display = 'block';
    menudiv.style.display = 'none';
    reservationdiv.style.display = 'none';
    document.title = 'Mama Put | Home';
};

