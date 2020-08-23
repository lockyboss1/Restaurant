import './header.mjs';
import './footer.mjs';
import './styles/menu.scss';

export default function renderMenuPage() {
    let container = document.getElementById("content");
    let menudiv = document.createElement('div');
    menudiv.id = 'menudiv';

    /**********************
     * Appetiser Div
     * ********************/
    let appetisers = document.createElement('div');
    appetisers.id = 'appetisers';
    let appetiserstext = document.createElement('h3');
    appetiserstext.textContent = 'Premiers Plats / Appetisers';
    appetiserstext.id = 'appetiserstext';

    let appetiser01text = document.createElement('h4');
    appetiser01text.textContent = 'Soup du Jour';
    let appetiser1text = document.createElement('p');
    appetiser1text.textContent = 'Daily chefs soup';
    let appetiser1price = document.createElement('p');
    appetiser1price.classList = 'foodPrice';
    appetiser1price.textContent = '$7.00';

    let appetiser02text = document.createElement('h4');
    appetiser02text.textContent = 'Moin Moin';
    let appetiser2text = document.createElement('p');
    appetiser2text.textContent = 'Bean cake';
    let appetiser2price = document.createElement('p');
    appetiser2price.classList = 'foodPrice';
    appetiser2price.textContent = '$5.00';

    let appetiser03text = document.createElement('h4');
    appetiser03text.textContent = 'Steak Tartare';
    let appetiser3text = document.createElement('p');
    appetiser3text.textContent = 'Royalton filet mignon steak, capers, toast';
    let appetiser3price = document.createElement('p');
    appetiser3price.classList = 'foodPrice';
    appetiser3price.textContent = '$15.00';

    let appetiser04text = document.createElement('h4');
    appetiser04text.textContent = 'Escargots de Bourgogne';
    let appetiser4text = document.createElement('p');
    appetiser4text.textContent = 'Burgundy snails, tomati fondue, wasabi butter, puff-pastry';
    let appetiser4price = document.createElement('p');
    appetiser4price.classList = 'foodPrice';
    appetiser4price.textContent = '$16.00';

    let appetiser05text = document.createElement('h4');
    appetiser05text.textContent = 'Huitres';
    let appetiser5text = document.createElement('p');
    appetiser5text.textContent = 'Daily oysters, mignonette, lemon';
    let appetiser5price = document.createElement('p');
    appetiser5price.classList = 'foodPrice';
    appetiser5price.id = 'appetiser5Price'
    appetiser5price.textContent = '6/$14.00, 12/$25.00';

    appetisers.appendChild(appetiserstext);
    appetisers.appendChild(appetiser01text);
    appetisers.appendChild(appetiser1price);
    appetisers.appendChild(appetiser1text);
    appetisers.appendChild(appetiser02text);
    appetisers.appendChild(appetiser2price);
    appetisers.appendChild(appetiser2text);
    appetisers.appendChild(appetiser03text);
    appetisers.appendChild(appetiser3price);
    appetisers.appendChild(appetiser3text)
    appetisers.appendChild(appetiser04text);
    appetisers.appendChild(appetiser4price);
    appetisers.appendChild(appetiser4text)
    appetisers.appendChild(appetiser05text);
    appetisers.appendChild(appetiser5price);
    appetisers.appendChild(appetiser5text)

    /**********************
    * Salad Div
    * ********************/
    let salads = document.createElement('div');
    salads.id = 'salads';
    let saladstext = document.createElement('h3');
    saladstext.textContent = 'Salades / Salads';
    saladstext.id = 'saladstext';

    let salad01text = document.createElement('h4');
    salad01text.textContent = 'Salade Caesar';
    let salad1text = document.createElement('p');
    salad1text.textContent = 'Grilled chicken, parmesan, Caesar dressing';
    let salad1price = document.createElement('p');
    salad1price.classList = 'foodPrice';
    salad1price.textContent = '$15.00';

    let salad02text = document.createElement('h4');
    salad02text.textContent = 'Salade du Marche';
    let salad2text = document.createElement('p');
    salad2text.textContent = 'Market Salad';
    let salad2price = document.createElement('p');
    salad2price.classList = 'foodPrice';
    salad2price.textContent = '$7.00';

    let salad03text = document.createElement('h4');
    salad03text.textContent = 'Salade Floridienne';
    let salad3text = document.createElement('p');
    salad3text.textContent = 'Sliced orange, grapefuit, avocado, mixed greens';
    let salad3price = document.createElement('p');
    salad3price.classList = 'foodPrice';
    salad3price.textContent = '$12.00';

    let salad04text = document.createElement('h4');
    salad04text.textContent = 'Salade Nicoise';
    let salad4text = document.createElement('p');
    salad4text.textContent = 'Seared frush tuna, duck egg, bell pepper, salad, anchovy';
    let salad4price = document.createElement('p');
    salad4price.classList = 'foodPrice';
    salad4price.textContent = '$16.00';

    let salad05text = document.createElement('h4');
    salad05text.textContent = 'Salade de Quinoa';
    let salad5text = document.createElement('p');
    salad5text.textContent = 'Shrimp, quinoa, baby spinach, mango';
    let salad5price = document.createElement('p');
    salad5price.classList = 'foodPrice';
    salad5price.textContent = '$17.00';

    salads.appendChild(saladstext);
    salads.appendChild(salad01text);
    salads.appendChild(salad1price);
    salads.appendChild(salad1text);
    salads.appendChild(salad02text);
    salads.appendChild(salad2price);
    salads.appendChild(salad2text);
    salads.appendChild(salad03text);
    salads.appendChild(salad3price);
    salads.appendChild(salad3text);
    salads.appendChild(salad04text);
    salads.appendChild(salad4price);
    salads.appendChild(salad4text);
    salads.appendChild(salad05text);
    salads.appendChild(salad5price);
    salads.appendChild(salad5text);


    /**********************
    * Main course Div
    * ********************/
    let mains = document.createElement('div');
    mains.id = 'mains';
    let mainstext = document.createElement('h3');
    mainstext.textContent = 'Plat Principaux / Main Course';
    mainstext.id = 'mainstext';

    let main01text = document.createElement('h4');
    main01text.textContent = 'Jollof Rice';
    let main1text = document.createElement('p');
    main1text.textContent = 'Grilled chicken, parboiled rice, blended tomatoes';
    let main1price = document.createElement('p');
    main1price.classList = 'foodPrice1';
    main1price.textContent = '$15.00';

    let main02text = document.createElement('h4');
    main02text.textContent = 'Fried Rice';
    let main2text = document.createElement('p');
    main2text.textContent = 'Grilled chicken, parboiled rice, mixed vegetables';
    let main2price = document.createElement('p');
    main2price.classList = 'foodPrice1';
    main2price.textContent = '$15.00';

    let main03text = document.createElement('h4');
    main03text.textContent = 'Canard aux agrumes';
    let main3text = document.createElement('p');
    main3text.textContent = 'Roasted duck breast, citrus juice, tomato puree';
    let main3price = document.createElement('p');
    main3price.classList = 'foodPrice1';
    main3price.textContent = '$28.00';

    let main04text = document.createElement('h4');
    main04text.textContent = 'Steak Frites';
    let main4text = document.createElement('p');
    main4text.textContent = 'Royalton ribeye, green peppercorn sauce, bearnaise, frecnh fries';
    let main4price = document.createElement('p');
    main4price.classList = 'foodPrice1';
    main4price.textContent = '$27.00';

    let main05text = document.createElement('h4');
    main05text.textContent = 'Saumon de Nouvelle Zelande';
    let main5text = document.createElement('p');
    main5text.textContent = 'New Zealand sauce, choron sauce, black rice';
    let main5price = document.createElement('p');
    main5price.classList = 'foodPrice1';
    main5price.textContent = '$26.00';

    let main06text = document.createElement('h4');
    main06text.textContent = `Navarin d'Agneau`;
    let main6text = document.createElement('p');
    main6text.textContent = 'Braised lamb shoulder, spring vegetables. spaetzle';
    let main6price = document.createElement('p');
    main6price.classList = 'foodPrice1';
    main6price.textContent = '$38.00';

    let main07text = document.createElement('h4');
    main07text.textContent = 'Poisson du Marche';
    let main7text = document.createElement('p');
    main7text.textContent = 'Local market fish, baby carrots, orange and carrot reduction';
    let main7price = document.createElement('p');
    main7price.classList = 'foodPrice1';
    main7price.textContent = 'Market Price';

    mains.appendChild(mainstext);
    mains.appendChild(main01text);
    mains.appendChild(main1price);
    mains.appendChild(main1text);
    mains.appendChild(main02text);
    mains.appendChild(main2price);
    mains.appendChild(main2text);
    mains.appendChild(main03text);
    mains.appendChild(main3price);
    mains.appendChild(main3text);
    mains.appendChild(main04text);
    mains.appendChild(main4price);
    mains.appendChild(main4text);
    mains.appendChild(main05text);
    mains.appendChild(main5price);
    mains.appendChild(main5text);
    mains.appendChild(main06text);
    mains.appendChild(main6price);
    mains.appendChild(main6text);
    mains.appendChild(main07text);
    mains.appendChild(main7price);
    mains.appendChild(main7text);

    /**********************
     * Sides Div
    * ********************/
    let sides = document.createElement('div');
    sides.id = 'sides';
    let sidestext = document.createElement('h3');
    sidestext.textContent = 'Les Accompagnements / Sides';
    sidestext.id = 'sidestext';

    let side01text = document.createElement('h4');
    side01text.textContent = 'Seasonal Vegetables';
    let side1price = document.createElement('p');
    side1price.classList = 'foodPrice1';
    side1price.textContent = '$6.00';

    let side02text = document.createElement('h4');
    side02text.textContent = 'Black Rice';
    let side2price = document.createElement('p');
    side2price.classList = 'foodPrice1';
    side2price.textContent = '$5.50';

    let side03text = document.createElement('h4');
    side03text.textContent = 'Sauteed Mushrooms';
    let side3price = document.createElement('p');
    side3price.classList = 'foodPrice1';
    side3price.textContent = '$6.00';

    let side04text = document.createElement('h4');
    side04text.textContent = 'French Fries';
    let side4price = document.createElement('p');
    side4price.classList = 'foodPrice1';
    side4price.textContent = '$5.00';

    let side05text = document.createElement('h4');
    side05text.textContent = 'Small Salad';
    let side5price = document.createElement('p');
    side5price.classList = 'foodPrice1';
    side5price.textContent = '$6.00';

    let side06text = document.createElement('h4');
    side06text.textContent = 'Spaetzle';
    let side6price = document.createElement('p');
    side6price.classList = 'foodPrice1';
    side6price.textContent = '$6.00';

    sides.appendChild(sidestext);
    sides.appendChild(side01text);
    sides.appendChild(side1price);
    sides.appendChild(side02text);
    sides.appendChild(side2price);
    sides.appendChild(side03text);
    sides.appendChild(side3price);
    sides.appendChild(side04text);
    sides.appendChild(side4price);
    sides.appendChild(side05text);
    sides.appendChild(side5price);
    sides.appendChild(side06text);
    sides.appendChild(side6price);

    /**********************
     * Deserts Div
    * ********************/
    let deserts = document.createElement('div');
    deserts.id = 'deserts';
    let desertstext = document.createElement('h3');
    desertstext.textContent = 'Les Desserts / Desserts';
    desertstext.id = 'desertstext';

    let desert01text = document.createElement('h4');
    desert01text.textContent = 'Glace et Sorbet';
    let desert1text = document.createElement('p');
    desert1text.textContent = 'Ice cream and sorbets, choice of two scoops';
    let desert1price = document.createElement('p');
    desert1price.classList = 'foodPrice';
    desert1price.textContent = '$5.00';

    let desert02text = document.createElement('h4');
    desert02text.textContent = 'Tarte Citron Meringue';
    let desert2text = document.createElement('p');
    desert2text.textContent = 'Lemon Tart';
    let desert2price = document.createElement('p');
    desert2price.classList = 'foodPrice';
    desert2price.textContent = '$10.00';

    let desert03text = document.createElement('h4');
    desert03text.textContent = 'Vacherin Vanille Framboise';
    let desert3text = document.createElement('p');
    desert3text.textContent = 'Meringue, vanilla ice cream, raspberry sorbet';
    let desert3price = document.createElement('p');
    desert3price.classList = 'foodPrice';
    desert3price.textContent = '$11.50';

    let desert04text = document.createElement('h4');
    desert04text.textContent = 'Macaron Chocolate et Methe';
    let desert4text = document.createElement('p');
    desert4text.textContent = 'Chocolate and mint macarins';
    let desert4price = document.createElement('p');
    desert4price.classList = 'foodPrice';
    desert4price.textContent = '$12.00';

    deserts.appendChild(desertstext);
    deserts.appendChild(desert01text);
    deserts.appendChild(desert1price);
    deserts.appendChild(desert1text);
    deserts.appendChild(desert02text);
    deserts.appendChild(desert2price);
    deserts.appendChild(desert2text);
    deserts.appendChild(desert03text);
    deserts.appendChild(desert3price);
    deserts.appendChild(desert3text);
    deserts.appendChild(desert04text);
    deserts.appendChild(desert4price);
    deserts.appendChild(desert4text);

    /**********************
    * Kids Div
   * ********************/
    let kids = document.createElement('div');
    kids.id = 'kids';
    let kidstext = document.createElement('h3');
    kidstext.textContent = `Menu Enfants/ Kids's Menu`;
    kidstext.id = 'desertstext';

    let kids01text = document.createElement('h4');
    kids01text.classList = 'kidstext';
    kids01text.textContent = 'Cheeseburger and french fries, Icecream ';
    let kids1price = document.createElement('p');
    kids1price.classList = 'foodPrice2';
    kids1price.textContent = '$12.00';

    let kids02text = document.createElement('h4');
    kids02text.classList = 'kidstext';
    kids02text.textContent = 'Spaetzle and seasonal vegetables, Icecream ';
    let kids2price = document.createElement('p');
    kids2price.classList = 'foodPrice2';
    kids2price.textContent = '$10.00';

    let kids03text = document.createElement('h4');
    kids03text.classList = 'kidstext';
    kids03text.textContent = 'Beef Cordon Bleu, seasonal vegetables, french fries ';
    let kids3price = document.createElement('p');
    kids3price.classList = 'foodPrice2';
    kids3price.textContent = '$12.00';

    kids.appendChild(kidstext);
    kids.appendChild(kids01text);
    kids.appendChild(kids1price);
    kids.appendChild(kids02text);
    kids.appendChild(kids2price);
    kids.appendChild(kids03text);
    kids.appendChild(kids3price);

    container.appendChild(menudiv);
    menudiv.appendChild(appetisers);
    menudiv.appendChild(salads);
    menudiv.appendChild(mains);
    menudiv.appendChild(sides);
    menudiv.appendChild(deserts);
    menudiv.appendChild(kids);
}
renderMenuPage();