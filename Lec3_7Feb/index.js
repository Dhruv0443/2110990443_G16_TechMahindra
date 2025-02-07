var a = 10;
var b= 20;
const c = 30;

var a =25;
var b = 25;


//! For loop

for(let i=0;i<=5;i++){
    console.log(i);
}
//? For each loop
arr=[1,2,3,4,5,6,7,8];
arr.array.forEach(function(element){
    console.log(element);
});

//! for in loop

for(let i in arr){
    console.log('index $(i) value $(arr[i]');
}

//? for of loop
for(let i of arr){
    console.log(i);
}

//! while loop
let i=0;
while(i<10){
    console.log(i);
    i++;
}

//!do while loop
do{
    console.log(i);
}
while(i>10){
    console.log(i);
    i++;
}

