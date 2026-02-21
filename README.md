# Website Penerimaan Mahasiswa Baru - Fakultas Pertanian

Selamat datang! Ini adalah website profesional dan interaktif untuk penerimaan mahasiswa baru Program Studi Agribisnis Fakultas Pertanian.

## 📋 Fitur Utama

✅ **Desain Responsif** - Tampil sempurna di desktop, tablet, dan mobile
✅ **Interaktif** - Menu hamburger mobile, smooth scrolling, form handling
✅ **Profesional** - Warna tema pertanian yang menarik dan modern
✅ **Lengkap** - Informasi program, jadwal, galeri, dan kontak
✅ **Performa Tinggi** - Optimasi untuk loading cepat

## 📁 Struktur File

```
Penerimaan-Mahasiswa-Pertanian/
├── index.html              # File utama HTML
├── css/
│   └── style.css          # Stylesheet profesional
├── js/
│   └── script.js          # JavaScript untuk interaktivitas
├── images/                # Folder untuk menyimpan foto
│   ├── program-agribisnis.jpg
│   ├── kampus-1.jpg
│   ├── kampus-2.jpg
│   ├── kampus-3.jpg
│   ├── kampus-4.jpg
│   ├── kampus-5.jpg
│   └── kampus-6.jpg
└── README.md             # File ini
```

## 🖼️ Cara Menambahkan Foto

### Metode 1: Menggunakan File Lokal

1. **Siapkan Foto:**
   - Pilih foto-foto berkualitas tinggi (landscape recommended)
   - Ukuran minimal: 800x600 px, maksimal: 1920x1080 px
   - Format: JPG atau PNG
   - Kompres ukuran untuk performa optimal (gunakan TinyPNG atau ImageOptim)

2. **Letakkan di Folder Images:**
   - Copy foto ke folder `/images/`
   - Gunakan nama file yang jelas:
     - `kampus-1.jpg`, `kampus-2.jpg` untuk foto gedung/fasilitas
     - `program-agribisnis.jpg` untuk foto kegiatan program

3. **Update File HTML:**
   Buka `index.html` dan cari bagian `<!-- Tentang Program -->`:
   ```html
   <img src="images/program-agribisnis.jpg" alt="Program Agribisnis">
   ```

   Cari bagian `<!-- Galeri Foto -->`:
   ```html
   <div class="gallery-item">
       <img src="images/kampus-1.jpg" alt="Gedung Fakultas">
   </div>
   ```

### Metode 2: Menggunakan URL Online (Rekomendasi untuk Testing)

Jika belum punya foto, gunakan placeholder:

1. Edit `index.html`
2. Ganti `src="images/kampus-1.jpg"` dengan URL gambar dari:
   - Unsplash: https://unsplash.com (gratis)
   - Pexels: https://pexels.com (gratis)
   - Atau hosting Anda sendiri

Contoh:
```html
<!-- Untuk foto pertanian -->
<img src="https://images.unsplash.com/photo-1625246333220-71f19c0f4cb0?w=800&h=600&fit=crop" alt="Pertanian">

<!-- Untuk laboratorium -->
<img src="https://images.unsplash.com/photo-1530836369250-ef72a3ec3f70?w=800&h=600&fit=crop" alt="Lab">
```

## 🎨 Foto yang Disarankan

Untuk hasil terbaik, siapkan foto:

1. **Program Agribisnis** (1 foto)
   - Mahasiswa melakukan praktik di lapangan
   - Atau kegiatan pembelajaran

2. **Galeri Kampus** (6 foto):
   - Gedung Fakultas/Ruang Kuliah
   - Laboratorium Modern
   - Lahan Praktik Pertanian
   - Mahasiswa Diskusi/Belajar
   - Acara/Event Kampus
   - Fasilitas Lainnya

## 🔧 Cara Menggunakan Website

### Membuka Website Lokal

**Menggunakan Python:**
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

Kemudian buka browser: `http://localhost:8000`

**Menggunakan Node.js:**
```bash
# Install global http-server
npm install -g http-server

# Jalankan
http-server
```

**Menggunakan VS Code Live Server:**
- Install extension "Live Server"
- Klik kanan di `index.html` → "Open with Live Server"

