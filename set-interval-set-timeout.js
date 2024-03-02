console.log(this);

setTimeout(
  (name) => {
    // Belirlediğimiz süre sonunda bir kere çalışır.
    console.log(`Merhaba ${name}`);
  },
  2000,
  "Ahmet"
);

let interval = 0;

let value = setInterval(() => { // Belirlediğimiz süre boyunca çalışır.
  console.log(`Interval = ${interval}`);
  interval++;
}, 300);

// Clear Interval, durdurma işlemi yapar.
document.getElementById("btn").addEventListener("click", () => {
  clearInterval(value);
});