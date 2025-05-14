// let size = "S";

// if(size == "XL"){
//     console.log(`price is Rs. 250`);
// }else if(size === "L"){
//     console.log(`price is Rs. 200`);
// }else if(size === "M"){
//     console.log(`price is Rs. 100`);
// }else{
//     console.log(`price is Rs.50`)
// }

// let str = "atring";
// if(str[0] === "a" && str.length>3){
//     console.log("Good");
// }else{
//     console.log("Bad");
// }

// let num = 1;
// switch(num){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Sunday");
// }

// let num = 12;
// if(num%10 === 0){
//     console.log("Good");
// }else{
//     console.log("Bad");
// }
// let names = prompt("Name:");
// let age = prompt("Age:");
// alert(names + " is " + age + " years old.")

// let n1 = 232342342;
// let n2 = 34321;
// let n3 = 2323423;
// if(n1%10 === n2%10){
//     console.log("Yes");
// }else{
//     console.log("No");
// }
// if(n1>n2 && n1>n3){
//     console.log("N1");
// }else if(n2>n3){
//     console.log("N2");
// }else{
//     console.log("N3");
// }
// let a = 5;
// switch(a){
//     case 1:
//         console.log("J,F,M");
//         break;
//     case 2:
//         console.log("A,M.J");
//         break;
//     case 3:
//         console.log("J,A,S");
//         break;
//     case 4:
//         console.log("O,N,C");
//         break;
//     default:
//         console.log("Wrong");
// }

// let sreg = "akklsdr";
// if((sreg[0] === 'A' || sreg[0] == 'a') && sreg.length>5 ){
//     console.log("Golden");
// }else{
//     console.log("Not Golden");
// }


// let str = "ApnaCollege";
// console.log(str.slice(4).replace("l","t"));
// let arr = [7,6,5,4,3,2,1];
// let n = 5
// console.log(arr.slice(-n));


// let str = "";
// if(str.length == 0){
//     console.log("Blank");
// }else{
//     console.log("Not");
// }


// str = "AbCd";
// n = 1;
// if(str[n].toLowerCase() == str[n]){
//     console.log("Lower");
// }else{
//     console.log("Upper");
// }

// console.log(arr.includes(9));

// let fav = "Ava";
// let guess = prompt();
// while(guess != fav)

// let todo = [];

// while(true){
//     let action = prompt("Please enter action");
//     if(action == 'add'){
//         let task = prompt();
//         todo.push(task);
//     }else if(action == 'delete'){
//         let task = prompt();
//         todo.splice(task,1);
//     }else{
//         for(task of todo){
//             console.log(task);
//         }
//     }
    
//     if(action == 'quit'){
//         break;
//     }
// }

// let arr = [1,2,3,4,5,2,3,5,2];
// let num = 2;
// for(i = 0;i<arr.length;i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// let num2 = 2354234;
// console.log(num2.toString().length);

// let num3 = 287152;
// let sum = 0;
// while(num3 > 0){
//     sum = sum + num3%10;
//     num3 = Math.floor(num3/10);
// }
// console.log(sum);

// let factnum = 7;
// let fact = 1;
// for(i = 1;i<=factnum;i++){
//     fact = fact * i;
// }
// console.log(fact);

// let x = prompt();
// let random = Math.floor(Math.random() * x) + 1;
// let guess = prompt();

// while(true){
//     if(guess == "quit"){
//         break;
//     }
//     if(guess == x){
//         console.log("You guess it Right");
//         break;
//     }else{
//         console.log("You guess it Wrong");
//     }
// }


// console.log(Math.floor(Math.random() * 6) + 1);

// const car = {
//     name: "bolero",
//     Model: "b6",
//     color: "white"
// }
// console.log(car.name);

// const person = {
//     name: "inder",
//     age: 20,
//     city: "L.A"
// }
// person.city = "New York";
// person.country = "Unites States";
// console.log(person);


// let arr = [1,2,3,4,5,6];
// const func = function(arr,x){
//     let app = [];
//     for(i = 0;i<arr.length;i++){
//         if(arr[i] > x){
//             app.push(arr[i]);
//         }
//     }
//     return app;
// }

// console.log(func(arr,3));


// let str = "abcdabcdefgggh";

// const unique = function(str){
//     let ans = "";
//     for(let char of str){
//         if(!(ans.includes(char))){
//             ans = ans + char;
//         }
//     }
//     return ans;
// }

// console.log(unique(str));


// let country = ["Australia", "Germany", "United States of America"];

// const larcon = function(arr){
//     let max = 0;
//     for(i = 0;i<arr.length;i++){
//         if(arr[i].length > arr[max].length){
//             max = i;
//         }
//     }
//     return arr[max];
// }

// console.log(larcon(country));


// let str1 = "sgfewerwrerwrigjkrer";
// const vovle = function(arr){
//     let count = 0;
//     for(i = 0;i<arr.length;i++){
//         if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vovle(str1));

// let start = 0;
// let end = 3;
// const rando = function(start,end){
//     return Math.floor(Math.random() * (end - start + 1)) + start;
// }
// console.log(rando(start,end));



// let arr = [1,2,3,4];
// let arrAverage = function(array){
//     let sum = 0;
//     for(a of array){
//         sum += a;
//     }
//     return sum/arr.length;
// }
// console.log(arrAverage(arr));


// let evo = 24;
// function isEven(n){
//     if(n%2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(evo));



// let arr = [2,2,2];
// let sqSumAvg = (arr) => {
//     let sq = arr.reduce((sqr,x) => sqr + x**2);
//     return sq/arr.length;
// }
// console.log(sqSumAvg(arr));


// let plus5 = function(arr){
//     return arr.map(num => num+5);
// }
// console.log(plus5(arr));


// let str = ["UppERCasE"];
// let upr = str.map((char) => (char.toUpperCase()));
// console.log(upr);


// let obj1 = {
//     name: "Inderjit"
// };

// let obj2 = {
//     age: 22
// }

// let merge = {...obj1,...obj2};
// console.log(merge);

