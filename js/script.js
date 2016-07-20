/*--getting the value of the drop down list --when using RegExp--*/
//var selected = document.getElementById('addressType');
//selected[6].getAttribute("value");

//var selected = document.getElementById('addressType')[2].value;
//window.console.log(selected);
/*-------------------------------------------------------------*/
//document.addEventListener("DOMContentLoaded", init, false);


var totalCostVar = document.getElementById('totalCost');
var totalCost = Number(totalCostVar.innerHTML);
window.console.log(totalCost); // delete after

document.forms[1].style.display = 'none'; //CBH! uncomment once coding is complete

/*-------------------- gathering value from user input text ---------------*/
var customerName = document.getElementById('name');
function getCustomerName() {
    window.console.log(this.customerName.value);
}

var customerAddress1 = document.getElementById('address');
function getCustomerAddressLine1() {
    
    window.console.log(this.customerAddress1.value);
}    

var customerAddress2 = document.getElementById('addressOpt');
function getCustomerAddressLine2() {
    window.console.log(this.customerAddress2.value);
}

var customerCity = document.getElementById('city');
function getCustomerCity() {
    window.console.log(this.customerCity.value);
}

var customerState = document.getElementById('state');
function getCustomerState() {
    window.console.log(this.customerState.value);
}

var customerZipCode = document.getElementById('zipCode');
function getCustomerZipCode() {
    window.console.log(this.customerZipCode.value);
}

var customerPhone = document.getElementById('phone');
function getCustomerPhone() {
    window.console.log(this.customerPhone.value);
}

var customerEmail = document.getElementById('email');
function getCustomerEmail() {
    window.console.log(this.customerEmail.value);
}

/*-------------------- gathering value from user input text -- End Code---------*/


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
        stringCharacter.className += 'errorHere';
        
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
/*-----------------After user inputs text Code------------------------------------*/


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
/*-------------------------Disabling code -- End--------------------*/
/*-------------------------- Dough Options -------------------------*/
//Dough Options Code starts here 
    //functioning to show/hide but must be bound to object using literal notation--useful when adding in price //CBH

//Making variable and defaulting all select options to hidden
var pizzaHandTossed = document.getElementById('pizzaHandTossed');
pizzaHandTossed.style.display = 'none';

var pizzaThinCrust = document.getElementById('pizzaThinCrust')
pizzaThinCrust.style.display = 'none';

var pizzaNewYorkStyle = document.getElementById('pizzaNewYorkStyle')
pizzaNewYorkStyle.style.display = 'none';

var pizzaGlutenFree = document.getElementById('pizzaGlutenFree')
pizzaGlutenFree.style.display = 'none';

//Identifying each radio button by use of variables
var handTossed = document.querySelectorAll('input[type=radio]')[0],
    thinCrust = document.querySelectorAll('input[type=radio]')[1],
    newYorkStyle = document.querySelectorAll('input[type=radio]')[2],
    glutenFree = document.querySelectorAll('input[type=radio]')[3];

/*---------------------- Dough Options -- End Code ----------------------*/

/*----------------------- Cheese Option -------------------------------*/
//function cheeseSelection() {
    //as long as variable cheese is still applicable
    /*if (cheese.selectedIndex > 0) {
        if ("light" === cheese.options[cheese.selectedIndex].value) {
            window.console.log("Light is selected. No charge");
        }*/
//    var cheeseOption = cheese.options[cheese.selectedIndex].value;
    //var cheeseCostAdd = Number(cheeseOption);
//    totalCost.innerHTML += Number(cheeseOption);
    
//}

var normalCheese = cheese.options[0].value,
    lightCheese = cheese.options[1].value,
    doubleCheese = cheese.options[2].value,
    extraCheese = cheese.options[3].value;
//cheese.addEventListener('click', runDoubleCheese, false); //CBH
/*----------------------- Cheese Option -- End Code ---------------------*/
/*-----------------Functions for dough selections------------------------*/
function checkedHandTossed() {
    pizzaHandTossed.style.display = 'block';
    pizzaThinCrust.style.display = 'none';
    pizzaNewYorkStyle.style.display = 'none';
    pizzaGlutenFree.style.display = 'none';
    cheeseAble();
    sauceAble();
    toppingsAble();
}
function checkedThinCrust() {
    pizzaHandTossed.style.display = 'none';
    pizzaThinCrust.style.display = 'block';
    pizzaNewYorkStyle.style.display = 'none';
    pizzaGlutenFree.style.display = 'none';
    cheeseAble();
    sauceAble();
    toppingsAble();
    
}
function checkedNewYorkStyle() {
    pizzaHandTossed.style.display = 'none';
    pizzaThinCrust.style.display = 'none';
    pizzaNewYorkStyle.style.display = 'block';
    pizzaGlutenFree.style.display = 'none';
    cheeseAble();
    sauceAble();
    toppingsAble();
}
function checkedGlutenFree() {
    pizzaHandTossed.style.display = 'none';
    pizzaThinCrust.style.display = 'none';
    pizzaNewYorkStyle.style.display = 'none';
    pizzaGlutenFree.style.display = 'block';
    cheeseAble();
    sauceAble();
    toppingsAble();
}

