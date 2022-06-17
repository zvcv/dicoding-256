console.log("uyeah");

// this is a comment

// var sering dianggap menghasilkan banyak bug

// Pada versi ECMAScript 2015 (ES6) dikenalkan deklarasi variabel dengan let dan const untuk menggantikan var yang dinilai kontroversial dan rawan menimbulkan bug

let z;
z = 'ngannou' + ' ' + 'ugimba';

console.log(z);

const x = 100;
console.log(x);
// x = 200;
// console.log(x)

/* TypeError: Assignment to constant variable. */

console.log(typeof (x));

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda