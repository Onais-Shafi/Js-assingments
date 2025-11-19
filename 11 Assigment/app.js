let firstramdan = new Date("17-feb-2026")

let currentdate = new Date()

let diffrences = firstramdan - currentdate;

let day = Math.floor(diffrences / (1000 * 60 * 60 *24))

let weeks = Math.floor( day / 7 )

let reminder =  day % 7

let month = Math.floor(day / 30) 

let monthreminder = day % 30

console.log("remaining days for ramadan");

console.log("Reaming days-->",day)
console.log( "Reaming weeks",weeks);
console.log("reaming month",month);



