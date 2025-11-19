// question 1 

let currentdate = new Date()

console.log(currentdate);


// question 2 

let currentmonth = ["jan","feb","march" ,"april","may","june","july","aug","sep","oct","november","dec"]

let month = new Date().getMonth()

let currentmonths = currentmonth[month]

alert("current month is " +  currentmonths);

// question 3 

let currentday = ["sunday","monday","tuesday","wednesday","thursday","saturday",]

let day = new Date().getDay()

let currentdays = currentday[day]

console.log("current month is " +    currentdays);

// question no 4

let today = new Date().getDate()

if (today === 0 || today ===6)  {
    console.log("its fun day");
    
}else{
    console.log("its not fun day" );
    
}


// question no 5 // bithday


let age = prompt("Enter your age")

let year = new Date().getFullYear()

let birthyear = age - year

console.log("birth year -->",birthyear);

//  question no 6 

let currenttime = new Date().getHours()

if (currenttime > 12) {
    console.log("its am");
    
}else{
     console.log("its pm");
}

 





