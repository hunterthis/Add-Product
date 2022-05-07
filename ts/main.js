"use strict";
class Reptile {
}
window.onload = function () {
    let addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addReptile;
};
function addReptile() {
    if (isAllDataValid()) {
        let reptileAll = getReptile();
        displayReptile(reptileAll);
    }
}
function getByID(id) {
    return document.getElementById(id);
}
function getReptile() {
    // populate with data from form and return it
    let reptiles = new Reptile();
    let inputName = getByID("name");
    reptiles.name = inputName.value;
    let QuantityInput = getByID("quantity");
    reptiles.Quantity = parseFloat(QuantityInput.value);
    let sizeInput = getByID("size");
    reptiles.size = sizeInput.value;
    let venomInput = getByID("venomous");
    reptiles.venomous = venomInput.value;
    return reptiles;
}
function displayReptile(myReptile) {
    let displayReptile = getByID("display");
    let reptileHeading = document.createElement("h2");
    reptileHeading.innerText = displayReptile.name;
    let reptileInfo = document.createElement("p");
    let reptileSizeDisplay = document.createElement("p");
    displayReptile.appendChild(reptileInfo);
}
let myReptile = new Reptile();
myReptile.name = "Godzilla";
//  VALIDATION CODE*********************************** 
function isAllDataValid() {
    let isValid = true;
    let name = getByID("Name").value;
    if (name == "") {
        isValid = false;
        let errorsDocumented = document.createElement("p");
        errorsDocumented.innerText = "Please name a lizard";
    }
    let quantity = getByID("quantity").value;
    let quantityNum = parseFloat(quantity);
    if (quantity == "" || isNaN(quantityNum)) {
        isValid = false;
        let errorsDocumented = document.createElement("p");
        errorsDocumented.innerText = "How many lizards would you like?";
    }
    let type = getByID("size").value;
    if (type == "") {
        isValid = false;
        let errorsDocumented = document.createElement("p");
        errorsDocumented.innerText = "Please choose a reptile size";
    }
    let venomous = getByID("venomous").value;
    if (venomous == "") {
        isValid = false;
        let errorsDocumented = document.createElement("p");
        errorsDocumented.innerText = "Please select a level of venomsity";
    }
    return isValid;
}
