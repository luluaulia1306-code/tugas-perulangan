console.log("=== LATIHAN POLA VISUAL ===");

// Soal 1: Segitiga Siku-siku (Tinggi 4)

var pola1 = [];
for (let i = 1; i <= 4; i++) {
  pola1.push("*".repeat(i));
}
console.log("-- Soal 1: Segitiga --\n" + pola1.join("\n"));


// Soal 2: Persegi Panjang (4 Baris x 8 Kolom)

var pola2 = [];
for (let i = 1; i <= 4; i++) {
  pola2.push("*".repeat(8));
}
console.log("\n-- Soal 2: Persegi Panjang --\n" + pola2.join("\n"));


// Soal 3: Persegi Panjang Kosong (5 Baris x 8 Kolom)

var pola3 = [];
let barisKotak = 5;
let kolomKotak = 8;
for (let i = 1; i <= barisKotak; i++) {
  if (i === 1 || i === barisKotak) {
    pola3.push("*".repeat(kolomKotak));
  } else {
    pola3.push("*" + " ".repeat(kolomKotak - 2) + "*");
  }
}
console.log("\n-- Soal 3: Persegi Panjang Kosong --\n" + pola3.join("\n"));

// Soal 4: Segitiga Sama Sisi (Simetris Sempurna Monospace)

var pola4 = [];
let tinggi4 = 4;
for (let i = 1; i <= tinggi4; i++) {
  let spasi = " ".repeat(tinggi4 - i);

  let deret = Array(i).fill(i).join(" ");
  pola4.push(spasi + deret);
}
console.log("\n-- Soal 4: Segitiga Sama Sisi --\n" + pola4.join("\n"));


// Soal 5: Segitiga Sama Sisi 2 (Simetris Sempurna Monospace)

var pola5 = [];
let tinggi5 = 4;
let nomorUrut5 = 1;
for (let i = 1; i <= tinggi5; i++) {
  let spasi = " ".repeat(tinggi5 - i);
  let barisItem = [];
  for (let j = 1; j <= i; j++) {
    barisItem.push(nomorUrut5);
    nomorUrut5++;
  }

  pola5.push(spasi + barisItem.join(" "));
}
console.log("\n-- Soal 5: Segitiga Sama Sisi 2 --\n" + pola5.join("\n"));

// Soal 6: Belah Ketupat (Diamond)

var pola6 = [];
let n6 = 4;
// Bagian Atas
for (let i = 1; i <= n6; i++) {
  pola6.push(" ".repeat(n6 - i) + "*".repeat(2 * i - 1));
}
// Bagian Bawah
for (let i = n6 - 1; i >= 1; i--) {
  pola6.push(" ".repeat(n6 - i) + "*".repeat(2 * i - 1));
}
console.log("\n-- Soal 6: Belah Ketupat --\n" + pola6.join("\n"));

// Soal 7: Segitiga Jam Pasir

var pola7 = [];
let n7 = 4;

for (let i = n7; i >= 1; i--) {
  pola7.push(" ".repeat(n7 - i) + "*".repeat(2 * i - 1));
}

for (let i = 2; i <= n7; i++) {
  pola7.push(" ".repeat(n7 - i) + "*".repeat(2 * i - 1));
}
console.log("\n-- Soal 7: Segitiga Jam Pasir --\n" + pola7.join("\n"));


// Soal 8: Segitiga Kosong (Piramida Berongga, Alas 9 Bintang)

var pola8 = [];
let tinggiKosong = 5;
for (let i = 1; i <= tinggiKosong; i++) {
  let spasiLuar = " ".repeat(tinggiKosong - i);
  if (i === 1) {
    pola8.push(spasiLuar + "*");
  } else if (i === tinggiKosong) {
    pola8.push("*".repeat(2 * tinggiKosong - 1));
  } else {
    let spasiDalam = " ".repeat(2 * i - 3);
    pola8.push(spasiLuar + "*" + spasiDalam + "*");
  }
}
console.log("\n-- Soal 8: Segitiga Kosong --\n" + pola8.join("\n"));