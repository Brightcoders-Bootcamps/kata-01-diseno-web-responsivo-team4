// Id's boton hamburguesa
var btnBurger = document.getElementById("btnBurger");
var menuOptions = document.getElementById("menuOptions");

btnBurger.addEventListener("click", function () {
    menuOptions.classList.toggle("hidden");
});

// shorten link
var URL_BASE = 'https://api.shrtco.de/v2'
var inptShorten = document.getElementById('inptShorten');
var btnShorten = document.getElementById('btnShorten');

btnShorten.addEventListener('click', () => {
    console.log(inptShorten.value)
    let link = inptShorten.value;

    if (!link) {
        var error = document.getElementById('mensajeError');
        error.style.display = 'block';
        return false;
    }

    var error = document.getElementById('mensajeError');
    error.style.display = 'none';

    fetch(`${URL_BASE}/shorten?url=${link}`, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => console.log(data));
});