

"use strict";


console.log("Hello from external JavaScript");



alert("welcome to my website")

var favorite =prompt("whats your favorite color?")

alert("great ... "+favorite+ " is my favourite color too!!")



alert("welcome to the rental system ");


var firstname=prompt("type the movie's name");
var firstime=Number(prompt("Hww many days "));

var secondtname=prompt("type the movie's name");
var secondtime=Number(prompt("Hww many days "));

var thirdtname=(prompt("type the movie's name"));
var thirdtime=Number(prompt("Hww many days "));

var total=(firstime+secondtime+thirdtime)*3;


alert("your total amount is " + total+" dollars. \n You had rented:\n 1. " + firstname+"\n 2. "+secondtname+"\n 3. "+thirdtname);




alert("welcome to my pay stub system")


var googlepayent=parseFloat(prompt("enter hour payment for Google"));
var googletime=parseFloat(prompt("How many days did you worked"));

var amazonpayment=parseFloat(prompt("enter hour payment for Amazon"));
var amazontime=parseFloat(prompt("How many days did you worked"));

var facebookpayment=parseFloat(prompt("enter hour payment for Facebook"));
var facebooktime=parseFloat(prompt("How many days did you worked"));


var totalsalary=(googletime*googlepayent)+(facebooktime*facebookpayment)+(amazonpayment*amazontime);


 alert("the total salary amount is: "+ totalsalary);



 alert("welcome to the enrollment board");

var  isClassFull=(prompt("is the class full?")=="yes");

var  schedduleconflict=(prompt("does the schedule conflict with your school schedule")=="yes");

var canbeenrolled= !isClassFull && !schedduleconflict;


alert("can be enrolled? " + canbeenrolled);







