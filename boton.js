var boton = document.getElementById("boton1");
boton.style.display = "none";

function suma() {
    let num1 = document.getElementById("valor1").value;
    let num2 = document.getElementById("valor2").value;
    if (num1.length > 0 && num2.length > 0) { // Cambié "lenght" a "length" aquí
        boton.style.display = "block";
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        let resultado = num1 + num2;
        let respuesta = document.getElementById("respuesta");
        respuesta.innerHTML = `<label>El resultado es: ${resultado}</label>`; // Usé comillas graves (`) para interpolación de cadenas
    } else {
        boton.style.display = "none";
    }
}

function verificar() {
    let num1 = document.getElementById("valor1").value;
    let num2 = document.getElementById("valor2").value;
    if (num1.length > 0 && num2.length > 0) { // Cambié "lenght" a "length" aquí
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
}