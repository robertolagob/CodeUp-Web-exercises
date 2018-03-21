(function () {
//    Write a function named identity that defines one parameter and returns the argument it was called with.

    identity

function identity(parametro) {

    return parametro;

}

  var element=prompt("type your argument");
    alert(identity(element))

// Write a function named isOdd that accepts a number and returns true if the passed number is odd, otherwise false

    function isOdd(numero) {
        var odd= (numero%2)!=(0);
        return odd;

    }

    var impar=prompt("type a number");
    alert(" is odd?: "+ isOdd(impar));


//Write a function named isEven that accepts a number and returns true if the passed number is even, false otherwise

    function isEven(numero) {
        var even= (numero%2)==(0);
        return even;

    }

    var par=prompt("type a number");
    alert(" is even?: "+ isEven(par));

//Write a function named isPositive that returns true if the passed number is greater than 0

    function positive(numero) {

        var positivo=(numero>0);

        return positivo;
    }

    var mayor=prompt("type a number");
    alert(" is greater than 0?: "+ positive(mayor));


//Write a function named decrement that accepts a number and returns the number minus 1


    function decrement(numero) {

        return numero-1;

    }


    var menosUno=prompt("type a number");
    alert(" this is your number decreased in one "+ decrement(menosUno));


//Write a function named hasSpaces that accepts a string and returns true if the string contains any space characters


    function  hasSpaces(cadena) {

        return ((-1)!= cadena.indexOf(" "));

    }

    var espacio=prompt("type a string");
    alert("does you strinh has any space character? : " +hasSpaces(espacio));

//Write a function named square that accepts a number and returns the number times itself


    function  square(numero) {
        return numero*numero;

    }


    var cuadrado=prompt("type a number");
    alert("the square for your number is? : " + square(cuadrado));

//A triangle with sides a, b, and c is a right triangle iff a squared plus b squared is equal to c squared. Write a function named isRightTriangle with parameters a, b, and c that will be numbers, and that tells if the passed sides can make a right triangle (returns a boolean).


    function rightTriangle(sideA,sideB,sideC) {

        var combination1=((square(sideA)+square(sideB))==square(sideC));
        var combination2=((square(sideB)+square(sideC))==square(sideA));
        var combination3=((square(sideA)+square(sideC))==square(sideB));


        return (combination1||combination2||combination3);

    }


    var lado1=prompt("type a side one for a triangle");
    var lado2=prompt("type a side two for a triangle");
    var lado3=prompt("type a side tree for a triangle");

    alert("is the triangle right? : " + rightTriangle(lado1,lado2,lado3));


})()