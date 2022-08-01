function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function increment(n){
    n++;
    return n;
}

function decrement(n){
    n--;
    return n;
}

function makeInt(n){
    return parseInt(n, 10);
}

function preserveDecimal(n){
    return parseFloat(n);
}

add(2,3)
subtract(2,3)
multiply(2,3)
divide(2,3)
increment(7)
decrement(8)
console.log(makeInt('Hello'))
console.log(preserveDecimal("2.222"))