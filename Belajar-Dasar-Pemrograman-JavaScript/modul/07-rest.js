// Rest operator
// Berfungsi untuk menangani ketika suatu function ingin menerapkan banyak parameter
// Mempermudah menerapkan konsep clean code

function myFunc(...manyMoreArgs){
    console.log('manyMoreArgs',manyMoreArgs);
}

myFunc('one','two','three');

function myFunc2(number, ...manyMoreArgs){
    console.log('number',number);
    console.log('manyMoreArgs',manyMoreArgs);
}

myFunc2('one','two','three'); //One akan terpisah karena masih terhitung

// Method Array Length
function myFunc3(...manyMoreArgs) {
    console.log(manyMoreArgs.length);
    console.log('manyMoreArgs', manyMoreArgs);
  }
  
  myFunc3('one', 'two', 'three');

// Destructuring
const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];
const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);