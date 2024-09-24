// Menstruktur Data dengan Map
// Map mampu menerima tipe data apapun, tidak seperti object yang hanya menerima string

// Membuat Map
const productMap = new Map([
    ['shoes',500],
    ['cap', 350],
    ['jeans', 250]
]);

console.log(productMap);

// Menyimpan Nilai di Map
const map = new Map();
map.set('name','aras');
map.set('last name','opraza')
console.log(map); // Map(1) {'name' => 'aras'}

//Mengakses Nilai di Map
console.log(map.get('name'));

//Menghapus Nilai di Map
map.delete('last name');
console.log(map);
