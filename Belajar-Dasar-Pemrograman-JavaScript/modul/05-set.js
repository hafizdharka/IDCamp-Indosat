const set = new Set([1,2,3,]);
console.log(set)

//Menyimpan nilai di dalam set
set.add(3); //Jika nilainya sama, maka tidak akan ditambahkan
set.add(4); 
set.add(5);
set.add('apple')
console.log(set)

//Mengakses nilai di Set
const set2 = new Set();
set2.add(1)
set2.add(2)
set2.add('bobo')

for (const number of set2){
    console.log(number);
}

//Cara lainnya
set2.forEach((value) => console.log(value));

//Menghapus nilai di Set
set2.delete(1);
console.log(set2);