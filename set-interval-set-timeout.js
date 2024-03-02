console.log(this); 

setTimeout((name) => { // Belirlediğimiz süre sonunda bir kere çalışır.
    console.log(`Merhaba ${name}`);
}, 2000, 'Ahmet');

let interval = 0;

setInterval(() => { // Belirlediğimiz süre sonunda sürekli çalışır.
    console.log(`Interval = ${interval}`);
    interval++;
}, 3000);
