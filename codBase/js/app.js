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
var pre, pos, operator;
var temp = ""; 
var decimal = false, sign = false;

var calculadora = {
    validarOperaciones : function() {
        for(var i = 0; i < botones.length; i++){    
            botones[i].onclick = function(e){
                var display = document.querySelector('#display');
                var btnVal = e.target.id;
                if(e.target.id == "on"){
                    //document.querySelector('#on').style = "padding: 0.5%";
                    display.innerHTML = 0;
                    operator = "";
                    pre = "";
                    pos = "";
                    decimal = false;
                }else if(e.target.id == "igual"){
                    //document.querySelector('#on').style = "padding: 0.5%";
                    pos = display.innerHTML;
                    if(operator == "mas"){
                        sumar(pre, pos);
                    }else if(operator == "menos"){
                        restar(pre, pos);
                    }else if(operator == "por"){
                        multiplicar(pre, pos);
                    }else if(operator == "dividido"){
                        dividir(pre, pos);
                    }
                    
                }else if(e.target.id == "punto"){
                    if(!decimal){
                        display.innerHTML += ".";
                        decimal = true;
                    }
                }else if(e.target.id == "sign"){         
                    if(display.innerHTML != 0 && sign == false){
                        temp = display.innerHTML;
                        display.innerHTML = "-" + display.innerHTML;
                        sign = true;
                    }else if(display.innerHTML != 0 && sign == true){
                        display.innerHTML = temp;
                        temp = "";
                        sign = false;
                    }
                }else {
                    if(isNaN(parseInt(e.target.id)) && display.innerHTML != 0){
                        switch(e.target.id){
                            case "mas":
                                operator = e.target.id;
                                pre = display.innerHTML;
                                display.innerHTML = "";
                                btnVal = "";
                                break;                    
                            case "menos":
                                operator = e.target.id;
                                pre = display.innerHTML;
                                display.innerHTML = "";
                                btnVal = "";
                                break;
                            case "por":
                                operator = e.target.id;
                                pre = display.innerHTML;
                                display.innerHTML = "";
                                btnVal = "";
                                break;
                            case "dividido":
                                operator = e.target.id;
                                pre = display.innerHTML;
                                display.innerHTML = "";
                                btnVal = "";
                                break;
                            default:
                                break;
                        }
                    }else{
                        if(!isNaN(parseInt(e.target.id))){
                            if(display.innerHTML == 0){
                                if(decimal){
                                    display.innerHTML += btnVal;
                                }else{
                                    display.innerHTML = btnVal;
                                }
                            }else if(display.innerHTML.length != 8){                
                                display.innerHTML += btnVal;
                            }
                        }                
                    }            
                }
                
                function sumar(pre, pos){
                    display.innerHTML = parseInt(pre) + parseInt(pos);
                }
        
                function restar(pre, pos){
                    display.innerHTML = pre - pos;
                }
        
                function dividir(pre, pos){
                    display.innerHTML = pre / pos;
                }
        
                function multiplicar(pre, pos){
                    display.innerHTML = pre * pos;
                }
            }
        }    
    }
} 

calculadora.validarOperaciones();