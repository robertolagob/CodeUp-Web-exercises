"use strict";

(function () {

      function dupla(control) {

          control=1;
          while (control<65536){
              control*=2;
              console.log(control);

          }

      }

      dupla();



    // 5 cones sold...  // if there are enough cones
    //     Cannot sell you 6 cones I only have 3...  // If there are not enough cones
    //     Yay! I sold them all! // If there are no more cones


             var gelatos= Math.floor(Math.random() * 50) + 50;


           //to generate the number for the client cones
             function client() {
                return  Math.floor(Math.random() * 5) + 1 ;

             }
    
       function icecream(totalCones) {
           do{
               var clientCones=client() ;
               totalCones-=clientCones;
               if(totalCones>0) {
                   alert(clientCones + " sold");
               }
               else if (totalCones===0) {
                   alert("Yay! I sold them all!");
               }
               else if(totalCones<clientCones) {
                   alert("cannot sell you "+clientCones+" I only have "+totalCones)
               }

           }
               while (totalCones>0);

        }



       icecream(gelatos);


})()