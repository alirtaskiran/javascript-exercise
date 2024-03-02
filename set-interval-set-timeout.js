console.log(this); 

setTimeout((name) => { // Belirlediğimiz süre sonunda bir kere çalışır.
    console.log(`Merhaba ${name}`);
}, 2000, 'Ahmet');
