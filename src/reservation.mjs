import './header.mjs';
import './footer.mjs';
import './styles/reservation.scss';

export default function renderReservationPage() {
    let container = document.getElementById("content");
    let reservationdiv = document.createElement('div');
    reservationdiv.id = 'reservationdiv';

    var form = document.createElement("form");

    var fname = document.createElement("input");
    fname.id = 'fname';
    fname.setAttribute('type',"text");
    fname.setAttribute('name',"firstname");
    fname.setAttribute("placeholder", "First Name"); 
  
    var lname = document.createElement("input");
    lname.id = 'lname';
    lname.setAttribute('type',"text");
    lname.setAttribute('name',"surname");
    lname.setAttribute("placeholder", "Last Name"); 

    var emailID = document.createElement("input"); 
    emailID.id = 'emailID';
    emailID.setAttribute("type", "text"); 
    emailID.setAttribute("name", "emailID"); 
    emailID.setAttribute("placeholder", "E-Mail"); 

    var number = document.createElement("input");
    number.id = 'number';
    number.setAttribute('type', "tel");
    number.setAttribute("placeholder", "Phone Number"); 

    var datetimediv = document.createElement('div');
    datetimediv.id = 'datetimediv';
    var datediv = document.createElement('div');
    datediv.id = 'datediv';
    var date = document.createElement('input');
    date.id = 'date';
    var time = document.createElement('input');
    time.id = 'time';
    var datetext = document.createElement('p');
    datetext.textContent = 'Please pick a date and time:'
    datetext.id = ' datetext';
    date.setAttribute("type", "date");
    date.setAttribute("value", "2021-01-01");
    time.setAttribute("type", "time");

    var locationdiv = document.createElement('div');
    locationdiv.id = 'locationdiv';
    var locationselect = document.createElement("select");
    locationselect.id = 'mySelect';
    
    var locationa = document.createElement("option");
    var locationb = document.createElement("option");
    var locationc = document.createElement("option");
    var locationd = document.createElement("option");
    var locatione = document.createElement("option");
    
    var location1 = document.createTextNode("Lagos");
    var location2 = document.createTextNode("Paris");
    var location3 = document.createTextNode("Toronto");
    var location4 = document.createTextNode("London");
    var location5 = document.createTextNode("New York");
    var locationtext = document.createElement('p');
    locationtext.textContent = 'Please select a location:'
    locationtext.id = 'locationtext1';

    
    var textarea = document.createElement("textarea");
    textarea.id = 'textarea';
    textarea.setAttribute("placeholder", "Special Requests?"); 

    var submit = document.createElement("input");
    submit.id = 'submit';
    submit.setAttribute('type',"submit");
    submit.setAttribute('value',"Submit");
   
    container.appendChild(reservationdiv);
    reservationdiv.appendChild(form);
    form.appendChild(fname);
    form.appendChild(lname);
    form.appendChild(emailID);
    form.appendChild(number);
    datediv.appendChild(datetext);
    datediv.appendChild(datetimediv);
    datetimediv.appendChild(date);
    datetimediv.appendChild(time);
    form.appendChild(datediv);
    locationdiv.appendChild(locationtext);
    locationa.appendChild(location1);
    locationb.appendChild(location2);
    locationc.appendChild(location3);
    locationd.appendChild(location4);
    locatione.appendChild(location5);
    locationselect.appendChild(locationa);
    locationselect.appendChild(locationb);
    locationselect.appendChild(locationc);
    locationselect.appendChild(locationd);
    locationselect.appendChild(locatione);
    form.appendChild(locationdiv);
    form.appendChild(locationselect);
    form.appendChild(textarea);
    form.appendChild(submit);
}
renderReservationPage();