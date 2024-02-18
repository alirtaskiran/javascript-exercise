// let insan1 = {
//     isim : "Ali",
//     yas : 27,
//     ulke : "Turkiye"
// }

// let insan2 = insan1;

// console.log(insan2.isim + insan2.ulke + insan2.yas);

// insan1.isim = "Barkın";
// insan1.yas = 25;
// insan1.ulke = "Rusya";


// console.log(insan2.isim + insan2.ulke + insan2.yas);



// let sayi1 = 10;
// let sayi2 = sayi1;

// sayi1 = 15;

// console.log(sayi1); // 15
// console.log(sayi2); // 10


// let sayi3 = [20];
// let sayi4 = [];
// sayi4 = sayi3;
// sayi3[0] = 30;


// console.log(sayi4);



// const toplama = (callback, birinciSayi, ikinciSayi) => {
//     let sonuc = birinciSayi + ikinciSayi;
//     callback(sonuc)}

// const konsolaYazdir = (result) => {console.log(result);}

// toplama(konsolaYazdir, 5,10);



// const instructor = {...student} //SOFT COPY
// instructor.name = "CAFER"

// instructor.favoriGames[0] = "GTA 1234"



// // const newStudent = JSON.parse(JSON.stringify(student)); //DEEP COPY
// // newStudent.favoriGames[0] = "GTA 800bilmemkaç"


// // console.log(instructor);
// console.log(student);
// console.log(instructor);


const student = {
    name: "Ali Rıza",
    surName: "Taşkıran",
    favoriGames: ["AoE","LoTR","LoL"],
    age: 27
}

const {name: firstName, age: nowAge} = student; 

console.log(firstName);
console.log(nowAge);


const getLang = () => ["Phyton","Java","C++"];

const [lang1,lang2,lang3] = getLang();

console.log(lang1);
console.log(lang2);
console.log(lang3);

