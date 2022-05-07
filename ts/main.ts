class Reptile{
    name: string;
    Quantity: number;
    venomous: string;
    size: string;

}


window.onload = function() {
    let addBtn 
    = <HTMLElement>document.querySelector("input[type=button]");
       addBtn.onclick = addReptile;

}

function addReptile(){
 
    if (isAllDataValid()) {
        let reptileAll = getReptile();
        displayReptile(reptileAll);
    }
}

function getByID(id: string){
    return document.getElementById(id);
}

function getReptile():Reptile{
    // populate with data from form and return it
    let reptiles = new Reptile();
    let inputName = <HTMLInputElement>getByID("name");
    reptiles.name =   (inputName.value); 
    let QuantityInput = <HTMLInputElement>getByID("quantity");
    reptiles.Quantity = parseFloat(QuantityInput.value);
    let sizeInput = <HTMLInputElement>getByID("size");
    reptiles.size = sizeInput.value;
    let venomInput = <HTMLInputElement>getByID("venomous");
    reptiles.venomous = venomInput.value;
    return reptiles;
}


function displayReptile(myReptile:Reptile):void{
    let displayReptile = <HTMLInputElement>getByID("display");
    let reptileHeading = document.createElement("h2");
    reptileHeading.innerText = displayReptile.name;
    let reptileInfo = document.createElement("p");
    let reptileSizeDisplay = document.createElement("p")
    displayReptile.appendChild(reptileInfo);

}


let myReptile = new Reptile();
myReptile.name = "Godzilla";


//  VALIDATION CODE*********************************** 
function isAllDataValid() {
    let isValid = true;

    let inputName = <HTMLInputElement>getByID("Name");
    let inName = inputName.value;
    if (inName == "") {
        isValid = false;
        let errorsDocumented = document.createElement("p");
        errorsDocumented.innerText = "Please name a lizard";
    }

    let quantity = <HTMLInputElement>getByID("quantity")
    let quantityNum = parseFloat("quantity");
    if (quantityNum <= 0 || isNaN(quantityNum)) {
        isValid = false;
        let errorsDocumented = document.createElement("p");
        errorsDocumented.innerText = "How many lizards would you like?";
    }

    let size = <HTMLInputElement>getByID("size");
    let sizeLizard = size.value;
    if (sizeLizard == "") {
        isValid = false;
        let errorsDocumented = document.createElement("p");
        errorsDocumented.innerText = "Please choose a reptile size";
    }
    let venomous = getByID("venomous")
    let venomousQual = venomous.value;
    if (venomous == "") {
        isValid = false;
        let errorsDocumented = document.createElement("p");
        errorsDocumented.innerText = "Please select a level of venomsity";
    }
    return isValid;
}
   
