<!-- 
    PANDUAN LENGKAP MENAMBAHKAN FOTO
    
    File ini berisi template dan contoh URL gambar gratis yang bisa langsung digunakan
    Ganti URL di bawah dengan foto kampus Anda sendiri
-->

<!-- ============ DAFTAR FOTO YANG DIPERLUKAN ============ 

1. program-agribisnis.jpg
   - Dimensi: 800x600 px (minimum)
   - Isi: Mahasiswa di lahan praktik atau lab
   - Lokasi: Tentang Program section
   - Contoh URL gratis: https://images.unsplash.com/photo-1625246333220-71f19c0f4cb0

2. kampus-1.jpg - Gedung Fakultas
   - Dimensi: 300x250 px (minimum)
   - Isi: Gedung utama/fasade
   - Contoh: https://images.unsplash.com/photo-1516321318423-f06f70a504f9

3. kampus-2.jpg - Laboratorium
   - Dimensi: 300x250 px (minimum)
   - Isi: Lab modern/peralatan
   - Contoh: https://images.unsplash.com/photo-1530836369250-ef72a3ec3f70

4. kampus-3.jpg - Lahan Praktik
   - Dimensi: 300x250 px (minimum)
   - Isi: Ladang/greenhouse/lahan pertanian
   - Contoh: https://images.unsplash.com/photo-1574943320219-553eb213f72d

5. kampus-4.jpg - Mahasiswa
   - Dimensi: 300x250 px (minimum)
   - Isi: Mahasiswa diskusi/belajar kelompok
   - Contoh: https://images.unsplash.com/photo-1552664730-d307ca884978

6. kampus-5.jpg - Acara Kampus
   - Dimensi: 300x250 px (minimum)
   - Isi: Event/seminar/acara kampus
   - Contoh: https://images.unsplash.com/photo-1552664730-d307ca884978

7. kampus-6.jpg - Fasilitas
   - Dimensi: 300x250 px (minimum)
   - Isi: Fasilitas lainnya (ruang baca, kantin, dsb)
   - Contoh: https://images.unsplash.com/photo-1509042239860-f550ce710b93

============ SUMBER FOTO GRATIS ============

1. UNSPLASH (Rekomendasi)
   Website: https://unsplash.com
   Cari: farming, agriculture, greenhouse, laboratory
   Format URL: https://images.unsplash.com/photo-[ID]?w=800&h=600&fit=crop
   
2. PEXELS
   Website: https://pexels.com
   Cari: agriculture, students, campus
   Bisa download atau pakai URL langsung
   
3. PIXABAY
   Website: https://pixabay.com
   Cari: farmer, field, greenhouse
   
4. FREEPIK
   Website: https://freepik.com
   Cari: agriculture business
   (Beberapa perlu lisensi)

============ LANGKAH MENAMBAHKAN FOTO ============

METODE A: UPLOAD FOTO LOKAL
1. Ambil foto berkualitas HD
2. Resize ke 800x600 px (atau lebih besar)
3. Kompres dengan: https://tinypng.com
4. Copy ke folder /images/ dengan nama file di atas
5. Pastikan format: .jpg atau .png

METODE B: GUNAKAN URL GRATIS (TESTING)
1. Kunjungi sumber foto gratis di atas
2. Search: "agriculture", "farming", "laboratory", "student"
3. Copy URL gambar
4. Edit index.html
5. Ganti src="images/kampus-1.jpg" dengan src="URL_GAMBAR"

METODE C: HYBRID (RECOMMENDED)
1. Gunakan URL untuk testing
2. Nanti ganti dengan foto asli lokal

============ CONTOH PENGGANTIAN FOTO ============

SEBELUM (Original):
<img src="images/program-agribisnis.jpg" alt="Program Agribisnis">

SESUDAH (Pakai URL):
<img src="https://images.unsplash.com/photo-1625246333220-71f19c0f4cb0?w=800&h=600&fit=crop" alt="Program Agribisnis">

SESUDAH (Pakai File Lokal):
<img src="images/program-agribisnis.jpg" alt="Program Agribisnis">
(File sudah di folder /images/)

============ TOOLS YANG BERGUNA ============

