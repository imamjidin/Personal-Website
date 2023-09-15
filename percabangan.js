// (if, else, else if, switch, case, etc)

// Vallian akan mengikuti sebuah seminar, yang mana seminarnya tersebut memiliki aturan :
// 1. Jika umurnya kurang dari 13 tahun, maka harus masuk ke ruangan A
// 2. Jika umurnya lebih dari 13 tahun dan kurang dari 17 tahub, maka harus masuk ke ruangan b4
// 3. Jika umurnya lebih dari 17 tahun, maka harus masuk ke ruangan C

// var vallian = 17;

// if (vallian < 13){
//     console.log('Vallian harus masuk ke Ruangan A');
// }
// else if(vallian > 13 && vallian < 17){
//     console.log('Vallian harus masuk ke Ruangan B')
// }
// else {
//     console.log('Vallian harus masuk ke Ruangan C')
// }

// // disebuah kursus ada sebuah jawdwal amteri, senin : pemrograman web, selasa : android, rabu : python. kamis - minggu libur.

// var hari = prompt ('Masukan nama hari')

// if(hari == 'senin'){
//     alert('Materi hari ini adalah pemrograman web')
// }
// else if(hari == 'selasa'){
//     alert('Materi hari ini adalah android')
// }
// else if(hari == 'rabu'){
//     alert('Materi hari ini adalah python')
// }
// else if(hari == 'kamis'|| hari == 'jumat'|| hari == 'sabtu'||hari== 'ahad'){
//     alert('Hari ini libur')
// }
// else {
//     alert('Masukan input yang benar')
// }

// var number = prompt("Masukkan angka ?");

// if (number % 2 === 0) {
//     alert("Genap");
//   } 
// else if (number % 1 === 0){
//     alert("Ganjil");
//   }
// else {
//   alert("Input salah");
// }

// // Jadwal pelajaran
// var hari = prompt ('Masukan nama hari')

// if(hari.toLowerCase() == 'senin'){
//     alert('Ini urutan pelajaran pada hari senin : English, Diniyah, IT')
// }
// else if(hari.toLowerCase() == 'selasa'){
//     alert('Ini urutan pelajaran pada hari selasa : English, Diniyah, IT')
// }
// else if(hari.toLowerCase() == 'rabu'){
//     alert('Ini urutan pelajaran pada hari rabu : English, Diniyah, IT')
// }
// else if(hari.toLowerCase == 'kamis'){
//     alert('Ini urutan pelajaran pada hari kamis : English, Diniyah, IT')
// }
// else if(hari.toLowerCase == 'jumat'){
//     alert('Ini urutan pelajaran pada hari jumat : English, Diniyah, IT')
// }
// else if(hari.toLowerCase == 'sabtu' || hari == 'minggu'){
//     alert('Hari ini tidak ada pelajaran karena LIBUR')
// }
// else {
//     alert('Masukan input yang benar')
// }

// percabangan mengguanakan switch atau case

// var hari = prompt ('Masukan hari yang akan anda tanyakan :')

// switch (hari) {
//     case 'senin':
//         alert('Hari ini belajar pemrograman WEB')
//     break;

//     case 'selasa':
//         alert('Hari ini belajar pemrograman Android')
//     break;

//     default:
//         alert('Data yang anda masukan salah')
// }

// Study case

// Buat sebuah algoritma penilaian menggunakan huruf dan angka

// Nilai dibawah 60 = D (Kurang)
// Nilai antara 60 - 75 = C (Cukup)
// Nilai antara 75 - 85 = B (Baik)
// Nilai antara 85 - 100 = A (Ahsan)
// Nilai lebih dari 100 = nilai yang anda masukan salah


// var nilai = prompt ('Masukan nilai anda :')

// switch (true) {
//     case  nilai < 60 :
//         alert('Nilai anda D (Kurang)')
//     break;

//     case  nilai < 70:
//         alert('Nilai anda C (Cukup)')
//     break;

//     case  nilai < 85:
//         alert('Nilai anda B (Baik)')
//     break;

//     case  nilai < 100:
//         alert('Nilai anda A (Ahsan)')
//     break;

//     default:
//         alert('Nilai yang anda masukan salah')
// }

// ternenary

// var nama = prompt('Siapakah guru yang paling ganteng?')
// var jawaban = (nama.toLowerCase() == 'kak fahmi') ? 'Benar': 'salah';
// alert(`Jawaban yang anda kirim ${jawaban}`)

// var warna = 'merah';
// var jenis = 'sport';
// var merek = 'supra';
// var cc = '2100'
// console.log(`Imam punya mobil warna ${warna} dan jenis mobilnya ${jenis} dan mereknya ${merek}`)

//nested branches

// var username = prompt('Masukan Username anda : ')
// var password = prompt('Masukan Password anda : ')

// if (username == 'Ichie'){
//     if (password == 12345){
//         alert('Login Berhasil')
//     }
//     else{
//         alert('Password Anda Salah')
//     }
// }
// else {
//     alert ('Username Tidak Ditemukan')
// }

// if (Username == 'Imam' && Password == '12345'){
//     alert('Login Berhasil')
// }
// else{
//     alert('Username atau Password Salah')
// }

// Study case:
// 1. buat sebuah kode program soal pilihan ganda :
// Jumlah soal : 3;,, masing masing soal pengerjaan harus menggunakan :
// If - else-if, swtich, nested if-else

var soal = prompt('Ikan bernafas menggunakan : ...   a. Insang b.Paru-paru c.Kulit d.trakea')

//if-else

// if(soal.toLowerCase() == 'a'){
//     alert('Jawaban Anda Benar')
// }
// else if(soal.toLowerCase() == 'b' || soal.toLowerCase() == 'c' || soal.toLocaleLowerCase() == 'd'){
//     alert('Jawaban Anda Salah')
// }
// else{
//     alert('Isi Pilihan Ganda Dengan Benar A/B/C/D')
// }

// Switch

// switch (soal) {
//     case soal = 'a':
//         alert('Jawaban anda benar')
//     break;

//     case soal = 'b':
//         alert('Jawaban anda salah')
//     break;

//     case soal = 'c':
//         alert('Jawaban anda salah')
//     break;

//     case soal = 'd':
//         alert('Jawaban anda salah')
//     break;

//     default:
//         alert('Isi Pilihan Ganda Dengan Benar A/B/C/D')
// }

// nested

// if (soal == 'a'){
//      if (soal == 'a'){
//          alert('Jawaban anda benar')
//     }
//      else if (soal == 'd', 'b', 'c'){
//         alert('Jawaban anda salah')
//     }
// }
// else {
//     alert ('Jawaban tidak ada di pilihan ganda')
// }