// Membuat Object
const user = {};
const prodcuts = {name:'Sepatu', price:23000} // name=key sepatu=value

//Mengakses Properti di Object
const bro ={
    name: 'Dicoding', //All of this three rows are properties
    'lastName': 'Indonesia',
    age : 9,
};

//Mengakses menggunakan Dot
console.log(bro.name);

//Mengakses menggunakan Square Bracket
console.log(bro['last name']);

//Mengakses menggunakan obejct destructuring
const {name, lastName} = bro;
console.log(name,lastName)
