// Impure Function
let value = 0;

function addWith(addingValue){
    value += addingValue;
    console.log(`Current value is ${value}`);
    return value;
}

const result1 = addWith(1);
const result2 = addWith(2);

// Pure Function
// Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama
// Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut

function addWith2(value, addingValue){
    return value + addingValue
}

const result3 = addWith2(0,1);
console.log(`result is ${result3}`); // Output result3 is 1

const result4 = addWith2(result3,1);
console.log(`result is ${result4}`); 

console.log(result3,result4);