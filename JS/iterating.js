(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names=["name1","name2","name3","name4"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("the number of elements in the array is: "+names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);



    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    function printIndexedElement(arreglo) {

        if(Array.isArray(arreglo)){
            for (var i=0; i<arreglo.length;i++){

                var temp=arreglo[i];
                console.log(temp);
            }
        }
        else {

            console.log("the argument passed is not an array")
        }

    }


    printIndexedElement(names);
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    console.log("using foreach");
    names.forEach(console.log);

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     */
    //creating a general function to get a particular indexed element in a certain array
    function returnElement(arreglo, position) {
        if (Array.isArray(arreglo) && (position <= arreglo.length)) {
            return arreglo[position - 1];
        }
        else {

            console.log("your input does not meet the requirements");
        }


    }

        //first: returns the first item in the array


        console.log(returnElement(names,1));



    /** - second: returns the second item in the array
     * - last: returns the last item in the array
     */
    console.log(returnElement(names,names.length));

     /** Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

     console.log(returnElement(names,5));

})();
