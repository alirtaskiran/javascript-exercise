// Pending (Bekleme): İşlemin henüz tamamlanmamış olma durumu.
// Fulfilled (Gerçekleşme): İşlemin başarılı bir şekilde tamamlanma durumu.
// Rejected (Red): İşlemin bir nedenden dolayı tamamlanamama durumu.

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

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve("islem basarili")
//     reject("islem basarisiz");
//   }, 1500);
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.warn(err);
//   });

// console.log(promise);

// const myPromise = new Promise((resolve, reject) => {
//   // Uzun süren bir işlem gerçekleştiriyoruz (örneğin bir API'den veri çekiyoruz)
//   setTimeout(() => {
//     const randomNumber = Math.random();
//     if (randomNumber < 0.5) { // Şartın sağlanıp sağlanmadığını rastgele belirliyoruz
//       resolve(randomNumber); // Başarılı durum
//     } else {  // Şart sağlanmazsa hata fırlatıyoruz
//       reject(new Error('Bir hata oluştu')); // Başarısız durum
//     }
//   }, 1000);
// });

// // Promise tamamlandığında çalışacak işlemler
// myPromise.then((result) => {
//   console.log('İşlem başarılı:', result);
// }).catch((error) => {
//   console.error('İşlem başarısız:', error);
// });

// const URL_API = "https://jsonplaceholder.typicode.com/posts"; // API URL belirliyoruz

// async function getPosts() {
//   try {
//     const response = await fetch(URL_API);
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.warn(err);
//   }
// }
// getPosts();

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.warn(err));

class Request {
  get(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.warn(err));
  }
}

const request = new Request();
request.get("https://jsonplaceholder.typicode.com/posts");

