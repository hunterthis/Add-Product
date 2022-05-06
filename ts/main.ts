class Reptile{
    name: string;
    Quantity: number;
    venomous: number;
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

// ADD VALIDATION CODE*********************************** JOE DOESN'T LIKE THIS BUT ITS OK FOR NOW
function isAllDataValid(){
    return true;
}
// Test code
let myReptile = new Reptile();
myReptile.name = "Godzilla"