handTossed.addEventListener('click', checkedHandTossed, false);
thinCrust.addEventListener('click', checkedThinCrust, false);
newYorkStyle.addEventListener('click', checkedNewYorkStyle, false);
glutenFree.addEventListener('click', checkedGlutenFree, false);
/*---------------Functions for dough selections-- End-----------------*/

/*------------------ Heading to next form ------------*/
var pizzaDoneBtn = document.getElementById('continueNextForm');
function nextForm() {
    var formContinue = window.confirm("Are you done building your ultimate pizza?");
        if (formContinue == true) {
            document.forms[0].style.display = 'none';
            document.forms[1].style.display = 'block';
        } else {
            window.console.log("Continue Building your Ultimate Pizza!");
        }
    //verifyFields(); this function will very that all fields have a value if req
    //CBH!
}
pizzaDoneBtn.addEventListener('click', nextForm, false);


//Prepopulating Code--only active 4 clicks--do, undo, do, undo
var customerPrePopInfo = document.getElementById('customerPrePop');
function prePopInfo() {
    //name, street address, optional apartment number, suite, or room number, city, state, and zip code
    document.forms[1].elements["name2"].value = customerName.value;
    document.forms[1].elements["address2"].value = customerAddress1.value;
    document.forms[1].elements["addressOpt2"].value = customerAddress2.value;
    document.forms[1].elements["city2"].value = customerCity.value;
    document.forms[1].elements["state2"].value = customerState.value;
    document.forms[1].elements["zipCode2"].value = customerZipCode.value;
    
    customerPrePopInfo.addEventListener('click', function() {
    document.forms[1].elements["name2"].value = "";
    document.forms[1].elements["address2"].value = "";
    document.forms[1].elements["addressOpt2"].value = "";
    document.forms[1].elements["city2"].value = "";
    document.forms[1].elements["state2"].value = "";
    document.forms[1].elements["zipCode2"].value = "";
    
    customerPrePopInfo.addEventListener('click', function() {
        document.forms[1].elements["name2"].value = customerName.value;
        document.forms[1].elements["address2"].value = customerAddress1.value;
        document.forms[1].elements["addressOpt2"].value = customerAddress2.value;
        document.forms[1].elements["city2"].value = customerCity.value;
        document.forms[1].elements["state2"].value = customerState.value;
        document.forms[1].elements["zipCode2"].value = customerZipCode.value;
            
        customerPrePopInfo.addEventListener('click', function() {
            document.forms[1].elements["name2"].value = "";
            document.forms[1].elements["address2"].value = "";
            document.forms[1].elements["addressOpt2"].value = "";
            document.forms[1].elements["city2"].value = "";
            document.forms[1].elements["state2"].value = "";
            document.forms[1].elements["zipCode2"].value = "";
            })
        },false);
    }, false);
}
customerPrePopInfo.addEventListener('click', prePopInfo, false);

/*-------------------------Get Customer Billing info-----------------------*/

//whether or not prepopulated:

var customerName_2 = document.getElementById('name2');
function getBillingName() {
    window.console.log(this.customerName.value);
}

var customerAddress1_2 = document.getElementById('address2');
function getBillingAddressLine1() {
    
    window.console.log(this.customerAddress1.value);
}    

var customerAddress2_3 = document.getElementById('addressOpt2');
function getBillingAddressLine2() {
    window.console.log(this.customerAddress2.value);
}

var customerCity_4 = document.getElementById('city2');
function getBillingCity() {
    window.console.log(this.customerCity.value);
}

var customerState_5 = document.getElementById('state2');
function getBillingState() {
    window.console.log(this.customerState.value);
}

var customerZipCode_6 = document.getElementById('zipCode2');
function getBillingZipCode() {
    window.console.log(this.customerZipCode.value);
}













