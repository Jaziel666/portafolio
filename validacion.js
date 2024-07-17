//Haz tú validación en javascript acá
const form = document.querySelector("#form")

function verificarForm (evento) {
    evento.preventDefault();
    const nombre = document.querySelector(".nombre").value;
    const email = document.querySelector("email").value;
    const asunto = document.querySelector(".asunto").value;
    const mensaje = document.querySelector(".mensaje").value;

    if (isVacio(nombre)) {
        
    } else {
        
    }
}

form.addEventListener("submit", evento => verificarForm(evento));

function verificarSize(string, numeroCar){
    string.length <= numeroCar
}

function isVacio(string) {
    string.length == 0
}