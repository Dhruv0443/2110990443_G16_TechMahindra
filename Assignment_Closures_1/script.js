function Counter(){
    var count=1;
    this.increment = function(){
        count++;
        return count;    
    }
    this.decrement = function(){
        count--;
        return count;  
    }
    this.getCount = function(){
        return count;
    }
}

var counter1 = new Counter();
console.log("Increment = "+counter1.increment());
console.log("GetCount = "+counter1.getCount());
console.log("Decrement = "+counter1.decrement());



//Fibonaci

function memoizedFibonacci(){
    var cache={};
    this.findfibonaci=function(n){
        if(n<=1){
            return n;
        }
        //if allready stored in cache
        if(cache[n]){
            return cache[n];
        }
        cache[n]=this.findfibonaci(n-1)+this.findfibonaci(n-2);
        return cache[n];
    };
}

var fibo = new memoizedFibonacci();
console.log("Number at positon 5 in fiobnaci = "+fibo.findfibonaci(5));
console.log("Number at positon 3 in fiobnaci = "+fibo.findfibonaci(3));
console.log("Number at positon 5 in fiobnaci = "+fibo.findfibonaci(5));
