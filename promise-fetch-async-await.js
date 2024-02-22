// const test = callback => {
//     setTimeout(() => {
//         callback("Hata oluştu!", [])
//     }, 2000)
// }

// const callback = (err, data) => {
//     if(err){
//         console.log("Hata : ", err);
//     }else {
//         console.log("Data : ", data);
//     }
// }

// test(callback);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("islem basarili")
    reject("islem basarisiz");
  }, 1500);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.warn(err);
  });

console.log(promise);
