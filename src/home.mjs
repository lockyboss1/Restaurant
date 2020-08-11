//import {header} from './header.mjs';
//import {footer} from './footer.mjs';
export let renderHomePage = () => {
    let container = document.getElementById("content");

    let textdiv = document.createElement('div');
    textdiv.id = 'mainText';
    textdiv.textContent = `Established in 1996, Mama Put has been providing healthy and quality foods
    for 24 years so we can guarantee an excellent meal and this is our main mission. However itsn't just a mission but a 
    but a fundamental and necessary endeavour. 
                            
    At Mama Put's we enhance and educate the palate with the freshest ingredients 
    and flavours, while surprising and exciting each guest with personal care and service.`;

    let locationdiv = document.createElement('div');
    let locationtext = document.createElement ('p');
    let locations = document.createElement ('div');
    locationdiv.id = 'locationdiv';
    locationtext.id = 'locationtext';
    locations.id = 'locations';
    locationtext.textContent = 'Our locations are:';

    var li1 = document.createElement("LI");
    var li2 = document.createElement("LI");
    var li3 = document.createElement("LI");
    var li4 = document.createElement("LI");
    var text1 = document.createTextNode(`1, Pellentesque tincidunt purus vel tellus feugiat, nec rutrum nisl, Nigeria.`);
    var text2 = document.createTextNode(`23, Pellentesque tincidunt purus vel tellus feugiat, nec rutrum nisl, Canada.`);
    var text3 = document.createTextNode(`34, Pellentesque tincidunt purus vel tellus feugiat, nec rutrum nisl, United States.`);
    var text4 = document.createTextNode(`69, Pellentesque tincidunt purus vel tellus feugiat, nec rutrum nisl, United KIngdom.`);
    
    
    
    container.appendChild(textdiv);
    locationdiv.appendChild(locationtext);
    container.appendChild(locationdiv);
    li1.appendChild(text1);
    li2.appendChild(text2);
    li3.appendChild(text3);
    li4.appendChild(text4);
    locations.appendChild(li1);
    locations.appendChild(li2);
    locations.appendChild(li3);
    locations.appendChild(li4);
    container.appendChild(locations);
}
renderHomePage();