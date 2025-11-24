// question no 1

function frnction(a, b) {
    let value = 1

    for (let i = 1; i <= b; i++) {
        value *= a
    }

    return value

}

console.log("Answer no 1", frnction(3, 4));

// question no 2

function leapyear(year) {

    return (year % 4 == 0) && (year % 100 == 0) || (year % 400 == 0)

}

console.log("Answer no 2",leapyear());

// question no 3 


function index(str, char) {

    for (let i = 0; i < str.length; i++) {

        if (str[i] == char) {
            return i

        }

    }

    return -1
}

console.log(index("Answer no 3","hello", "o"));


// question no 4 

function notes(hundred) {
    let amount = hundred * 100
   
    let n500 = Math.floor(amount / 500)
    amount = amount % 500
    let n100 = Math.floor(amount / 100)
     amount = amount% 100
    let n10 = Math.floor(amount / 10)
    amount = amount % 10

    console.log("Answer no 4","Rs 500 ke note ",n500);
    console.log("Answer no 4","100 ke note",n100);
    console.log("Answer no 4","10 ke note",n10);

}
notes(9)


// question no 5 


function Removevovwel() {
    let senten = "Assalammualikum tu kaise hu mere users"
    let vowel = ['a','e','i','o','u']
    let result = ""
     
    for (let i = 0; i < senten.length; i++) {
    let chart = senten[i].toLowerCase()
    if(!vowel.includes(chart)){
      result+=chart
    }
        
    }
    console.log("Answer no 5",result);
    
}

Removevovwel()



