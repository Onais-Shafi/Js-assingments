// empty array

// question 1 

let empty = [[],[]]

console.log("empty array",empty);


// multideminsion array
// question 2

let multiarry = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

console.log("multidemsion arry-->", multiarry);

// numeric counting
// question 3

for (let i = 0; i < 10; i++)

console.log(i);

// number and length 
// question 4 

let table =prompt("enter your table number")
// let length =prompt ("enter the length")

for (let i = 1; i < 11; i++)


console.log(table ,"X",i,"=",table*i);


// question 5 

// fruit array loop

let fruit = ["mango","apple","bannana","stawbarry","orange"]


for (let i = 0; i<5 ;i++)

    console.log("Element at index", i ,"is", fruit[i]);


// question 6

// counting reverse

//part a

for (let i=1; i < 11; i++)
   
  console.log(i);
  
  // part b
    
for (let i=10; i > 0; i--)
   
  console.log(i);


  // question 7 

  // food item

  let item =["cake ","applepai","cookie","pattis","chips"]

  let found =prompt("Enter your food item")
   if (item.includes(found)){
    console.log(found ,"is avaliable")
   } else{
    console.log("not avaliable");
    
   }
  

   // question 8 
    
   for (let i= 5; i<105; i+= 5){

    console.log(i);
    
   }


   // question 9 

   // the sammlest number 

   let smallnumber =[24,53,78,91,12]

   console.log("The smallest number",smallnumber.splice(4));


      // question 10 

   // the sammlest number 

   let largestnumber =[24,53,78,91,12]

   console.log("The smallest number",largestnumber.slice(3,4));
   



