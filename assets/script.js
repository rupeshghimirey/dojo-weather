
var cookieBar = document.getElementById("cookie-policy");
// var degreeCelsius = document.getElementById("degree-celsius");
var degreeCelsius1 = document.getElementById("degree-celsius1").innerText;
var degreeCelsius2 = document.getElementById("degree-celsius2").innerText;
var degreeCelsius3 = document.getElementById("degree-celsius3").innerText;
var degreeCelsius4 = document.getElementById("degree-celsius4").innerText;
var degreeCelsius5 = document.getElementById("degree-celsius5").innerText;
var degreeCelsius6 = document.getElementById("degree-celsius6").innerText;
var degreeCelsius7 = document.getElementById("degree-celsius7").innerText;
var degreeCelsius8 = document.getElementById("degree-celsius8").innerText;

console.log(degreeCelsius8);



function alertWeather() {
    return "Loading weather report...";
}

// function removeCookiepolicy(element) {
//     if(element == cookieBar)
//     element.remove();
// }

function removeCookiepolicy() {
    cookieBar.remove();
}
// 1.8 or 9/5
function toFahrenheight() {
    document.getElementById("degree-celsius1").innerText = Math.floor((degreeCelsius1 * (9/5) + 32));
    document.getElementById("degree-celsius2").innerText = Math.floor((degreeCelsius2 * (9/5) + 32));
    document.getElementById("degree-celsius3").innerText = Math.floor((degreeCelsius3 * (9/5) + 32));
    document.getElementById("degree-celsius4").innerText = Math.floor((degreeCelsius4 * (9/5) + 32));
    document.getElementById("degree-celsius5").innerText = Math.floor((degreeCelsius5 * (9/5) + 32));
    document.getElementById("degree-celsius6").innerText = Math.floor((degreeCelsius6 * (9/5) + 32));
    document.getElementById("degree-celsius7").innerText = Math.floor((degreeCelsius7 * (9/5) + 32));
    document.getElementById("degree-celsius8").innerText = Math.floor((degreeCelsius8 * (9/5) + 32));
}

