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

// dataMap = [2,5,7,8,3,4];
// var maxNum=0;
// for(let i=0;i<dataMap.length;i++){
//     if(maxNum<dataMap[i]){
//         maxNum=dataMap[i];
//     }
// }
// console.log(maxNum);

// const max =dataMap.reduce(function(acc,curr){
//     if(acc<curr){
//         acc=curr;
//     }
//     return acc;
// },0);
// console.log(max);
//callback
//Patterns: Real Life example
// function reachedrestro(callback){
//     console.log("You reached restraunt");
//     setTimeout(callback,1000);
// }
// function TableFinding(callback){
//     console.log("Table Finding");
//     setTimeout(callback,1000);
// }
// function MenuDiscover(callback){
//     console.log("Menu Discover");
//     setTimeout(callback,1000);
// }
// function PriceCheck(callback){
//     console.log("Price Check");
//     setTimeout(callback,1000);
// }
// function StarterOrder(callback){
//     console.log("Starter Order");
//     setTimeout(callback,1000);
// }
// function maincourse(callback){
//     console.log("main course order");
//     setTimeout(callback,1000);
// }
// function dessert(callback){
//     console.log("dessert order");
//     setTimeout(callback,1000);
// }
// function payBill(){
//     console.log("bill");
// }

//? chaining of callbacks
//? reachedrestro(TableFinding(MenuDiscover(PriceCheck(StarterOrder(maincourse(dessert(payBill())))))));//gives error
//?Use arrow function 
// reachedrestro(()=>{
//     TableFinding(()=>{
//         MenuDiscover(()=>{
//             PriceCheck(()=>{
//                 StarterOrder(()=>{
//                     maincourse(()=>{
//                         dessert(()=>{
//                             payBill();
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })
//!Drawback with more callbacks in in arrow function: No readability , Debbugging in way to impossible
//!Pyramid of doom occurs (expansion of code horizontally). resolved by promises.
//!Promise

// reachedRestaurant(function(){
//     console.log("I reached Eagle Mortle");
// }).then(TableFinding()).then(MenuDiscover()).then(PriceCheck()).then(StarterOrder()).then(maincourse()).then(dessert()).then(payBill())

// const myRestaurantPromise = new Promise(resolve, reject){
//     if(1:30<time<2:30){
//         resolve("Yes i successfully reached");
//     }
//     else{
//         reject("Cant reach at time");
//     }
// }
// const gitHubData =fetch("https://api.github.com");
// console.log(gitHubData)
// setTimeout(() => {
//     console.log(gitHubData);
// }, 2000);

const cart = ["shoes","watches","bags","glasses","shirts"];
// createOrder(cart,callback){
//     console.log("ORDER CREATED");
//     orderPayment(orderid,callback){
//         console.log("ORDER PAYMENT");
//         orderSummary(orderId,callback){
//             console.log("ORDER SUMARY");

//         }
//     }
// }
function createOrder(cart){
    // console.log("ORDER CREATED");
    const myPromise = new Promise(function(resolve,reject){
        if(cart.length>0){
            resolve("12345");
            console.log("ORDER CREATED SUCCESSFULLY")
        }
        else{
            const error = new Error("ORDER FAILED");
            reject("ORDER REJECTED");
        }
    });
    return myPromise;
}
function orderPayment(orderId){
    console.log("ORDER PAYMENT SUCCESSFUL",orderId);
}
function orderSummary(orderId){
    console.log("ORDER SUMMARY CREATED");
}
function UpdateWallet(){
    console.log("WALLET UPDATED");
}
// console.log(createOrder(cart));
createOrder(cart).catch(function(err){
    console.log("Error Occured");
    console.log(err.message);
})
.then(function(orderId){
    return orderPayment(orderId);
})
.then(function(orderId){
    return orderSummary(orderId);
})
.then(function(){
    return UpdateWallet();
})

// createOrder(cart)
// .then(function orderPayment(orderId){
//     console.log("ORDER PAYMENT SUCESSFUL",orderId);
// })
// .then(function orderSummary(orderId){
//     console.log("ORDER Summary",orderId);
// })
// .then(OrderSummary(orderId))
// .then(UpdateWallet)