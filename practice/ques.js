// 1. Larger of 2 numbers ####################################################
// SOL 1 - 
// const a = 5, b = 5

// if (a > b) {
//     console.log(a);;
// } else if (b > a) {
//     console.log(b);
// }
// else console.log("Equal!!")
//--------------------------------------
// SOL 2 - 
// var num1 = 67, num2 = 237;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10)) 
//   { 
//   console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10)) 
//   {
//   console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }

// 2. sign of product of 3 numbers ########################################################

// let num1 = -2
// let num2 = 0
// let num3 = 23

// if (num1 * num2 * num3 < 0) {
//     console.log("The sign of product is -");
// } else if (num1 * num2 * num3 > 0) {
//     console.log("The sign of product is +");
// } else {
//     console.log("The product is zero");
// }

// 3. Sort numbers from highest to lowest ###################################################

// let num1 = 235, num2 = -51, num3 = 202

// if (num1 > num2 && num1 > num3) {
//     if(num2 > num3) {
//         console.log(num1 + "," + num2 + "," + num3);
//     }
//     else{
//         console.log(num1 + "," + num3 + "," + num2);
//     }
// }

// if (num2 > num3 && num2 > num1) {
//     if(num3 > num1) {
//         console.log(num2 + "," + num3 + "," + num1);
//     }
//     else{
//         console.log(num2 + "," + num1 + "," + num3);
//     }
// }

// if (num3 > num2 && num3 > num1) {
//     if(num2 > num1) {
//         console.log(num3 + "," + num2 + "," + num1);
//     }
//     else{
//         console.log(num3 + "," + num1 + "," + num2);
//     }
// }

// 4. Largest among 5 numbers ####################################################
//  function getLargest(a, b, c, d, e) {

//     let numArr = [b,c,d,e]
//     let largest = a
 

//  for (let i of numArr) {
//     if (i > largest) {
//         largest = i
//     }
// }
// return largest
// }

// console.log(getLargest(9,1212,29,2,233));

// 5. Find even and odd numbers from 0 to 15 #############################################

// let numArr = []
// let oddArr = []
// let evenArr = []
// for(let i = 0; i < 16; i++) {
//      numArr.push(i)
// }
// for(let j of numArr) {
//     if(j % 2 !== 0) {
//         oddArr.push(j)
//     }
//     else {
//         evenArr.push(j)
//     }
// }

// console.log("Even numbers are " + evenArr + "\n" + "Odd numbers are " + oddArr);

// 6. ################ FIND A GIVEN LETTER IN A WORD ############################## 
// function letterFinder (word, match){
//     for(let i = 0; i < word.length; i++){
//         if(word[i] == match){
//             console.log('Found the', match, 'at', i)
//         }
//         else{
//             console.log('---No match found at', i)
//         }
//     }
// }

// letterFinder("zest", "z")