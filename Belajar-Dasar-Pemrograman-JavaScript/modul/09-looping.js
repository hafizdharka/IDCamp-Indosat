// For Loop
for (let i=0; i<5;i++){
    console.log(`Angka ke-${i} adalah ${i}`)
}

// For In
const person = {name:'Fulan', origin: 'Bandung', birthYear:2024};

for (const property in person){
    console.log(`${property} bernilai ${person[property]}`)
}

// For of
// Tidak perlu memikirkan property dan key
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names){
    console.log(item)
}

// While
let i =0;

while (i<5){
    console.log(`Angka ke-${i} adalah ${i}.`);
    i++;
}

// Do While
// Mengevaluasi di akhir
let j = 0;

do {
    console.log(`Angka ke-${j} adalah ${j}.`);
    i++;
} while(i<5)

// Control Statement

// Break

for (let k=0; k<10; k++){
    if(k==5){
        break;
    }
    console.log(k);
}

// Switch Break
const number = 1;

switch (number) {
  case 1:
    console.log('Ini 1');
    break;
  case 2:
    console.log('Ini 2');
    break;
  case 3:
    console.log('Ini 3');
    break;
  default:
    console.log('Ini default');
}

// Continue
// Continue akan langsung meneruskan ke iterasi berikutnya
for (let i=0; i<10; i++){
    if (i===5){
        continue;
    }
    console.log(i)
}


