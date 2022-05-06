class Reptile{
    name: string;
    Quantity: number;
    venomous: string;
    size: string;
    label: string;
}


window.onload = function() {
    let addBtn 
    = <HTMLElement>document.querySelector("input[type=button]");
       addBtn.onclick = addReptile;

}

function addReptile(){
    alert("Reptile added");

    if (isAllDataValid()) {
        let reptile = getReptile();
        displayReptile(reptile);
    }
}

//  VALIDATION CODE*********************************** 
function isAllDataValid(){
    return true;
}


function getByID(id: string){
    return document.getElementById(id);
}



function getReptile():Reptile{
    // populate with data from form and return it
    let reptile = new Reptile();

    
    let inputName = <HTMLInputElement>getByID("name");

    reptile.name =   inputName.value; 

    let QuantityInput = <HTMLInputElement>getByID("quantity");
    reptile.Quantity = parseFloat(QuantityInput.value);

    let sizeInput = <HTMLInputElement>getByID("size");
    reptile.size = sizeInput.value;

    let venomInput = <HTMLInputElement>getByID("venomous");
    reptile.venomous = venomInput.value;



    return Reptile;// placeholder
}


function displayReptile(myReptile:Reptile):void{
    // todo display reptile data below the form
}

/* Test code
let myReptile = new Reptile();
myReptile.name = "Godzilla"
*/