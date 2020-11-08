var states = ["Select State", "East_India", "North_India", "West_India", "South_India", "North_East"];
var cities = ["Select City", "Bangalore", "Hyderabad"];
var persons = [1, 2, 3, 4, 5];
var classes = ["Normal", "Executive", "Deluxe"];
function bodyload() {
    var lstState = document.getElementById("lstState");
    for (var i = 0; i < states.length; i++) {
        var option = document.createElement("option")
        option.text = states[i];
        option.value = states[i];
        lstState.appendChild(option)
    }
    var lstCity = document.getElementById("lstCity");
    for (var i = 0; i < cities.length; i++) {
        var option = document.createElement("option")
        option.text = cities[i];
        option.value = cities[i];
        lstCity.appendChild(option)
    }
    var lstPerson = document.getElementById("lstPerson");
    for (var i = 0; i < persons.length; i++) {
        var option = document.createElement("option");
        option.text = persons[i];
        option.value = persons[i];
        lstPerson.appendChild(option)
    }
    var lstClasses = document.getElementById("lstClasses");
    for (var i = 0; i < classes.length; i++) {
        var option = document.createElement("option");
        option.text = classes[i];
        option.value = classes[i];
        lstClasses.appendChild(option)
    }
}
var getSeat = 1;
function SeatsChanged() {
    getSeat = document.getElementById("lstPerson").value;
}
var classVal
var normalCost = 1500;
var executiveCost = 0;
var deluxeCost = 0;
var totalAmount = 0;
function ClassesChanged() {
    classVal = document.getElementById("lstClasses").value
    if (classVal == "Normal") {
        normalCost = 1500;
    }
    if (classVal == "Gold") {
        executiveCost = 3000;
    }
    if (classVal == "Premium") {
        DeluxeCost = 6000;
    }
}

function BookTourClick(d1) {
    document.getElementById('lblDate').innerHTML = document.getElementById(d1).value;
    document.getElementById('lblState').innerHTML = document.getElementById('lstState').value;
    document.getElementById('lblCity').innerHTML = document.getElementById('lstCity').value;
    document.getElementById('lblLocation').innerHTML = document.getElementById('lstLocation').value;
    document.getElementById('lblDay').innerHTML = document.getElementById('lstDays').value;
    document.getElementById('lblPerson').innerHTML = document.getElementById('lstPerson').value;
    document.getElementById('lblClass').innerHTML = document.getElementById('lstClasses').value;
    totalAmount = getSeat * normalCost;
    if (classVal == "Normal" && getSeat) {
        normalCost = 1500;
        totalAmount = getSeat * normalCost;
    }
    if (classVal == "Executive") {
        executiveCost = 3000;
        totalAmount = getSeat * executiveCost;
    }
    if (classVal == "Deluxe") {
        deluxeCost = 6000;
        totalAmount = getSeat * deluxeCost;
    }
    document.getElementById('totalAmount').innerHTML = totalAmount;
}