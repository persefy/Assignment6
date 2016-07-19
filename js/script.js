/*--getting the value of the drop down list --when using RegExp--*/
//var selected = document.getElementById('addressType');
//selected[6].getAttribute("value");

//var selected = document.getElementById('addressType')[2].value;
//window.console.log(selected);
/*-------------------------------------------------------------*/
//document.addEventListener("DOMContentLoaded", init, false);

/*-------------------- gathering value from user input text ---------------*/
function getCustomerName() {
    var customerName = document.getElementById('name').value;
    window.console.log(customerName);
}
function getCustomerAddressLine1() {
    var customerAddress1 = document.getElementById('address').value;
    window.console.log(customerAddress1);
}    
function getCustomerAddressLine2() {
    var customerAddress2 = document.getElementById('addressOpt').value;
    window.console.log(customerAddress2);
}
function getCustomerAddressType() {
    /*var customerAddress2 = document.getElementById('addressType').value;
    window.console.log(customerAddress2);*/
}
function getCustomerAddress() {
    //address line 1
    //address line 2
}

function getCustomerCity() {
    var customerCity = document.getElementById('city').value;
    window.console.log(customerCity);
}
function getCustomerState() {
    var customerState = document.getElementById('state').value;
    window.console.log(customerState);
}

function getCustomerZipCode() {
    var customerZipCode = document.getElementById('zipCode').value;
    window.console.log(customerZipCode);
}
function getCustomerPhone() {
    var customerPhone = document.getElementById('phone').value;
    window.console.log(customerPhone);
}

function getCustomerEmail() {
    var customerEmail = document.getElementById('email').value;
    window.console.log(customerEmail);
}


/*-------------------- gathering value from user input text End Code-------------*/


//address type code:
function hideIt() {
    'use strict';
    document.getElementById('other').style.display = 'none';
}
hideIt();
function showOther() {
    'use strict';
    var otherOpt = document.getElementById("addressType");
      
    if (otherOpt.selectedIndex > 0) {
        if ("other" === otherOpt.options[otherOpt.selectedIndex].value) {
            document.getElementById('other').style.display = 'block';
        } else {
            document.getElementById('other').style.display = 'none';
        }
    }
}
document.getElementById("addressType").addEventListener("click", showOther, false); //other won't show if you scroll with arrow button and press tab. It must be selected with mouse button to update...possibly fix soon!

//check Name value with RegExp
function checkInputText() {
    'use strict';
    var stringCharacter = document.querySelector('input[type=text]');
    var valueOfChar = stringCharacter.value;
    if (valueOfChar.match(/\d/g)) {
        window.console.log('Please enter your name using letters A-Z');
        //error message here //CBH
    } else if (valueOfChar.match(/\w/g)) {
        window.console.log('Accepted Name');
    } else if(valueOfChar == null || valueOfChar == "") {
        window.alert('Please fill in your name');
        //error message here //CBH
    }
}

/*-------------------validation here-----------Come Back--------------*/ //CBH
//make sure address if filled- validation using RegExp
function checkInputAddress() {
    'use strict';
    var stringCharacter = document.querySelector('input[type=text]');
    var valueOfChar = stringCharacter.value;
    if (valueOfChar.match(/\w/g)) {
        window.console.log('Address Accepted');
    } else if(valueOfChar == null || valueOfChar == "") {
        window.alert('Please fill in your name');
        //error message here
    }
}
/*function checkInputState() {
    'use strict';
    var stringCharacter = document.querySelector('input[type=text]');
    var valueOfChar = stringCharacter.value;
    if (valueOfChar.match(/\w/i)) { //state is not working
        window.console.log('Accepted State value');
    } else if(valueOfChar == null || valueOfChar == "") {
        window.alert('Please add in your state\nexample "CA"');
        //error message here
    }
}
*/

function checkInputZipCode() { //CBH
    'use strict';
    var numberCharacter = document.querySelector('input[type=text]');
    var valueOfChar = numberCharacter.value;
    window.console.log(valueOfChar.typeof);
    /*if (valueOfChar.match(/\d{5}/g)) {
        window.console.log('Zip Code Good');
    } else if(valueOfChar == null || valueOfChar == "") {
        window.alert('Please add your zip code');
        //error message here
    } else {
        window.alert("write your zip code in this format 11111");
    }*/
}
/*-------------------validation here---------Come Back--------------*/

function grabInfoName() {
    checkInputText();
    getCustomerName();
}
function grabInfoAddress() {
    //checkInputAddress(); //may not go here...CBH
    getCustomerAddressLine1();
}
function grabInfoAddress2() {
    getCustomerAddressLine2();
}
function grabInfoCity() {
    getCustomerCity();
    //may not need checkInputCity--not yet declared/defined
}
function grabInfoState() {
    //checkInputState(); fix before uncommenting
    getCustomerState();
}
function grabInfoZipCode() {
    getCustomerZipCode();
}
function grabInfoPhone() {
    getCustomerPhone();
}
function grabInfoEmail() {
    getCustomerEmail();
}
/*-----------------Afte user inputs text Code------------------------------------*/
document.getElementById('name').addEventListener('blur', grabInfoName, false);
document.getElementById('address').addEventListener('blur', grabInfoAddress, false);
document.getElementById('addressOpt').addEventListener('blur', grabInfoAddress2, false);
document.getElementById('city').addEventListener('blur', grabInfoCity, false);
document.getElementById('state').addEventListener('blur', grabInfoState , false);
document.getElementById('zipCode').addEventListener('blur', grabInfoZipCode , false);
document.getElementById('phone').addEventListener('blur', grabInfoPhone , false);
document.getElementById('email').addEventListener('blur', grabInfoEmail , false);

