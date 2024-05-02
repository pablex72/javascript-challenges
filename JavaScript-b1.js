var side1 = 5;
var side2 = 6;
var side3 = 7;

//calculate the semiperimeter
var s = (side1 + side2 + side3)/2;

//using formula
var area = Math.sqrt(s * ((s-side1) * (s-side2) * (s-side3)));

console.log(area);

// pro2
// Write a JavaScript program to get the current date.
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

//add leading zero if the day is less than 10
if(dd < 10){
    dd = '0' + dd;
}
if(mm < 10){
    mm =  '0' + mm
}    

today = mm + '/' + dd + '/' + yyyy;
console.log(today)

// es6
let today2 = new Date();
let dd2 = today2.getDate();

let mm2 = today2.getMonth() + 1;
const yyyy2 = today2.getFullYear();

if(dd2 < 10){
    dd2 = `0${dd2}`
}

if(mm2 < 10){
    mm2 = `0${mm2}`
}

today2 = `${mm2}/${dd2}/${yyyy2}`;
console.log(today2)

