/*var btnOn = document.getElementById('on');
var btnSign = document.getElementById('sign');
var btnRaiz = document.getElementById('raiz');
var btnDiv = document.getElementById('dividido');
var btn7 = document.getElementById('7');
var btn8 = document.getElementById('8');
var btn9 = document.getElementById('9');
var btnPor = document.getElementById('por');
var btn4 = document.getElementById('4');
var btn5 = document.getElementById('5');
var btn6 = document.getElementById('6');
var btnMenos = document.getElementById('menos');
var btn1 = document.getElementById('1');
var btn2 = document.getElementById('2');
var btn3 = document.getElementById('3');
var btn0 = document.getElementById('0');
var btnPunto = document.getElementById('punto');
var btnIgual = document.getElementById('igual');
var btnMas = document.getElementById('mas');*/
var botones = document.querySelectorAll('.teclado img');
for(var i = 0; i < botones.length; i++){
    botones[i].onclick = function(e){
        var display = document.querySelector('#display');
        
        if(e.target.id == 8){
            display.innerHTML = 8;
        }
    }
}
var calculadora = function() {
    
}