let marks = +prompt();
/* 
marks  90>
       A grade

marks in between  80  &  89
       B grade

marks in between 70 & 79
       C grade

marks in between 60 & 69
       D grade

marks is lessthan 60
       F grade
       
marks is less than 35
       failed
*/


if (marks >= 90 && marks <= 100) {
    console.log('A Grade');
}
else if (marks >= 80 && marks <= 89) {
    console.log("B Grade");
}


else {
    console.log("please enter right values");
}      