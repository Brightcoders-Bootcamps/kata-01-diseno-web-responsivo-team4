// Id's
var btnBurger = document.getElementById("btnBurger");
var menuOptions = document.getElementById("menuOptions");

btnBurger.addEventListener("click", function() {
    menuOptions.classList.toggle("hidden");
});
