// question no 1

function date(){
let currentdate = new Date()
console.log(currentdate);
}

date()


// question no 2

function names() {
    let firstname = "Onais"
    let lastname ="Shafi"
    console.log(firstname,lastname);
    
}


names()


// question no 3

function sum(n1,n2) {
    
    console.log(n1,n2);
    
    return   
    
}
sum (11,8)

// question no 4


function calculater(num1,num2,operator) {
    
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "*") return num1 * num2;
    if (operator === "/") return num1 / num2;
     console.log(operator);
     

}

console.log(calculater(7,5,"*"));


// question no 5 

function square (n) {
   
    return n*n
    
}

console.log(square(12));


// question no 6

function fractional(n){
    let result = 1
    for (let i = 1 ; i <= n ; i ++){
        result *= i
    }
    return result
}
console.log(fractional(4));


// question no 7 

function counting() {
    for (let i = 5; i <16; i++) {
        console.log(i);
        
        
    }
    
}
counting()

