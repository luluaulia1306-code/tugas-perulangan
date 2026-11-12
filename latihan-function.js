console.log("\nLATIHAN FUNCTION");

// Soal 1: FizzBuzz (Contoh rentang 1 s.d. 15)
console.log("Soal 1: FizzBuzz");
var hasilFizzBuzz = [];

function fizzBuzz(batas) {
  hasilFizzBuzz = [];
  for (let i = 1; i <= batas; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
      hasilFizzBuzz.push("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
      hasilFizzBuzz.push("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
      hasilFizzBuzz.push("Buzz");
    } else {
      console.log(i);
      hasilFizzBuzz.push(i);
    }
  }
  return hasilFizzBuzz;
}

var jalankanFizzBuzz = fizzBuzz;
fizzBuzz(15);

// Soal 2: Cek Genap & Ganjil
console.log("Soal 2: Cek Genap & Ganjil");
function cekGenapGanjil(angka) {
  return angka % 2 === 0 ? "Genap" : "Ganjil";
}
var cekGanjilGenap = cekGenapGanjil;

console.log("Angka 8 adalah:", cekGenapGanjil(8));
console.log("Angka 7 adalah:", cekGenapGanjil(7));

// Soal 3: Balik String
console.log("Soal 3: Balik String");
function balikString(kata) {
  return kata.split("").reverse().join("");
}
var balikTeks = balikString;

console.log("Kata 'javascript' dibalik menjadi:", balikString("javascript"));