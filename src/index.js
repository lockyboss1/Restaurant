import './header.mjs';
import {renderHomepage} from './home.mjs';
import menu from './menu.mjs';
import reservations from './reservation.mjs';
import './footer.mjs';
import base from './styles/base.scss';

var menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", renderHomepage);

var homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", renderMenuPage);

var contactBtn = document.getElementById("reservations");
contactBtn.addEventListener("click", renderReservationPage);

header();


