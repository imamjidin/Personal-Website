
// Contoh pembuatan object dengan template literal
// var motor = {
//     nama : 'Kawasaki Ninja', //property
//     warna : 'Hijau',
//     cc : '250cc',
//     cylinder : 'dual cylinder',
//     kerangka : {
//         jenis : 'twin tunner',
//         berat : '10 Kg',
//         bahan : 'Platinum Aloy',
//     }
// }
// Object.values(motor).forEach(row => {
//     console.log(row);
// });

// var a = motor.kerangka
// Object.values(a).forEach(bike => {
//     console.log(bike);
// })

// Buat object dengan function declaration.

// function mobil(nama, warna, tahun, merek, kerangka){
//     var data = {};
//     data.nama = nama;
//     data.warna = warna;
//     data.tahun = tahun;
//     data.merek = merek;
//     data.kerangka = kerangka
//     return data;
// }
// var mobil1 = mobil(
//     'Mobilnya Imam', 
//     'Hitam', 
//     '2023', 
//     'toyota',
//     kerangka = {
//         jenis : 'Esaf',
//         berat : '500kg',
//         bahan : 'Carbon platinum',
//         warna : 'Hitam metalic'
//     });
// var mobil2 = mobil('Mobil RPL', 'Hitam-Putih', '2025', 'ferrari')

// console.log(mobil1,mobil2);

// Constructor == Get API
// function siswa(nama, kelas, nis, nisn, jurusan){
//     this.nama = nama;
//     this.kelas = kelas;
//     this.nis = nis;
//     this.nisn = nisn;
//     this.jurusan - jurusan;
// }

// var dataSiswa = new siswa('Imammmmm', '10', '0983232', '1234567890', 'RPL');
// var dataSiswa1 = new siswa('Musajidin', '10', '0983232', '1234567890', 'RPL');
// console.log(dataSiswa, dataSiswa1)

// Challange
// buat sebuah data object nama nama bus beserta datanya.
// Contoh :
// nama : Sinar Jaya
// tujuan : Jakarta - Wonosobo
// kode bus : sn-149
// no polisi : AA 1213 BB
// fasilitas : {
    // makan : rest area subang
    // sheat : sleeper sheat
    // toilet : duduk
//}
// tambahan : [ac, audio karoke, selimut, bantal, televisi]

// function bus(nama, tujuan, kodebus, nopolisi, fasilitas, tambahan){
//     var data = {};
//     data.nama = nama;
//     data.tujuan = tujuan;
//     data.kodebus = kodebus;
//     data.nopolisi = nopolisi;
//     data.fasilitas = fasilitas;
//     data.tambahan = tambahan;
//     return data;
// }

// var bus1 = bus(
//     'Sinar Jaya',
//     'Jakarta - Wonosobo',
//     'sn-149',
//     'AA 1213 BB',
//     fasilitas = {
//         makan : 'rest area subang',
//         sheat : 'sleeper sheat',
//         toilet : 'duduk'
//     },
//     tambahan = [
//         'Kipas',
//         'Gordeng',
//         'Miras'
//     ]
//     );

// var bus2 = bus(
//     'Sinar Gelap',
//     'Jakarta - Medan',
//     'sn-150',
//     'AA 1214 BB',
//     fasilitas = {
//         makan : 'rest area tebet',
//         sheat : 'sleeper sheat',
//         toilet : 'jongkok'
//     },
//     tambahan =[
//         'AC',
//         'Selimut',
//         'TV'
//     ]
//     );

// var bus3 = bus(
//     'Tayo biru',
//     'Jakarta - Depok',
//     'sn-151',
//     'AA 1215 BB',
//     fasilitas = {
//         makan : 'rest area condet',
//         sheat : 'sleeper sheat',
//         toilet : 'terbang'
//     },
//     tambahan = [
//         'AC Alam',
//         'Bantal',
//         'Guling'
//     ]
//     );

// var bus4 = bus(
//     'Cahaya Sepet',
//     'Jakarta - Bekasi',
//     'sn-152',
//     'AA 1216 BB',
//     fasilitas = {
//         makan : 'rest area cakung',
//         sheat : 'sleeper sheat',
//         toilet : 'pristyle'
//     },
//     tambahan = [
//         'Kipas',
//         'Selimut',
//         'AC'
//     ]
//     );

// var bus5 = bus(
//     'Harapan Jaya',
//     'Jakarta - Sragen',
//     'sn-153',
//     'AA 1217 BB',
//     fasilitas = {
//         makan : 'rest area bali',
//         sheat : 'sleeper sheat',
//         toilet : 'berdiri'
//     },
//     tambahan = [
//         'Guling',
//         'Gordeng',
//         'Bantal'
//     ]
//     );

// console.log(bus1, bus2, bus3, bus4, bus5)