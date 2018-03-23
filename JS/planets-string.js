(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     */
    planetsArray=planetsString.split('|');


    /** console.log planetsArray to check your work
     */

    console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    var newastringfromarray= planetsArray.join('<br>');

    console.log("creating a string again with br label");
    console.log(newastringfromarray);




     /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


// this is almost perfect, bit i got an extra item at the begining and at the end of the list;


     // var temporalarray=planetsArray.join("</li><li>");
     //
     // console.log("we susceed?");
     // console.log(temporalarray);


    function addinglabel(item,index,array) {


        if(index===0){
            console.log("<ul>"+"<li>"+item+"</li>");
        }
        else if (index===array.length-1)
        {
            console.log("<li>"+item+"</li>"+"</ul>");
        }
        else if ((index!==0)&&(index!==(array.length-1))){
            console.log("<li>"+item+"</li>");
        }

    }



    var nuevoplaneta=planetsArray.forEach(addinglabel);


    console.log(nuevoplaneta);


})();
