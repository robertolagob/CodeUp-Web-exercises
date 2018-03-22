"use strict";

(function () {


    function validatingOdd(imput) {

       return (!isNaN(imput)&&((imput%2)!==0));


    }


    function skippingNumber(imputNumber) {

        if(validatingOdd(imputNumber))
        {
        for (var i=1;i<=50;i++){
            if(i===imputNumber){
            console.log("we are skipping the number "+imputNumber);
            continue;
            }
            else if ((i%2)!==0){
                console.log(i);
            }
        }
        }
        else {
            console.log("your number does not meet the required prameters");
        }

    }




    skippingNumber(15);





})()