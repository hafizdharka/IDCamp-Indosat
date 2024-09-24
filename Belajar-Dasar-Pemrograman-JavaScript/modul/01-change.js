const account = {
    balance : 1000,
    debt : 10,
};

account.balance = 2000; //Variabel const di dalam object dapat dirubah
console.log(account.balance);

// menghapus Properti di Object
const user = {
    'name' : 'Dicoding',
    'last name' : 'Indonesia',
    age : 9,
};

delete user.age
console.log(user)

// dengan tanda kurung siku
delete user['name'];
console.log(user)