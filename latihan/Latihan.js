let saldo = 55;
let hargaMotor = 7;
let hargaMobil = 50;

if (saldo > hargaMotor + hargaMobil) {
  console.log('gua tajir');
} else if (saldo > hargaMobil) {
  console.log('Saldo anda cukup untuk membeli mobil');
} else if (saldo > hargaMotor) {
  console.log('Saldo anda cukup untuk membeli motor');
} else {
  console.log('Miskin');
}
