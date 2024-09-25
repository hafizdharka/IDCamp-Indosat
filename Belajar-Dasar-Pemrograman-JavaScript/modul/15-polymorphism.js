// Overriding Constructor

class Smartphones{
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging(){
        console.log(`Charging this ${this.model}`);
    }
}

class Android extends Smartphones{
    constructor(color, brand, model, device){
        super(color, brand, model);
        this.device = device;
    }
    
    splitScreen(){
        console.log('Android have a Split Screen');
    }
}

const android = new Android('Green', 'Samsung', 'A24', 'Smartphone')
console.log(android);
console.log(android.device);
android.splitScreen();

// Overriding Method
class Smartphones{
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging(){
        console.log(`Charging this ${this.model}`);
    }
}

class Android extends Smartphones{
    constructor(color, brand, model, device){
        super(color, brand, model);
        this.device =device;
    }

    charging(){
        super.charging();
        console.log(`Charging ${this.model} with fast charger`);
    }

    splitScreen(){
        console.log('Android have a split Screen')
    }
}

const andro = new Android('Green', 'Samsung', 'A24', 'Phones');

andro.charging();