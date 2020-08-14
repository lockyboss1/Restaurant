import './header.mjs';
import './footer.mjs';
import './styles/menu.scss';
document.title = 'Mama Put | Menu';

export let renderMenuPage = () => {
    let container = document.getElementById("content");

    let textdiv = document.createElement('div');
    textdiv.id = 'mainText';
    
    container.appendChild(textdiv);
}
renderMenuPage();