import './header.mjs';
import './footer.mjs';
import './styles/home.scss';
document.title = 'Mama Put | Home';

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
    
    let awarddiv = document.createElement('div');
    awarddiv.id = 'awarddiv';
    
    const image = document.createElement('img');
    image.id = 'awards';
    image.className = 'awards-images';
    image.src = 'images/award.png';
    image.setAttribute("alt", "World Restaurant Award");

    const image1 = document.createElement('img');
    image1.id = 'awards';
    image1.className = 'awards-images';
    image1.src = 'images/award1.png';
    image1.setAttribute("alt", "World Restaurant Award");

    const image2 = document.createElement('img');
    image2.id = 'awards';
    image2.className = 'awards-images';
    image2.src = 'images/award2.png';
    image2.setAttribute("alt", "World Restaurant Award");

    const image3 = document.createElement('img');
    image3.id = 'awards';
    image3.className = 'awards-images';
    image3.src = 'images/award3.png';
    image3.setAttribute("alt", "World Restaurant Award");  
    
    const image4 = document.createElement('img');
    image4.id = 'awards';
    image4.className = 'awards-images';
    image4.src = 'images/award4.png';
    image4.setAttribute("alt", "World Restaurant Award");
    
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
    awarddiv.appendChild(image);
    awarddiv.appendChild(image1);
    awarddiv.appendChild(image3);
    awarddiv.appendChild(image4);
    awarddiv.appendChild(image2);
    container.appendChild(awarddiv);
}
renderHomePage();