import {name, email, age} from './02-export.mjs'

console.log(name, email, age)

// Import dan Assign ke Variabel dengan nama berbeda diperbolehkan
import goodMorning from './02-anotherfile.mjs';
import anotherName from './02-anotherfile.mjs';

goodMorning();
anotherName();

//
import sayHi, {sayGoodBye} from './02-anothefile2.mjs';

sayHi();
sayGoodBye();