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

let language = "French";
let greeting = "Selamat Pagi"

if (language === "English") {
    greeting = "Good Morning!";
} else if (language === "French") {
    greeting = "Bonjour!"
} else if (language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);


// simple if else
// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)


// switch case

let languag = "French";
let greetin = null;

switch (languag) {
    case "English":
        greetin = "Good Morning!";
        break;
    case "French":
        greetin = "Bonjour!";
        break;
    case "Japanese":
        greetin = "Ohayou Gozaimasu!";
        break;
    default:
        greetin = "Selamat Pagi!";
}

console.log(greetin);

// LOOP

for (let i = 0; i < 5; i++) {
    console.log(i);
}

/**
 * TODO:
 * Buatlah variabel firstName, lastName, age, isMarried dengan ketentuan:
 *  - firstName: bertipe data string, dengan nilai nama depan Anda.
 *  - lastName: bertipe data string, dengan nilai nama belakang Anda.
 *  - age: bertipe data number, dengan nilai umur Anda.
 *  - isMarried: bertipe data boolean, dengan bebas Anda tentukan.
 */

// TODO

let firstName = "john";
let lastName = "doe";
let age = 33;
let isMarried = false;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isMarried);

/**
 * Jangan hapus kode di bawah ini
 */

module.exports = {
    firstName, lastName, age, isMarried,
};


/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// TODO
let evenNumber = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        evenNumber.push(i);
    }
}

console.log(evenNumber);

/**
 * Jangan hapus kode di bawah ini
 */

// module.exports = evenNumber;
