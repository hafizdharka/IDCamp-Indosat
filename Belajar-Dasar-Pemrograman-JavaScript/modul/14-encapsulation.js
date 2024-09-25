// Membatasi bagian kodo yang dapat diakses
// Menyembunyikan data dan hanya akan menampilkan data yang dibutuhkan oleh object lain

class CoffeeMachine{
    constructor(waterAmount){
        this.waterAmount = waterAmount; //Water Amount merupakan property bersifat public
        this.temperature = 90; //temperature bersifat private
    }
    makeCoffee(){
        console.log('Membuat kopi dengan suhu', this.temperature);
    }
}

const coffee = new CoffeeMachine(100);
//coffee.temperature = 60;

coffee.makeCoffee();

// Getter dan Setter
// Solusi jika ada pengguna yang iseng mengubah nilai temperature

class CoffeeMachine{
    constructor(waterAmount){
        this.waterAmount = waterAmount;
        this._temperature = 90; //Underscore menandakan temperature tidak dapat diubah
    }
    set temperature(temperature){
        console.log('you are not allowed to change the temperature');
    }
    get temperature(){
        return this._temperature;
    }
}

const coffee2 = new CoffeeMachine(10);
console.log('Sebelum diubah : ', coffee2.temperature)
coffee2.temperature=100;
console.log('Setelah diubah : ', coffee2.temperature)

// Benar-benar tidak dapat diubah

class CoffeeMachine{
    #temperature = 90;

    constructor(waterAmount){
        this.waterAmount = waterAmount;
        this.#temperature=this.#defaultTemperature();
    }
    set temperature(temperature){
        console.log('you are not allowed to change the temperature');
    }

    get temperature(){
        return this.#temperature;
    }

    #defaultTemperature(){
        return 90;
    }
}
