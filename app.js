// // let insan1 = {
// //     isim : "Ali",
// //     yas : 27,
// //     ulke : "Turkiye"
// // }

// // let insan2 = insan1;

// // console.log(insan2.isim + insan2.ulke + insan2.yas);

// // insan1.isim = "Barkın";
// // insan1.yas = 25;
// // insan1.ulke = "Rusya";


// // console.log(insan2.isim + insan2.ulke + insan2.yas);



// // let sayi1 = 10;
// // let sayi2 = sayi1;

// // sayi1 = 15;

// // console.log(sayi1); // 15
// // console.log(sayi2); // 10


// // let sayi3 = [20];
// // let sayi4 = [];
// // sayi4 = sayi3;
// // sayi3[0] = 30;


// // console.log(sayi4);



// // const toplama = (callback, birinciSayi, ikinciSayi) => {
// //     let sonuc = birinciSayi + ikinciSayi;
// //     callback(sonuc)}

// // const konsolaYazdir = (result) => {console.log(result);}

// // toplama(konsolaYazdir, 5,10);

// // const student = {
// //     name: "Ali Rıza",
// //     surName: "Taşkıran",
// //     favoriGames: ["AoE","LoTR","LoL"],
// //     age: 27
// // }


// // const instructor = {...student} //SOFT COPY
// // instructor.name = "CAFER"

// // instructor.favoriGames[0] = "GTA 1234"



// // // const newStudent = JSON.parse(JSON.stringify(student)); //DEEP COPY
// // // newStudent.favoriGames[0] = "GTA 800bilmemkaç"


// // // console.log(instructor);
// // console.log(student);
// // console.log(instructor);


// // const student = {
// //     name: "Ali Rıza",
// //     surName: "Taşkıran",
// //     favoriGames: ["AoE","LoTR","LoL"],
// //     age: 27
// // }

// // const {name: firstName, age: nowAge} = student; 

// // console.log(firstName);
// // console.log(nowAge);


// // const getLang = () => ["Phyton","Java","C++"];

// // const [lang1,lang2,lang3] = getLang();

// // console.log(lang1);
// // console.log(lang2);
// // console.log(lang3);



// // const ourOwnForEach = (arr, callbackFn) => {
// //     for (let index = 0; index < arr.length; index++) {
// //         callbackFn(arr[index], index, arr);
// //     }
// // }
// // const arr = [0,1,2,3,4,5,6,7,8,9,10,12,14,22,46,-26,-25,0.2];

// // const getEvenNumbers = (arr) => {
// //     const newArr = [];
// //     ourOwnForEach(arr, (index) => {
// //         if(index % 2 === 0){
// //             newArr.push(index);
// //         }
// //     });
// //     return newArr;
// // }

// // console.log(getEvenNumbers(arr));


// // const students = ["Berkay", "Cenk", "Mert", "Orkun", "Hicran", "Buse", "Onder"];

// // const ourOwnMap = (arr, callbackFn) => {
// //     const newArr = [];
// //     for (let index = 0; index < arr.length; index++) {
// //         const callbackResult = callbackFn(arr[index], index, arr);
// //         if(!(callbackResult === undefined)){
// //             newArr.push(callbackResult);
// //         }
// //     }
// //     return newArr;
// // }

// // const mapResult = ourOwnMap(
// //     students,
// //     (student, index) => {
// //         if (index % 2 === 0) {
// //             return student;
// //         }
// //     }
// // );

// // console.log(mapResult);


// const arr = [1,2,3,4,5,6,7,8,9,10];

