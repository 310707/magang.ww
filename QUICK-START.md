# 🚀 QUICK START GUIDE

Selamat! Website penerimaan mahasiswa Anda sudah siap. Ikuti panduan berikut untuk memulai.

## ⚡ 5 Menit Setup

### Langkah 1: Buka Website di Browser
Pilih satu metode di bawah:

#### METODE A: Double-Click (Termudah, Tapi Gambar Tidak Muncul)
1. Buka folder `Penerimaan-Mahasiswa-Pertanian/`
2. Double-click file `index.html`
3. Website terbuka di browser

❌ **Kekurangan:** Gambar lokal tidak muncul (CORS issue)

#### METODE B: Python Server (RECOMMENDED)
Buka terminal/PowerShell di folder project:

```powershell
# Windows - Python 3.x
python -m http.server 8000

# Atau jika tidak ada python, skip ke METODE C
```

Kemudian buka browser: **http://localhost:8000**

✅ **Kelebihan:** Semua fitur langsung jalan

#### METODE C: VS Code Live Server (Sangat Mudah)
1. **Buka folder di VS Code**
   - File → Open Folder → Pilih folder project

2. **Install Extension**
   - Klik Extensions (Ctrl+Shift+X)
   - Search: "Live Server"
   - Install dari Ritwick Dey

3. **Jalankan**
   - Klik kanan di `index.html`
   - Pilih "Open with Live Server"
   - Otomatis buka di browser

✅ **Kelebihan:** Paling mudah & otomatis refresh

### Langkah 2: Edit Informasi

Buka `index.html` dengan text editor (VS Code/Notepad):

```html
<!-- Cari dan ganti bagian ini -->
<p>(021) 123-4567</p>          ← Ganti dengan nomor Anda
<p>admisi@pertanian.ac.id</p>  ← Ganti email Anda
```

### Langkah 3: Tambah Foto

**Pilihan 1: Pakai URL Gratis (Cepat)**

Edit `index.html`:

```html
<!-- Cari baris ini -->
<img src="images/program-agribisnis.jpg" alt="Program Agribisnis">

<!-- Ganti dengan URL dari Unsplash -->
<img src="https://images.unsplash.com/photo-1625246333220-71f19c0f4cb0?w=800&h=600&fit=crop" alt="Program Agribisnis">
```

📌 Lihat **PANDUAN-FOTO.md** untuk banyak contoh URL gratis

**Pilihan 2: Upload Foto Asli (Lebih Baik)**

1. Siapkan foto JPG/PNG
2. Compres ukuran ke max 500KB
3. Copy ke folder `/images/`
4. Beri nama: `kampus-1.jpg`, `kampus-2.jpg`, dst
5. Edit `index.html` jika nama file berbeda

### Langkah 4: Ubah Data Program

**Edit Jadwal Penerimaan:**

```html
<!-- Di section Jadwal, cari table -->
<tr>
    <td>Pendaftaran Gelombang 1</td>
    <td>1 Maret 2026</td>          ← Ganti tanggal
    <td>31 Maret 2026</td>         ← Ganti tanggal
    <td>Kuota 150 mahasiswa</td>   ← Ganti kuota
</tr>
```

**Edit Kontak:**

```html
<!-- Cari bagian kontak -->
<p>Jl. Pertanian No. 123</p>     ← Ganti alamat
<p>Kota, Provinsi 12345</p>      ← Ganti kota
```

## 📱 Uji di Berbagai Perangkat

Buka DevTools (F12) dan test:

- **Desktop:** 1920x1080 ✓
- **Tablet:** 768x1024 ✓
- **Mobile:** 375x667 ✓

Responsif? **Semua terlihat bagus!** ✅

## 🎨 Customization (Optional)

### Ubah Warna Tema

Edit `css/style.css`:

```css
:root {
    --primary-color: #2d5016;      /* Hijau tua (Utama) */
    --secondary-color: #558b2f;    /* Hijau standar */
    --accent-color: #fbc02d;       /* Kuning (Destress) */
}
```

**Contoh warna alternatif:**

Biru profesional:
```css
--primary-color: #1565c0;
--secondary-color: #1976d2;
--accent-color: #42a5f5;
```

Merah energik:
```css
--primary-color: #c62828;
--secondary-color: #d32f2f;
--accent-color: #ff7043;
```

### Ubah Font

Edit `css/style.css`, baris pertama di `body`:

```css
body {
    font-family: 'Georgia', serif;  /* Serif formal */
}
```

## 📧 Setup Form Email

