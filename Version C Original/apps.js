// Asignacion de colores
let color = [
    'rgb(244,208,63)',// amarillo 
    'rgb(24,208,63)', // verde
    'rgb( 199, 0, 57)', // rojo
    'rgb(0,0,255)', // azul
    'rgb( 74, 35, 90 )', // purpura
    'rgb( 186,74,0)'  // naranjo;
]
let numberOfSquares = 6;
let btnEasy = document.getElementById("easy");
let btnHard = document.getElementById("hard");
let square = document.querySelectorAll(".square"); // 


console.log(square.length);
//Iniciador  arreglo For square
for (var iterador = 0; iterador < square.length; iterador++) {
    console.log('iteracion numero ' + iterador)
    color[iterador] = randomColor();
    square[iterador].style.backgroundColor = color[iterador];
}
var pickedColor = randomPosicion();
var mensage = document.getElementById("message");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
function changeColors(colores) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colores;
    }
}
function randomColor() { // funcion muestra colores aleatorio
    var rojo = Math.floor(Math.random() * 256) //
    var verde = Math.floor(Math.random() * 256)
    var azul = Math.floor(Math.random() * 256)
    console.log("rgb(" + rojo + ", " + verde + "," + azul + ")"
    )
    return "rgb(" + rojo + ", " + verde + "," + azul + ")"
}
// ramdomisa posicion 
function randomPosicion() {
    var posicion = color[Math.floor(Math.random() * square.length)]
    return posicion
}
// funcionalidad Juego 
var square0 = square[0].addEventListener("click", function () {
    var clickColor = color[0];
    if (pickedColor !== clickColor) {
        square[0].style.backgroundColor = "rgb(23,23,23)"
        mensage.innerHTML = " Intentalo Nuevamente";
    }
    else {
        mensage.innerHTML = "¡Corrrecto!";
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor)
    }
})
var square1 = square[1].addEventListener("click", function () {
    var clickColor = color[1];
    if (pickedColor !== clickColor) {
        square[1].style.backgroundColor = "rgb(23,23,23)"
        mensage.innerHTML = " Intentalo Nuevamente";
    }
    else {
        mensage.innerHTML = "¡Corrrecto!";
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor)
    }
})
var square2 = square[2].addEventListener("click", function () {
    var clickColor = color[2];
    if (pickedColor !== clickColor) {
        square[2].style.backgroundColor = "rgb(23,23,23)"
        mensage.innerHTML = " Intentalo Nuevamente";
    }
    else {
        mensage.innerHTML = "¡Corrrecto!";
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor)
    }
})
var square3 = square[3].addEventListener("click", function () {
    var clickColor = color[3];
    if (pickedColor !== clickColor) {
        square[3].style.backgroundColor = "rgb(23,23,23)"
        mensage.innerHTML = " Intentalo Nuevamente";
    }
    else {
        mensage.innerHTML = "¡Corrrecto!";
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor)
    }
})
var square4 = square[4].addEventListener("click", function () {
    var clickColor = color[4];
    if (pickedColor !== clickColor) {
        square[4].style.backgroundColor = "rgb(23,23,23)"
        mensage.innerHTML = " Intentalo Nuevamente";
    }
    else {
        mensage.innerHTML = "¡Corrrecto!";
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor)
    }
})
var square5 = square[5].addEventListener("click", function () {
    var clickColor = color[5];
    if (pickedColor !== clickColor) {
        square[5].style.backgroundColor = "rgb(23,23,23)"
        mensage.innerHTML = " Intentalo Nuevamente";
    }
    else {
        mensage.innerHTML = "¡Corrrecto!";
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor)
    }
})

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
    randomColor()
    location.reload();
})

btnHard.addEventListener("click", function () {

    for (let i = numberOfSquares; i < square.length; i++) {
        square[i].style.visibility = "hidden";
    }
    btnHard.classlist.toggle("selected");
    btnEasy.classList.remove("selected")
    numberOfSquares = 6;
    randomColor(6)

}
)
Easy.addEventListener("click", function () {
    for (let i = numberOfSquares; i < square.length; i++) {
        square[i].style.visibility = "hidden";
    }
})

btnEasy.classlist.toggle("selected");
btnHard.classList.remove("selected")
numberOfSquares = 3;
randomColor(3)

   //esta copia