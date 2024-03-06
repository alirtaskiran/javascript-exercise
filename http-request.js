// Ajax, callback, http request

function fetchData(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function() {
      if (xhr.status == 200) {
        resolve(xhr.responseText);
      } else {
        reject(Error(xhr.statusText));
      }
    };
    xhr.onerror = function() {
      reject(Error("Network Error"));
    };
    xhr.send();
  });
}

// Kullanımı
const value = fetchData('https://jsonplaceholder.typicode.com/albums')
  .then(function(data) {
    console.log('Veri alındı:', data);
    // Veri işleme işlemleri burada yapılabilir
    const arr = JSON.parse(data);
    console.log(arr);
  })
  .catch(function(error) {
    console.error('Hata oluştu:', error);
  });


  console.log(value);

// try {
//   const data = await fetchData('https://jsonplaceholder.typicode.com/albums');
//   console.log('Veri alındı:', data);
//   // Veri işleme işlemleri burada yapılabilir
// } catch (error) {
//   console.error('Hata oluştu:', error);
// }

// class Request {
//   constructor() {
//     this.xhr = new XMLHttpRequest();
//   }

//   // GET Request

//   get(url) {
    
//     this.xhr.open("GET", url);
//     this.xhr.onload = () => {
//       console.log(this.xhr);
//         if(this.xhr.status === 200){
//           console.log(this.xhr.responseText);
//         }
//     }
//     this.xhr.send();

//   }
// }

// const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums", function(response){
//   console.log(response);
// });

// console.log(albums); 

/* */