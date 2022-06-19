let input = document.querySelector("#input");
let tbody = document.querySelector("#tbody");
let getDataBtn = document.querySelector('#getDataBtn');

// Definiálja a lekérés tulajdonságait
let lekeres = {
    method: "GET",
    mode: "cors",
    cache: "no-cache"
}


/* Lekéri az adatokat fetch segítségével a megadott 'url' címről a 'lekeres' változóban tárolt tulajdonságok alapján. 
A kapott adatokat JSON formátumba konvertálja majd azokat kiírja a konzolra. */
function adatlekeres() {
    let url = "https://api.github.com/users/" + input.value;
    fetch(url, lekeres).then(response => response.json())
        .then(
            data => console.log(data)
        );
}


//Ezzel a függvénnyel bármilyen elemet létre lehet hozni
function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}


//Figyeli a 'getDataBtn' id-jű gombot, majd a kattintást érzékelve lefuttatja az 'adatlekeres' függvényt
getDataBtn.addEventListener("click", adatlekeres);