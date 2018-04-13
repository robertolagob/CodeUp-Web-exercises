"use strict";


//modifying the opacity of the box

    function flashDiv(caja) {

    caja.animate({opacity: '0.4'}, "slow");
    caja.animate({opacity: '1'}, "slow");
}

//array of divs
    var cajas = [$("#blue_box"), $("#yellow_box"), $("#green_box"), $("#red_box")];

//Random function to make flash the color boxes

    function aleatoryDivs(arreglo, round)
    {
        var aleatorio = [];
        var i=1;
        var id = setInterval(function () {
            var luckyNumber = Math.floor(Math.random() * 3);
            aleatorio.push(arreglo[luckyNumber].selector);
            flashDiv(arreglo[luckyNumber]);
            if (i === round) {
                clearInterval(id);
            }
            i++;
        }, 1000);
        console.log(aleatorio);
        return aleatorio;
    }

//function to capture the id on a click event on the color boxes

 // function crearJuego() {
 //
 // }

function congratsMsg(ronda) {

        var html="";
        html+="<div class='.screen'>";
        html+="<h2>"+"Great ... you made it for the round :";
        html+=ronda;
        html+="</h2>";
        html+="</div>";

    return html
}

function oopsMsg() {

    var html="";
    html+="<div class='.screen'>";
    html+="<h2>"+"Nice Try!! wanna play again? click the button";
    html+="</h2>";
    html+="</div>";

    return html
}


    var counter=1;
    var i=0;
    var cajon=document.getElementById("container");
    var masterKey;

    cajon.addEventListener("click", function (event) {
        var evento = event || window.event;
        console.log(evento.target.id);
        evento.stopPropagation();
        if("#"+evento.target.id==(masterKey[i])) {
            i ++ ;
            if(i==counter)
                {
                    counter++;
                    console.log(counter);
                    i=0;
                    masterKey=[];
                    masterKey = aleatoryDivs(cajas, counter);
                    $(".screen").html(congratsMsg(counter-1));
                }
            }
        else {
            masterKey=[];
            counter=1;
            i=0;
            $(".screen").html(oopsMsg);
        }
    });

    $("#play").click(function () {

        masterKey = aleatoryDivs(cajas, counter);


    });







    