### Navigasi Website

- **Hamburger Menu** - Klik untuk menu mobile
- **Scroll Top Button** - Tombol panah di kanan bawah
- **Smooth Scroll** - Semua link berfungsi dengan scroll halus

## ✏️ Cara Mengedit Konten

### 1. Edit Informasi Kontak
Buka `index.html`, cari section `<!-- Kontak dan Form -->`:
```html
<div class="info-item">
    <i class="fas fa-map-marker-alt"></i>
    <div>
        <h4>Alamat</h4>
        <p>Jl. Pertanian No. 123<br>Kampus Utama Universitas<br>Kota, Provinsi 12345</p>
    </div>
</div>
```

### 2. Edit Jadwal Penerimaan
Cari section `<!-- Jadwal Penerimaan -->`:
```html
<tr>
    <td>Pendaftaran Gelombang 1</td>
    <td>1 Maret 2026</td>
    <td>31 Maret 2026</td>
    <td>Kuota 150 mahasiswa</td>
</tr>
```

### 3. Edit Informasi Program
Cari section `<!-- Tentang Program -->` dan ubah teks sesuai kebutuhan

### 4. Edit Link Media Sosial
Cari section `.social-links` dan ubah `href="#"` dengan URL media sosial Anda:
```html
<a href="https://facebook.com/pertanian" title="Facebook">
    <i class="fab fa-facebook"></i>
</a>
```

## 🎯 Penambahan Fitur (Optional)

### Tambahkan Google Maps
Di section kontak, tambahkan sebelum `</section>`:
```html
<div class="map-container">
    <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>
```

### Tambahkan Chat Widget
Masukkan script Tawk.to atau sejenisnya sebelum `</body>`

## 📧 Konfigurasi Form Email

Saat ini form hanya menampilkan success message lokal. Untuk kirim email:

**Opsi 1: Menggunakan Formspree**
1. Daftar di https://formspree.io/
2. Buat form baru dan dapatkan endpoint
3. Ubah form action di HTML:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Opsi 2: Menggunakan EmailJS**
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
<script>
    emailjs.init('YOUR_PUBLIC_KEY');
</script>
```

**Opsi 3: Backend PHP**
Siapkan file `send-email.php` dan update form action.

## 🌍 Deploy ke Internet

### Opsi 1: Netlify (Gratis & Mudah)
1. Push folder ke GitHub
2. Connect ke Netlify
3. Selesai! Website live

### Opsi 2: GitHub Pages
1. Push ke repository GitHub
2. Enable GitHub Pages di settings
3. Website siap di `username.github.io/repo-name`

### Opsi 3: Hosting Berbayar
Upload ke hosting (Hostinger, Domainesia, etc.) via FTP

## 🖌️ Personalisasi Warna (Opsional)

Edit `css/style.css`, ubah warna di bagian `:root`:
```css
:root {
    --primary-color: #2d5016;        /* Warna utama (hijau) */
    --secondary-color: #558b2f;      /* Warna sekunder */
    --accent-color: #fbc02d;         /* Warna aksen (kuning) */
    --dark-color: #1b1b1b;          /* Text gelap */
    --light-color: #f5f5f5;         /* Background terang */
}
```

## 📱 Testing Responsive

Buka DevTools (F12) dan test di berbagai ukuran:
- Desktop: 1920x1080
- Tablet: 768x1024
- Mobile: 375x667

## 🐛 Troubleshooting

**Q: Foto tidak muncul?**
- A: Pastikan path file benar
- Gunakan URL absolut jika file lokal tidak bekerja

**Q: Website lambat?**
- A: Kompres ukuran foto
- Gunakan CDN untuk font & icon

**Q: Form tidak bekerja?**
- A: Check browser console (F12)
- Pilih metode email yang sesuai

## 📞 Support & Bantuan

Butuh bantuan?
- Cek kesalahan di browser console (F12)
- Baca dokumentasi HTML/CSS/JS
- Konsultasi ke developer

## 📄 Lisensi

Website ini bebas digunakan untuk universitas/institusi pendidikan.

---

**Dibuat dengan ❤️ untuk Fakultas Pertanian**
Versi: 1.0 | Update: 21 Februari 2026
