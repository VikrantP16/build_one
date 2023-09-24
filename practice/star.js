//*********            STAR PATTERNS         ************
// 1. Half triangle -
// let chr="";
// let n = 5;
// for (let i = 0 ; i <= n ; i ++) {
//     for(let j = 0; j < i; j++) {
//         chr += "* ";
//     }
//     chr += "\n";
// }
// console.log(chr);

// 2. Inverted half traingle -
// let chr = "";
// let n = 5;
// console.log("\n");
// for (i = 0; i <= n; i++) {
//     for (j = 0; j < n - i; j++) {
//         chr += "* ";
//     }
//     chr += "\n"
// }
// console.log(chr);

// 3. Rectangle Pattern 
// let chr = "";
// let n = 5;

// for(let i = 0; i <= n; i++){
//     for(let j = 0; j < n; j++) {
//         chr += "*"
//     }
//     chr += "\n"
// }
// console.log(chr);

// 4. Hollow Rectangle Pattern 
// let chr = "";
// let n = 5;

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (i === 0 || i === n - 1) {
//             chr += "*";
//         }
//         else { 
//             if (j === 0 || j === n - 1) {
//             chr += "*";
//         }
//         else {
//             chr += " ";
//         }
//     }
// }
//     chr += "\n";
// }
// console.log(chr);

// 5. Right Half traingle

let chr = "";
let n = 5;

for (let i = 1; i <= n; i++) {
    for (let j = n; j > 0; j--) {
        chr += "*"
    }
    chr += "\n"
}
console.log(chr);