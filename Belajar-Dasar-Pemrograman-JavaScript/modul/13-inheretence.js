// Menggunakan ES6 Class (SuperClass dan SubClass)
class Smartphones{
    constructor(color,brand,model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
    charging(){
        console.log(`Charging this ${this.model}`);
    }
}

class iOS extends Smartphones{
    airdrop(){
        console.log('iOS have Airdrop feature');
    }
}

class Android extends Smartphones{
    splitscreen(){
        console.log('Android have Splitscreen feature');
    }
}

const ios = new iOS('Black', '12', 'Pro Max');
const android = new Android('Green','Samsung','S23');

android.charging();
ios.charging();
android.splitscreen();
ios.airdrop();
