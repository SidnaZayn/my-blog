---
title: 'deteksiplat.com'
description: 'Automatic motorcycle plate number recognition (Indonesia) based on flask and computer vision methodologies'
pubDate: 'Feb 2021'
heroImage: '/blog-placeholder-3.jpg'
userId: "1"
projectLink: 'https://github.com/SidnaZayn/deteksi-plat'
---

Aplikasi untuk menentukan posisi plat motor disuatu gambar dan membaca plat nomor motor indonesia. Aplikasi ini menggunakan Machine Learning dengan metode Haar-Cascade untuk menentukan posisi plat motor dan K-Nearest Network untuk menentukan huruf atau angka dari objek yang didefinisikan.
<br><br>
Aplikasi ini berjalan dengan tahapan sebagai berikut:
<br><br>
a. Mengambil gambar<br>
b. Menggunakan Haar Cascade untuk mendeteksi posisi plat motor<br>
c. Menggunakan Haar Cascade untuk mendeteksi huruf atau angka<br>
d. Menggunakan K-Nearest Network untuk membaca angka atau huruf<br>
e. Menampilkan hasil deteksi dalam bentuk Array<br>
<br>
Aplikasi ini tidak sepenuhnya akurat. hasil penelitian menunjukan bahwa tingkat keberhasilan yang rendah. oleh karena itu, aplikasi ini menggunakan middleware untuk parsing huruf yang jarang muncul menjadi huruf yang lebih sering muncul untuk kasus huruf yang mirip
<br><br>
Misalkan, huruf O dan D memiliki kemiripan. Tetapi huruf D lebih sering muncul. Oleh karena itu, aplikasi ini menggunakan middleware untuk parsing huruf O menjadi D