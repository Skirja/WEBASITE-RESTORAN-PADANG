# RM Padang Sejati - Website Restoran

Proyek ini adalah website untuk RM Padang Sejati, sebuah restoran yang menyajikan masakan Padang. Website ini dibangun menggunakan HTML, CSS (dengan Tailwind CSS), dan JavaScript.

## Fitur Utama

1. Halaman Beranda dengan hero section dan pilihan metode pemesanan
2. Daftar Menu dengan fitur filter berdasarkan kategori
3. Sistem pemesanan untuk Dine-in, Takeaway, dan Delivery
4. Halaman Login dan Registrasi
5. Halaman Checkout untuk setiap metode pemesanan

## Struktur Proyek

```
RM-Padang-Sejati/
│
├── index.html
├── script.js
├── styles.css
│
├── pages/
│   ├── booking-dinein.html
│   ├── daftar-menu.html
│   ├── delivery-checkout.html
│   ├── login.html
│   ├── pemilihan-menu.html
│   ├── register.html
│   └── takeaway-checkout.html
│
├── scripts/
│   ├── booking-dinein.js
│   ├── daftar-menu.js
│   ├── delivery-checkout.js
│   ├── login.js
│   ├── pemilihan-menu.js
│   ├── register.js
│   └── takeaway-checkout.js
│
└── assets/
    └── [gambar-gambar]
```

## Manipulasi DOM dan Fungsionalitas JavaScript

### 1. script.js (Halaman Utama)

- **Penyimpanan Metode Pemesanan**: Menggunakan `localStorage` untuk menyimpan metode pemesanan yang dipilih pengguna.
- **Efek Scroll Navbar**: Mengubah tampilan navbar saat halaman di-scroll.
- **Render Metode Pemesanan**: Membuat elemen DOM untuk setiap metode pemesanan secara dinamis.
- **Animasi Testimonial**: Mengimplementasikan scrolling otomatis untuk bagian testimonial.

### 2. daftar-menu.js

- **Render Menu**: Menampilkan item menu secara dinamis berdasarkan data yang tersedia.
- **Filter Kategori**: Memungkinkan pengguna untuk memfilter menu berdasarkan kategori.
- **Update Statistik**: Menghitung dan menampilkan jumlah makanan dan minuman yang tersedia.

### 3. pemilihan-menu.js

- **Render Menu**: Menampilkan item menu yang dapat dipilih.
- **Manajemen Keranjang**: Menambah, mengurangi, dan menghapus item dari keranjang belanja.
- **Responsive Design**: Menampilkan keranjang belanja yang berbeda untuk tampilan desktop dan mobile.

### 4. booking-dinein.js, delivery-checkout.js, takeaway-checkout.js

- **Form Handling**: Menangani submit form dan validasi input.
- **Konfirmasi Popup**: Menampilkan popup konfirmasi setelah form disubmit.
- **Date Picker**: Menggunakan Flatpickr untuk input tanggal yang lebih user-friendly.

### 5. login.js dan register.js

- **Form Handling**: Menangani submit form dan simulasi proses autentikasi.
- **Toggle Password Visibility**: Memungkinkan pengguna untuk menampilkan/menyembunyikan password.
- **Animasi Elemen Dekoratif**: Menambahkan animasi pada ikon-ikon dekoratif.

## Penggunaan Tailwind CSS

Proyek ini memanfaatkan Tailwind CSS untuk styling, yang memungkinkan pengembangan UI yang cepat dan konsisten. Kelas-kelas Tailwind digunakan secara ekstensif dalam markup HTML untuk mengatur layout, warna, responsivitas, dan lainnya.

## Responsivitas

Website ini dirancang untuk responsif di berbagai ukuran layar:
- Menggunakan Flexbox dan Grid untuk layout yang fleksibel.
- Implementasi navbar mobile untuk layar kecil.
- Penyesuaian ukuran font dan padding untuk readability yang lebih baik di perangkat mobile.

## Penjelasan Detail JavaScript

### 1. script.js (Halaman Utama)

- `storeOrderMethod(method)`: Menyimpan metode pemesanan yang dipilih ke localStorage.
- `orderMethods`: Array yang berisi informasi tentang metode pemesanan (Dine-in, Takeaway, Delivery).
- `createTestimonialElement(testimonial)`: Membuat elemen DOM untuk setiap testimonial.
- `populateTestimonials()`: Mengisi container testimonial dengan elemen-elemen testimonial.
- `checkScroll()`: Memeriksa posisi scroll testimonial untuk efek loop.
- `scrollTestimonials()`: Menganimasikan scroll testimonial.

### 2. daftar-menu.js

- `menuItems`: Array yang berisi data menu restoran.
- `categories`: Array yang berisi kategori menu.
- `activeCategory`: Variabel yang menyimpan kategori aktif saat ini.
- `renderCategories()`: Menampilkan tombol filter kategori.
- `renderMenuItems()`: Menampilkan item menu berdasarkan kategori aktif.
- `setActiveCategory(category)`: Mengubah kategori aktif dan merender ulang menu.
- `updateStats()`: Menghitung dan menampilkan jumlah makanan dan minuman.

### 3. pemilihan-menu.js

- `cart`: Array yang menyimpan item dalam keranjang belanja.
- `isMobile`: Boolean yang menandakan apakah tampilan saat ini mobile atau desktop.
- `renderMenuItems()`: Menampilkan item menu yang dapat dipilih.
- `renderCart()`: Menampilkan isi keranjang belanja.
- `addToCart(id)`: Menambahkan item ke keranjang.
- `updateQuantity(id, newQuantity)`: Mengubah jumlah item dalam keranjang.
- `checkIsMobile()`: Memeriksa ukuran layar dan menyesuaikan tampilan.

### 4. booking-dinein.js

- `form.addEventListener('submit', ...)`: Menangani submit form pemesanan.
- `rotateElement(element, duration, direction)`: Menganimasikan rotasi elemen dekoratif.

### 5. delivery-checkout.js dan takeaway-checkout.js

- `form.addEventListener('submit', ...)`: Menangani submit form checkout.
- `proceedToPaymentButton.addEventListener('click', ...)`: Menangani aksi lanjut ke pembayaran.

### 6. login.js dan register.js

- `togglePasswordButton.addEventListener('click', ...)`: Menangani toggle visibilitas password.
- `form.addEventListener('submit', ...)`: Menangani submit form login/registrasi.
- `rotateElement(element, duration, direction)`: Menganimasikan rotasi elemen dekoratif.
- `bounceElement(element, distance, duration)`: Menganimasikan efek bounce pada elemen dekoratif.

Setiap file JavaScript menggunakan manipulasi DOM untuk merender konten dinamis, menangani interaksi pengguna, dan menciptakan animasi UI. Penggunaan `localStorage` memungkinkan penyimpanan data sementara di sisi klien, sementara simulasi API calls mendemonstrasikan bagaimana aplikasi akan berinteraksi dengan backend sebenarnya.