1. Kompres Foto
   - TinyPNG: https://tinypng.com
   - ImageOptim (Mac): https://imageoptim.com
   - FileOptimizer (Windows)

2. Resize/Edit Foto
   - Canva: https://canva.com
   - Pixlr: https://pixlr.com
   - Photopea: https://photopea.com

3. Converter Format
   - CloudConvert: https://cloudconvert.com
   - Online-Convert: https://online-convert.com

4. FTP Upload (untuk hosting)
   - FileZilla: https://filezilla-project.org
   - WinSCP: https://winscp.net

============ TIPS FOTOGRAFI ============

1. Lighting
   - Ambil foto di siang hari
   - Hindari backlight
   - Cahaya alami lebih bagus

2. Komposisi
   - Rule of thirds
   - Fokus pada subjek utama
   - Hindari blur/blur

3. Editing
   - Tingkatkan contrast
   - Jangan over-filter
   - Pastikan professional

4. SEO Foto
   - Nama file deskriptif: kampus-gedung-utama.jpg
   - Alt text jelas: "Gedung Utama Fakultas Pertanian"
   - Kompres tanpa mengorbankan kualitas

============ SOCIAL MEDIA INTEGRATION ============

Tambahkan social media links di section kontak:

Facebook:
<a href="https://facebook.com/pertanian" target="_blank">
    <i class="fab fa-facebook"></i>
</a>

Instagram:
<a href="https://instagram.com/pertanian" target="_blank">
    <i class="fab fa-instagram"></i>
</a>

Twitter:
<a href="https://twitter.com/pertanian" target="_blank">
    <i class="fab fa-twitter"></i>
</a>

YouTube:
<a href="https://youtube.com/channel/pertanian" target="_blank">
    <i class="fab fa-youtube"></i>
</a>

============ BEST PRACTICES ============

✓ Foto landscape (landscape > portrait untuk web)
✓ Resolusi minimal 800x600 px
✓ Ukuran file < 500KB (setelah kompres)
✓ Konsistensi gaya & warna
✓ Professional dan menarik
✓ Relevant dengan konten
✓ Tidak ada watermark (jika bisa)
✓ Alt text descriptive

✗ Jangan: Foto blur, terlalu gelap, asal-asalan
✗ Jangan: Foto dengan orang tanpa izin
✗ Jangan: Foto branded brand lain
✗ Jangan: Ukuran terlalu besar (loading lambat)

============ RESPONSIVE IMAGE IMPLEMENTATION ============

Untuk performa optimal, gunakan srcset:

<img 
    src="images/kampus-1.jpg"
    srcset="images/kampus-1-small.jpg 480w,
            images/kampus-1-medium.jpg 768w,
            images/kampus-1-large.jpg 1200w"
    alt="Gedung Fakultas"
>

============ HOSTING FOTO DI CDN ============

Jika ingin performa maksimal, upload ke CDN:

1. Cloudinary
   URL: https://cloudinary.com
   Upload gratis 25GB
   Format: https://res.cloudinary.com/YOUR_NAME/image/upload/v1/kampus-1.jpg

2. Imgix
   URL: https://imgix.com
   Real-time image optimization

3. AWS CloudFront
   Untuk website enterprise
   
============ CONTACT US ============

Jika ada pertanyaan:
1. Check browser console (F12)
2. Baca dokumentasi HTML/CSS
3. Search di Google/StackOverflow
4. Tanya ke developer

GOOD LUCK! 🍀
-->

<!-- EXAMPLE PHOTO URLS (COPY-PASTE READY) -->

<!--
PERTANIAN
https://images.unsplash.com/photo-1625246333220-71f19c0f4cb0?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1599599810694-cd5d8c90bc32?w=800&h=600&fit=crop

LABORATORIUM
https://images.unsplash.com/photo-1530836369250-ef72a3ec3f70?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop

MAHASISWA
https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop

KAMPUS
https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop

ACARA/EVENT
https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop
https://images.unsplash.com/photo-1540575467063-178f50c1d5e4?w=800&h=600&fit=crop

GREENHOUSE
https://images.unsplash.com/photo-1530517551800-e6a9ea11a282?w=800&h=600&fit=crop
-->
