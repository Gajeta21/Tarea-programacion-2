var operandoA;
var operandoB;
var operacion;
var res;
var resultados = [];

function init(){
    /*Botones*/ 
    var eliminar = document.getElementById('eliminar');
    var verHistorial = document.getElementById('verHistorial');
    var resultado = document.getElementById('resultado');

    /* Numeros y Operadores*/
    var reset = document.getElementById('reset');
    var suma = document.getElementById('+');
    var resta = document.getElementById('-');
    var multiplicacion = document.getElementById('X');
    var division = document.getElementById('/');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var cero = document.getElementById('0');
    var igual = document.getElementById('=');


    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    igual.onclick = function(e){
        operandoB = resultado.textContent;
        resolver();
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){        
        operandoA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    eliminar.onclick = function(e){
        localStorage.removeItem('resultados');
    }
    verHistorial.onclick = function(e){
        var tag = document.createElement("p");
        var texto = document.createTextNode(JSON.parse(localStorage.getItem("resultados")));
        tag.appendChild(texto);
        document.getElementById("valores").appendChild(tag);
        }
    }


function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function resolver(){
    res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;
    }
    resetear();
    resultado.textContent = res;
    agregarLocalStorage();
}

function agregarLocalStorage(){
    resultados.push(res);
    localStorage.setItem("resultados", JSON.stringify(resultados));
}