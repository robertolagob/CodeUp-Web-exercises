"use strict";

(function () {

    //99 bottles of beer song

function BottlesOfBeer() {

}
    for(var i=99;i>0;i--)
    {
        if(i>1){
            console.log(i.toString()+" bottles of beer on the wall,"+ i.toString()+" bottles of beer. Take one down and pass it around," +(i-1).toString()+" bottles of beer on the wall.");
        }
        else if(i===1){
            console.log(i.toString()+" bottle of beer on the wall,"+ i.toString()+" bottle of beer. Take one down and pass it around," +(i-1).toString()+" bottle of beer on the wall.");
        }

    }

    BottlesOfBeer(99);



// multiples

    function multiples(number1,number2,range) {

        for (var i=1;i<=range;i++){
            if((i%number1===0)&&(!(i%number2===0)))
            {
                console.log("fizz");
                continue;

            }
            if((i%number2==0)&&!(i%number1===0)){
                console.log("buzz");
                continue;
            }
            if ((i%number2==0)&&(i%number1===0)){
                console.log("FizzBuzz");
                continue;
            }
            else {
                console.log(i);
            }
        }

    }

    multiples(3,5,20);



    //fibonacci serie


    function fibonacci(limite) {

        var a=0;
        var b=1;
        var c=a+b;

        for(var i=0;i<=limite;i++){






        }

    }


})();