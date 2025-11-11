// Question 1
 let a = document.writeln("<h1>","Question no 1","</h1>")

let city = prompt("Enter your country")
let karachi ="karachi"


if (karachi == city){
    document.writeln("Welcome to the city of light" + " "+"Karachi"  )
}
else {
    document.writeln("Welcome to ",city)
}

// Question 2
 let b = document.writeln("<h1>","Question no 2","</h1>")

 
let gender = prompt ("Enter your gender")

if(gender=="male"){
    document.writeln("Good Morning sir")
}
else
{
    document.writeln("Good Morning maam")
}

// Question 3
 let c = document.writeln("<h1>","Question no 3","</h1>")

let color=prompt ("Select Signal Color")

let red ="red"
let yellow ="yellow"
let green ="green"

if (color==red){
    document.writeln("Rouk jhao")
}else if (color==yellow){
    document.writeln("Ready To Move")
}else{
    document.writeln("Move Now")
}



// Question 4
 let d = document.writeln("<h1>","Question no 4","</h1>")

let fuel ="0.25"
let letter = "0.20"

if (fuel==letter){
    document.writeln("continue")
}
else{
    document.writeln("Please refill the fuel in your cars")
}


// Question 5
 let e = document.writeln("<h1>","Question no 5","</h1>")

let totalmark ="300"
let obtainedmark ="210"
document.writeln( "totalmark ="+ " "+totalmark +"<br></br>")
document.writeln( "obtainedmark ="+" "+obtainedmark+"<br></br>")

if (totalmark = obtainedmark){
   document.writeln("Percentage =" +" "+totalmark*obtainedmark/1000+"<br></br>")
   document.writeln("Grade = B")
}

// Question 6
 let f = document.writeln("<h1>","Question no 6","</h1>")

 let secret =prompt ("Choose a one number 1 to 10")
let num = "5"

if (secret==num){
    document.writeln("Bingo Correct Answer")
}
else if (secret == 4,6 ){
    document.writeln("Close to the enogh answer")
}
else{
 document.writeln("Try again")
}

// Question 7
 let g = document.writeln("<h1>","Question no 7","</h1>")

//  let p =prompt("Choose even and odd number")
//  let even = "2,4,6,8,10"
//  let odd  ="1,3,5,7,9"

//  if (p ==2) {
//     document.writeln("You Select the odd Number")
//  }
//  else {
//     document.writeln("You Select the even Number")
//  }

let user=prompt("Choose even and odd number")

if (user %2 == 0) {
    document.writeln("This is even number")
}
else{
     document.writeln("This is odd number")
}


// Question 8

 let h = document.writeln("<h1>","Question no 8","</h1>")
let users=prompt ("Enter your number")


 if (user %3 == 0) {
    document.writeln(users/3+"divided by 3" )
 }
else
{
    document.writeln("wrong" )
}

// Question 9

 let i = document.writeln("<h1>","Question no 9","</h1>")

 let t = "40"

 if (t=>40) {
    document.writeln("Weather is hot")
 }
 else if (t==t) {
     document.writeln("Weather is normal")
 }
 else{
     document.writeln("Weather is cold")
 }
