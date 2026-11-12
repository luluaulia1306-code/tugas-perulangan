// Soal 1: Sistem Penilaian Sederhana
function cekNilai(nilai) {
  if (nilai >= 75) {
    return "Lulus";
  } else {
    return "Remedial";
  }
}
var cekStatusNilai = cekNilai;

function cekRole(kode) {
  switch (kode) {
    case "A":
      return "Admin";
    case "U":
      return "User";
    default:
      return "Guest";
  }
}

var konversiRole = cekRole;

console.log("Cek Nilai 80:", cekNilai(80));
console.log("Cek Nilai 70:", cekNilai(70));
console.log("Role A:", cekRole("A"));
console.log("Role U:", cekRole("U"));
console.log("Role Z:", cekRole("Z"));