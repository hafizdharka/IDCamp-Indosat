const array = [1,2];
console.log(typeof array);

//Membuat Array

// Menggunakan object constructor
const users = new Array();
const numbers = new Array(5); 

console.log(users); //belum memiliki elemen
console.log(numbers); //5 empty items

//Menggunakan sintaks Array.from
const foo = Array.from('foo');
console.log(foo); // outputnya ['f','o','o']

// Membuat dengan Array.from
const user2 = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(user2);
console.log(customer);

//Membuat array literal
const array2 = [];
const fruits = ['apple','banana','cherry',' ','grape'];

console.log(fruits);

//Mengakses element array
const myArray = [42,55,30];
console.log(myArray[1]) //Output 55 menghitung dari 0

//Manipulasi Array
const myArray2 = [1,2,3,4,5];
myArray2[1] =10;
console.log(myArray2);

//Menggunakan Push
myArray2.push(6); //menambahkan satu array bernilai 6
console.log(myArray2);

//Menghapus Elemet dan Data Array
const myArray3 = ['Android', 'Data Science', 'Web'];
delete myArray3[1]; //Data array berhasil dihapus tetapi elemennya masih ada

console.log(myArray3)

//Menghapus sepenuhnya
myArray3.splice(1,1) //menghapus index ke-1 dengan jumlah 1
console.log(myArray3)

//Shift dan Pop

const myArray4 = ['Android','Data Science','Web']
myArray4.shift();
myArray4.pop();

console.log(myArray4)

// Sort
const myArray5 = ['Web', 'Android', 'Data Science'];
myArray5.sort();
console.log(myArray5); // Output: [ 'Android', 'Data Science', 'Web' ]

const myArray6 = ['Android', 'Data Science', 'Web'];
myArray6.reverse();
console.log(myArray6); // Output: [ 'Web', 'Data Science', 'Android' ]