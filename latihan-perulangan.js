console.log("\nLATIHAN PERULANGAN");

// Soal 1: Cetak Angka 1 hingga 5
console.log("Soal 1: For Loop (1 - 5)");
var listAngka = [];
for (let i = 1; i <= 5; i++) {
  console.log(i);
  listAngka.push(i); 
}

// Soal 2: Hitung Mundur (Countdown)
console.log("Soal 2: While Loop (Countdown)");
var listCountdown = [];
let countdown = 3;
while (countdown >= 1) {
  console.log(countdown);
  listCountdown.push(countdown); 
  countdown--;
}
console.log("Start!");
listCountdown.push("Start!"); 