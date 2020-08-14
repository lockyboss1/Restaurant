export let footer = () => {
    let container = document.getElementById("content");
    var myfooter = document.createElement("footer");
    myfooter.id = "myFooter";

    var phone = document.createElement("LI");
    var phone1 = document.createElement("LI");
    phone.id = 'phone';
    phone1.innerHTML = '<i class="fas fa-phone-alt"></i>';
    phone.textContent = '08000000000';

    var email = document.createElement("LI");
    var email1 = document.createElement("LI");
    email.id = 'email';
    email1.innerHTML = '<i class="fas fa-at"></i>';
    email.textContent = 'mama-put@gmail.com';

    var twitter = document.createElement("LI");
    var twitter1 = document.createElement("LI");
    twitter.id = 'twitter';
    twitter1.innerHTML = '<i class="fab fa-twitter"></i>';
    twitter.textContent = '@mama-put';

    var facebook = document.createElement("LI");
    var facebook1 = document.createElement("LI");
    facebook.id = 'facebook';
    facebook1.innerHTML = '<i class="fab fa-facebook-f"></i>';
    facebook.textContent = 'Mama Put';

    container.appendChild(myfooter);
    myfooter.appendChild(phone1);
    myfooter.appendChild(phone);
    myfooter.appendChild(email1);
    myfooter.appendChild(email);
    myfooter.appendChild(twitter1);
    myfooter.appendChild(twitter);
    myfooter.appendChild(facebook1);
    myfooter.appendChild(facebook);
    container.appendChild(myfooter)
}
footer();