### Opsi A: Formspree (Free & Mudah)

1. Kunjungi: https://formspree.io/
2. Buat akun & form baru
3. Dapat ID form: `YOUR_ID`
4. Edit `index.html`:

```html
<!-- Cari form tag -->
<form id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
    <!-- Ubah id="contactForm" menjadi -->
    <form action="https://formspree.io/f/YOUR_ID" method="POST">
</form>
```

5. Test: Isi form → klik Kirim → check email ✓

### Opsi B: EmailJS (Gratis, No Backend)

```javascript
// Tambahkan di atas tag </body> di index.html
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
<script>
    emailjs.init("YOUR_PUBLIC_KEY");
</script>
```

Daftar di: https://www.emailjs.com/

## 🌍 Deploy ke Internet

### Opsi A: Netlify (RECOMMENDED - Gratis)

1. Push folder ke GitHub
2. Kunjungi: https://netlify.com
3. "New site from Git"
4. Pilih GitHub repo
5. Deploy... ✨ **Website live!**

📌 Gratis custom domain juga

### Opsi B: GitHub Pages (Gratis)

```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

Set GitHub Pages di Settings → Pages → main branch

Akses: `username.github.io/repo-name`

### Opsi C: Hosting Tradisional

Tanya hosting (Hostinger, etc):
- Upload via FTP
- Connect domain
- Website online ✓

## ✅ Checklist Sebelum Deploy

- [ ] Ganti nomor telepon & email
- [ ] Tambah foto (lokal atau URL)
- [ ] Edit jadwal penerimaan
- [ ] Test di mobile & desktop
- [ ] Form email bekerja
- [ ] Social media links update
- [ ] Semua links berfungsi
- [ ] No broken images

## 🆘 Troubleshooting

| Problem | Solusi |
|---------|--------|
| Foto tidak muncul | Gunakan URL Unsplash sementara, atau check path file |
| Website lambat | Kompres foto ukuran lebih kecil |
| UI tidak rapi | Clear cache browser (Ctrl+Shift+Delete) |
| Form tidak kirim | Check browser console (F12) untuk error |
| Responsive jelek | Buka DevTools, check mobile view |
| Hamburger menu tidak jalan | Pastikan CSS & JS loaded (F12 → Network) |

## 📞 Support

**Browser Console Error?**
1. Tekan F12 → Console tab
2. Screenshot error
3. Search error di Google
4. Atau tanya di forum

**File tidak ada?**
1. Check nama file (case-sensitive)
2. Check path folder
3. Pastikan folder `/images/` ada

**Butuh Bantuan Lebih?**

Baca file:
- `README.md` - Dokumentasi lengkap
- `PANDUAN-FOTO.md` - Cara detail tambah foto
- File HTML/CSS/JS - Baca comment di dalam code

## 🎓 Belajar Lebih Lanjut

**HTML:**
- https://www.w3schools.com/html/

**CSS:**
- https://www.w3schools.com/css/

**JavaScript:**
- https://www.w3schools.com/js/

**Web Development:**
- https://www.codecademy.com/
- https://www.udemy.com/

## 🎉 Selesai!

Website Anda sudah siap! Kini:

✅ Promosikan di media sosial
✅ Bagikan ke calon mahasiswa
✅ Monitor traffic
✅ Update info secara berkala

---

## 📝 Custom Code Tips

### Tambah Section Baru

Copy template:
```html
<section id="section-baru" class="section-baru">
    <div class="container">
        <h2 class="section-title">Judul Section</h2>
        <p>Isi konten di sini</p>
    </div>
</section>
```

Add CSS di `style.css`:
```css
.section-baru {
    background: var(--light-color);
    padding: 60px 0;
}
```

Update navbar link di `index.html`:
```html
<li><a href="#section-baru">Section Baru</a></li>
```

### Tambah Icon

Sudah include Font Awesome. Cari icon di:
https://fontawesome.com/icons

Contoh:
```html
<i class="fas fa-leaf"></i>        <!-- Daun -->
<i class="fas fa-graduation-cap"></i> <!-- Topi graduasi -->
<i class="fas fa-users"></i>       <!-- Orang -->
```

### Video Background

Update hero section:
```css
.hero {
    background: url('video.mp4') center/cover;
}
```

**Atau pakai HTML5 Video:**
```html
<video autoplay muted loop style="width:100%;">
    <source src="video.mp4" type="video/mp4">
</video>
```

---

**🎊 SELAMAT MEMBUAT WEBSITE! 🎊**

Versi: 1.0 | Dibuat: 21 Feb 2026
