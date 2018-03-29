"use strict";




    var classRoom={

        students:[],
        cont:0,
        max:5,



    };



    classRoom.creaStudent=function(name,age, year, average) {

        var student=new Object();
        student.name=name;
        student.age=age;
        student.year=year;
        student.average=average;

        return student;

    }




    var wantTo=confirm("do you wanna add other student?");



    classRoom.AddStudent=function (alumno) {

        classRoom.students.push(alumno);

    }









    console.log(classRoom.students);



    do {
        var nombre = prompt("please enter a name");
        var edad = prompt("please enter your age");
        var anno = prompt("please enter the current year at school");
        var average = prompt("please enter your average");

        var estudiante = classRoom.creaStudent(nombre, edad, anno, average);
        classRoom.AddStudent(estudiante);
        console.log(classRoom.students);
        var wantTo = confirm("do you wanna add other student?");

    }
    while (wantTo);












