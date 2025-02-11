// Important Case of CLOSURES-----------its main cause is data hiding and encapsulation

// var count=0;

// function increment(){
//     count++;
// }
// increment();
// increment();
// increment();
// console.log(count);


// function protect(){
//     var count=0;

//     function increment(){
//         count++;
//     }
//     increment();
//     increment();
//     increment();
//     console.log(count);

// }
// protect();

// HOF-Higher Order Function

// function counter(){
//     var count=0;
//     return function increment(){
//         count++;
//         console.log(count);
//     }
// }

// var counter1 = counter();
// counter1();
// counter1();
// counter1();

//Do increment and decrement with this keyword

function Counter(){
    var count=0;
    this.increment = function(){
        count++;
        console.log(count);
    }
    this.decrement = function(){
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.decrement();