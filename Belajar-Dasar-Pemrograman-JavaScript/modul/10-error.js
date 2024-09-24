// Throw Error
const error = new Error('Terjadi error');
console.error(error);

const price = 100;
const paid = 80;

if (paid<price){
    throw new Error('Pembayaran Kurang Sob');
}

// Catching Error

// Try Catch
try {
    console.log('Memulai Program');
    console.log('Mengakhiri Program');
} catch (err){
    console.log('Karena tidak ada error, blok ini akan diabaikan');
}

try {
    console.log('Memulai Program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri Program');
} catch (err){
    console.log('Karena tidak ada error, blok ini akan diabaikan');
}

// Finally
// Ia tidak peduli apakah blok try memiliki error atau tidak

try{
    console.log('Ini try block')
} catch (err) {
    console.log('Ini catch block')
} finally {
    console.log('Ini finally block')
}

try {
    console.log('Ini try block');
    throw new Error('Error: Program berhenti');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  }