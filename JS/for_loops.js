"use strict";

(function () {


    //showMultiplicationTable

    function showMultiplicationTable(number) {
        for(var i=1;i<=10;i++){
            console.log(number+"*"+i+"="+(number*i));
        }

    }

    showMultiplicationTable(7);



    // Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
    // and output to the console whether each number is odd or even.

    //function to create a random number passing a base top and a range
    function aleatorio(start, range) {
        return  Math.floor(Math.random() * start) + range;

    }


    //function to determine when a number is odd (or not)
    function isOdd(numero) {
        var odd= (numero%2)!=(0);
        return odd;

    }


    function isOddOrEven(tandem) {

        for (var i=1;i<=tandem;i++)
        {
            var numero1=aleatorio(180,20);
            if (isOdd(numero1)){
                console.log("the number "+numero1+" is Odd");
            }
            else {
                console.log("the number "+numero1+" is Even");
            }
        }


    }

    console.log("this is from a for cycle generating a random numbers to say if tey are Even or Odd");

    isOddOrEven(10);




    //nesting cycles for creating a half numbers pyramid


    function nesting(numero) {

       for(var i=1;i<numero;i++)
       {
           var cadena=i.toString();
           for (var j=1;j<=i-1;j++)
           {

                cadena+=(i).toString();
           }

           console.log(cadena);

       }

    }


    nesting(10);



    //creating a decreasing for loop with 5 step


    function decrement(tramo) {

        for(var i=tramo;i>0;i=i-5)
        {
            console.log(i);
        }

    }

    decrement(100);



})()



