let input = document.getElementById("input");
let getDataBtn = document.getElementById("getDataBtn");
let url = "https://api.github.com/users/" + input.value;


    getDataBtn.addEventListener("click", adatlekeres);

let lekeres = {
    method: "GET",
    mode: "cors",
    cache: "no-cache"
}

function adatlekeres() {
    fetch (url, lekeres).then(response => response.json())
    .then(
        data => console.log(data)
        );
}