//document.getElementById('zipCode').addEventListener('blur', checkInputZipCode, false);
/*-----------------Afte user inputs text Code------------------------------------*/




/*---------------------Disabled Until its time---------------------------*/
//cheese    //sauce     //toppigs

//cheese
var cheese = document.getElementById('cheese');
cheese.disabled = true;
function cheeseAble() {
    cheese.disabled = false;
}
//sauce
var sauce = document.getElementById('sauce');
sauce.disabled = true;
function sauceAble() {
    sauce.disabled = false;
}
//toppings
var pepperoni = document.querySelector('input[type=checkbox]');
pepperoni.disabled = true;
var sausage = document.querySelectorAll('input[type=checkbox]')[1];
sausage.disabled = true;
var ham = document.querySelectorAll('input[type=checkbox]')[2];
ham.disabled = true;
var bacon = document.querySelectorAll('input[type=checkbox]')[3];
bacon.disabled = true;
var salami = document.querySelectorAll('input[type=checkbox]')[4];
salami.disabled = true;
var peppers = document.querySelectorAll('input[type=checkbox]')[5];
peppers.disabled = true;
var olives = document.querySelectorAll('input[type=checkbox]')[6];
olives.disabled = true;
var jalapenos = document.querySelectorAll('input[type=checkbox]')[7];
jalapenos.disabled = true;
var mushrooms = document.querySelectorAll('input[type=checkbox]')[8];
mushrooms.disabled = true;
var pineapple = document.querySelectorAll('input[type=checkbox]')[9];
pineapple.disabled = true;
var onion = document.querySelectorAll('input[type=checkbox]')[10];
onion.disabled = true;
function toppingsAble() {
    pepperoni.disabled = false;
    sausage.disabled = false;
    ham.disabled = false;
    bacon.disabled = false;
    salami.disabled = false;   
    peppers.disabled = false;
    olives.disabled = false;
    jalapenos.disabled = false;
    mushrooms.disabled = false;
    pineapple.disabled = false;
    onion.disabled = false;
}
/*-------------------------Disabling code End-----------------------*/

//Dough Options Code starts here 
    //functioning to show/hide but must be bound to object using literal notation--useful when adding in price //CBH

document.getElementById('pizzaHandTossed').style.display = 'none';
document.getElementById('pizzaThinCrust').style.display = 'none';
document.getElementById('pizzaNewYorkStyle').style.display = 'none';
document.getElementById('pizzaGlutenFree').style.display = 'none';


var handTossed = document.querySelectorAll('input[type=radio]')[0];
var thinCrust = document.querySelectorAll('input[type=radio]')[1];
var newYorkStyle = document.querySelectorAll('input[type=radio]')[2];
var glutenFree = document.querySelectorAll('input[type=radio]')[3];

function checkedHandTossed() {
    document.getElementById('pizzaHandTossed').style.display = 'block';
    document.getElementById('pizzaThinCrust').style.display = 'none';
    document.getElementById('pizzaNewYorkStyle').style.display = 'none';
    document.getElementById('pizzaGlutenFree').style.display = 'none';
    cheeseAble();
    sauceAble();
    toppingsAble();
    
}
function checkedThinCrust() {
    document.getElementById('pizzaHandTossed').style.display = 'none';
    document.getElementById('pizzaThinCrust').style.display = 'block';
    document.getElementById('pizzaNewYorkStyle').style.display = 'none';
    document.getElementById('pizzaGlutenFree').style.display = 'none';
    cheeseAble();
    sauceAble();
    toppingsAble();
    
}
function checkedNewYorkStyle() {
    document.getElementById('pizzaHandTossed').style.display = 'none';
    document.getElementById('pizzaThinCrust').style.display = 'none';
    document.getElementById('pizzaNewYorkStyle').style.display = 'block';
    document.getElementById('pizzaGlutenFree').style.display = 'none';
    cheeseAble();
    sauceAble();
    toppingsAble();
}
function checkedGlutenFree() {
    document.getElementById('pizzaHandTossed').style.display = 'none';
    document.getElementById('pizzaThinCrust').style.display = 'none';
    document.getElementById('pizzaNewYorkStyle').style.display = 'none';
    document.getElementById('pizzaGlutenFree').style.display = 'block';
    cheeseAble();
    sauceAble();
    toppingsAble();
}

handTossed.addEventListener('click', checkedHandTossed, false);
thinCrust.addEventListener('click', checkedThinCrust, false);
newYorkStyle.addEventListener('click', checkedNewYorkStyle, false);
glutenFree.addEventListener('click', checkedGlutenFree, false);

/*-----------------------------------*/

//Prepopulating Code
function prepopInfo() {
    var name = getCustomerName();
    var addressL1 = getCustomerAddressLine1();
    var addressL2 = getCustomerAddressLine2();
    var city = getCustomerCity();
    var state = getCustomerState();
    var zipCode = getCustomerZipCode();
    window.console.log(name, addressL1, addressL2, city, state, zipCode);
}

var customerPrepopInfo = document.getElementById('customerPrepop');
customerPrepopInfo.addEventListener('click', prepopInfo, false);

/*-------------------------Get Customer Billing info-----------------------*/
















