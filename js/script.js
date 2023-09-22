"use strict";


let nbr1=5;
let nbr2=8;
let nbr3="5";

if(nbr1==nbr3){//double egal egalité simple(valeur)
    alert("Egalité");
}

if(nbr1===nbr3){//triple egal egalite stricte (valeur + type)
    alert("Egalité Bis");
}else{
    alert("je suis different");
}

if(nbr1 == 8){
    alert("je suis le 8");
}else if(nbr1==4){
    alert("je suis le chiffre 4")
}else {
    alert("je suis un autre chiffre");
}

//et &&
if(nbr1==5 && nbr2 ==8){
    alert("je suis trop fort");
}else{
    alert('NOOB');
}

// OU ||
if(nbr1==5 || nbr2 ==5){
    alert("je suis trop fort ou l autre ");
}else{
    alert('NOOB');
}


//SWITCH

switch(nbr1){
    case 1:
        alert("je suis le chiffre 1");
        break;
    case 2:
        alert("je suis le chiffre 2");
        break;
    case 3:
        alert("je suis le chiffre 3");
        break;
    case 4:
        alert("je suis le chiffre 4");
        break;
    case 5:
        alert("je suis le chiffre 5");
        break;
    default:
        alert('je suis un autre chiffre');
}










