/*

 Title: Calculadora
 Author: Barrasa
 Description: Calculadora en HTML + java script

*/

let operaciona
let operacionb
let operacion

// Codigo
 function Init() {

    // Variables
    let uno = document.getElementById('uno')
    let dos = document.getElementById('dos')
    let tres = document.getElementById('tres')
    let cuatro = document.getElementById('cuatro')
    let cinco = document.getElementById('cinco')
    let seis = document.getElementById('seis')
    let siete = document.getElementById('siete')
    let ocho = document.getElementById('ocho')
    let nueve = document.getElementById('nueve')
    let cerodos = document.getElementById('cerodos')
    let cero = document.getElementById('cero')
    let resultado = document.getElementById("resultado")
    let suma = document.getElementById("suma")
    let resta = document.getElementById("resta")
    let division = document.getElementById("division")
    let multi = document.getElementById("multi")
    let limpieza = document.getElementById("limpieza")
    let igual = document.getElementById("igual")

    // Funcionalidad
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

    cerodos.onclick = function(e){
        resultado.textContent = resultado.textContent + "00";
    }

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }

    coma.onclick = function(e) {
        resultado.textContent = resultado.textContent + "."
    }
    
    limpieza.onclick = function(e) {
        reset();
    }

    suma.onclick = function(e) {
        operaciona = resultado.textContent;
        operacion = "+";
        limpiar();
    }

    resta.onclick = function(e) {
        operaciona = resultado.textContent;
        operacion = "-";
        limpiar();
    }

    division.onclick = function(e) {
        operaciona = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    multi.onclick = function(e) {
        operaciona = resultado.textContent;
        operacion = "*";
        limpiar();
    }

    igual.onclick = function(e) {
        operacionb = resultado.textContent;
        resolver();
    }
 }

 function limpiar() {
     resultado.textContent = "";
 }

 function reset() {
     resultado.textContent = "";
     operaciona = 0;
     operacionb = 0;
     operacion = "";
 }

 function resolver() {
     let reso = 0;
     switch(operacion) {
        case "+":
         reso = parseFloat(operaciona) + parseFloat(operacionb);
         break;
     }

     switch(operacion) {
        case "-":
         reso = parseFloat(operaciona) - parseFloat(operacionb);
         break;
     }
        
     switch(operacion) {
        case "/":
         reso = parseFloat(operaciona) / parseFloat(operacionb);
         break;
     }
        
     switch(operacion) {
        case "*":
         reso = parseFloat(operaciona) * parseFloat(operacionb);
         break;
     }

     reset();
     resultado.textContent = reso;
 }