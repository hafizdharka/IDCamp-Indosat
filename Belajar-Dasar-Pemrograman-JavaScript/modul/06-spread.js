
// Pada Object
const obj1 = {name:'Dicoding'};
const obj2 = {lastname:'Indonesia', address:'Jl. Batik Kumeli No 50'};
const newObj = {...obj1, ...obj2}
const newObj2 = {obj1,obj2}

console.log(newObj) // langsung tergabung
console.log(newObj2) // akan mengeluarkan output dgn keterangan object

// Copy Object
const originalObj = {name:'Dicoding', age:9};
const copiedObj = {...originalObj};
console.log(copiedObj)

// Pada Array
const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
const newArray = [...array1,...array2];

console.log(newArray)

// Copy Array
const original = ['apple','banana','tomato'];
const copied = [...original];

console.log(copied)