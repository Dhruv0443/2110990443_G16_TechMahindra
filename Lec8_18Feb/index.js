/*function x(){
    console.log("I am X");
}
function y(args){
    console.log("I am Y"); //Y is a higher oder function
    args();
}
y(x);*/   //x is a callback function


//////////HIGHER ORDER FUNCTION/////////////



/*function doubleOfData(data){
    doubleOfDataArr=[];
    for(let i=0;i<=data.length;i++){
        doubleOfDataArr.push(data[i]*2);
    }
}
console.log(doubleOfData(data));*/


/*data=[2,4,6,8,10];
const calculateDoubleData= function(data){
    var output=[];
    for(let i=0;i<data.length;i++){
        output.push(data[i]*2);
    }
    return output;
}

const calculateHalfData=function(data){
    var output=[];
    for(let i=0;i<data.length;i++){
        output.push(data[i]/2);
    }
    return output;

}

const calculateAddTen= function(data){
    const output=[];
    for(let i=0;i<data.length;i++){
        output.push(data[i]+10);
    }
    return output;
}

console.log(calculateDoubleData(data));
console.log(calculateHalfData(data));
console.log(calculateAddTen(data));*/

// data = [2,4,6,8,10]

// var insideData=10;

// function DoubleData(data){
//     var ans=insideData*2;
//     return ans;

// }
// function HalfData(data){
//     var ans=insideData/2;
//     return ans;

// }
// function AddTen(data){
//     var ans=insideData+10;
//     return ans;

// }
// const calculateData=function(data,callback){
//     console.log("we are inside calculateData");
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(callback(data[i]));
//     }
//     return output;
// }

//Polyfill of Map feature of js;
//By using Protype

// Array.prototype.mapp =function(logic){
//     var output=[];
//     for(let i=0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }
// console.log(data.mapp(DoubleData));

//console.log(data.map(DoubleData));
/*console.log(calculateData(data,DoubleData));
console.log(calculateData(data,HalfData));
console.log(calculateData(data,AddTen));*/

// data = [2,9,16,92,71];
// function daimeter(radius){
//     return radius*2;
// }
// function circumference(radius){
//     return 2*3.14*radius;
// }
// function area(radius){
//     return 3.14*radius*radius;
// }
// console.log(data.map(daimeter));
// console.log(data.map(circumference));
// console.log(data.map(area));

// data.map((radius)=>{
//     radius*2;
// })

data =[2,4,6,3,7];
//using function 
const oddOutput = function odd(data){
    var output=[];
    for(let i=0;i<data.length;i++){
        if(data[i]%2!=0){
            output.push(data[i]);
        }
    }
    return output;
}
console.log(oddOutput(data));
//using prototype
function oddNum(num){
    if(num%2!=0){
        return num;
    }
}

Array.prototype.mapp=function(logic){
    var output=[];
    for(let i=0;i<this.length;i++){
        if(this[i]%2!=0){
            output.push(logic(this[i]));
        }
    }
    return output;
}
console.log(data.mapp(oddNum));

//using filter
console.log(data.filter((num)=>{
    return num%2!=0;
}));

const users=[
    {firstName:"Pratyush",lastName:"Raj",age:"25"},
    {firstName:"Dhruv",lastName:"Jain",age:"21"},
    {firstName:"Daksh",lastName:"Singh",age:"22"},
    {firstName:"Piyush",lastName:"Saini",age:"20"},
    {firstName:"Dev",lastName:"Mittal",age:"26"}    
]

const FullName = users.map((user)=>{
    return user.firstName+" "+user.lastName;
})
//filter age above 24
const ageabove = users.filter((user)=>{user.age>20}).map((user)=>{user.firstName+" "+user.lastName;});
console.log(FullName);
console.log(ageabove);