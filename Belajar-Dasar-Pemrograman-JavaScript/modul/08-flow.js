// Conditional

// If Statement
const gajian = true;

console.log('Berjalan-jalan di mal');
if (gajian){
    console.log('Makan di restoran mal');
}

console.log('Pulang ke rumah')

// Else-if
const score = 80;

if (score>=80){
    console.log('Selamat, anda lulus ujian');
}   else {
    console.log('Maaf, Anda belum lulus ujian.');
}

//
const score2 = 85;

if (score2 > 90) {
  console.log('Selamat, Anda mendapatkan nilai A!');
} else if (score2 > 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}

// Short version

let result = condition ? value1 : value2;

const price = 10000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`)

//Switch Case

const fruit = 'apple';

switch(fruit){
    case 'banana':
        console.log('I am a banana.');
        break;
    case 'apple':
        console.log('I am an apple.');
        break;
    case 'orange':
        console.log('I am an orange.');
        break;
    case 'strawberry':
        console.log('I am a strawberry.');
}

// Perbandingan if dan switch
const day = new Date().getDay();

if (day === 0) {
  console.log('Minggu');
} else if (day === 1) {
  console.log('Senin');
} else if (day === 2) {
  console.log('Selasa');
} else if (day === 3) {
  console.log('Rabu');
} else if (day === 4) {
  console.log('Kamis');
} else if (day === 5) {
  console.log('Jumat');
} else if (day === 6) {
  console.log('Sabtu');
} else {
  console.log('Hari tidak valid');
}

switch (day) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
}