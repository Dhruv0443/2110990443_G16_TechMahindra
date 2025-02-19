// sum of array 
const arr = [5,7,3,1,8];

// var sumOFArr=0;
// for(let i=0;i<arr.length;i++){
//     sumOFArr+=arr[i];
// }
// console.log(sumOFArr);

// const ans = arr.reduce(function(acc,curr){
//    acc =  acc+curr;
//     return acc;
// },0);
// console.log(ans);
const users=[
    {firstName:"Pratyush",lastName:"Raj",age:"25"},
    {firstName:"Dhruv",lastName:"Jain",age:"21"},
    {firstName:"Daksh",lastName:"Singh",age:"22"},
    {firstName:"Piyush",lastName:"Saini",age:"25"},
    {firstName:"Dev",lastName:"Mittal",age:"26"}    
]

let ans = users.reduce(function(acc,curr){
    if (!acc[curr.age]) {
        acc[curr.age]=1;
    } 
    else {
        acc[curr.age]++;
    }
    return acc;
},{});
console.log(ans);

dataMap = [2,5,7,8,3,4];
var maxNum=0;
for(let i=0;i<dataMap.length;i++){
    if(maxNum<dataMap[i]){
        maxNum=dataMap[i];
    }
}
console.log(maxNum);

const max =dataMap.reduce(function(acc,curr){
    if(acc<curr){
        acc=curr;
    }
    return acc;
},0);
console.log(max);