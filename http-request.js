// // Ajax, callback, http request

// function fetchData(url) {
//   return new Promise(function(resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = function() {
//       if (xhr.status == 200) {
//         resolve(xhr.responseText);
//       } else {
//         reject(Error(xhr.statusText));
//       }
//     };
//     xhr.onerror = function() {
//       reject(Error("Network Error"));
//     };
//     xhr.send();
//   });
// }

// // Kullanımı
// const value = fetchData('https://jsonplaceholder.typicode.com/albums')
//   .then(function(data) {
//     console.log('Veri alındı:', data);
//     // Veri işleme işlemleri burada yapılabilir
//     const arr = JSON.parse(data);
//     console.log(arr);
//   })
//   .catch(function(error) {
//     console.error('Hata oluştu:', error);
//   });

//   console.log(value);

// // try {
// //   const data = await fetchData('https://jsonplaceholder.typicode.com/albums');
// //   console.log('Veri alındı:', data);
// //   // Veri işleme işlemleri burada yapılabilir
// // } catch (error) {
// //   console.error('Hata oluştu:', error);
// // }

// // class Request {
// //   constructor() {
// //     this.xhr = new XMLHttpRequest();
// //   }

// //   // GET Request

// //   get(url) {

// //     this.xhr.open("GET", url);
// //     this.xhr.onload = () => {
// //       console.log(this.xhr);
// //         if(this.xhr.status === 200){
// //           console.log(this.xhr.responseText);
// //         }
// //     }
// //     this.xhr.send();

// //   }
// // }

// // const request = new Request();
// // request.get("https://jsonplaceholder.typicode.com/albums", function(response){
// //   console.log(response);
// // });

// // console.log(albums);

// /* */

// XHR + PROMISE

const jspURI = "https://jsonplaceholder.typicode.com";

const getRequest = (endpoint) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", (err, data) => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        resolve(data);
      } else if (xhr.readyState === 4) {
        reject(xhr.status);
      }
    });

    xhr.open("GET", endpoint);
    xhr.send();
  });
};

getRequest(`${jspURI}/users/1`)
.then((data) => {
  console.log(data);
  return getRequest(`${jspURI}/users/2`);
})
.then((data) => {
  console.log(data);
  return getRequest(`${jspURI}/users/3`);
})
.then((data) => {
  console.log(data);
})
.catch((err) => console.log(err))

// const myFunction = async () => {
//   try {
//     const user1 = await getRequest(`${jspURI}/users/1`);
//     console.log(user1);
//     const user2 = await getRequest(`${jspURI}/users/2`);
//     console.log(user2);
//     const user3 = await getRequest(`${jspURI}/users/3`);
//     console.log(user3);
//   }
//   catch (err) {
//     console.error(err);
// }
// };

// myFunction();
  

console.log("Hello WORRRLLLDD!!!");
console.log("Hello WORRRLLLDD!!!");
console.log("Hello WORRRLLLDD!!!");

// getRequest(`${jspURI}/albums`, (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });

// getRequest(`${jspURI}/photos`, (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });

// getRequest(`${jspURI}/todos`, (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });
