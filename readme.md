# TOKOGI - Toko Top-Up Genshin Impact

Selamat datang di **TOKOGI**, sebuah toko top-up modern untuk para pemain Genshin Impact! Proyek ini menawarkan cara yang mudah untuk membeli item dalam game dengan proses pembayaran yang aman dan lancar. Dibangun menggunakan **Next.js**, **Node.js**, **Firebase**, dan **Midtrans**, TOKOGI memberikan pengalaman yang cepat dan andal bagi pengguna.

## 🚀 Demo & Repository
- **Demo Website:** [https://tokogi.xead.my.id/](https://tokogi.xead.my.id/) 
- **Demo API:** [https://api-toko-gi.vercel.app/(banner/product/categories)](https://api-toko-gi.vercel.app/) 
---

## 🛠️ Teknologi yang Digunakan
| **Teknologi**   | **Deskripsi**                                       |
|-----------------|-----------------------------------------------------|
| Next.js         | Framework client-side untuk membangun aplikasi web dinamis |
| Node.js         | Backend untuk menangani data statis                 |
| Firebase        | Layanan autentikasi                                 |
| Midtrans        | Integrasi gateway pembayaran                        |

---

## 📋 Fitur-Fitur
1. **Pembelian Item Genshin Impact**
   - Telusuri berbagai item dalam game dan lakukan pembelian langsung dari website.

2. **Pembayaran Aman dengan Midtrans**
   - Terintegrasi dengan Midtrans untuk proses pembayaran yang aman dan lancar.

3. **Registrasi & Login Pengguna**
   - Pengguna dapat melakukan registrasi dan login untuk mengelola pesanan dan pembelian.

4. **Detail Produk ke WhatsApp**
   - Hubungi penjual langsung melalui WhatsApp untuk informasi detail produk.

---

## 📸 Tangkapan Layar
| **Halaman**           | **Tangkapan Layar**                               |
|-----------------------|--------------------------------------------------|
| Halaman Utama         | ![Halaman Utama](https://github.com/JonathanZefanya/Toko-Genshin-Impact/blob/main/screenshot/utama.png) |
| Halaman Produk        | ![Halaman Produk](https://github.com/JonathanZefanya/Toko-Genshin-Impact/blob/main/screenshot/produk.png) |
| Halaman Registrasi    | ![Halaman Registrasi](https://github.com/JonathanZefanya/Toko-Genshin-Impact/blob/main/screenshot/regist.png) |
| Halaman Login         | ![Halaman Login](https://github.com/JonathanZefanya/Toko-Genshin-Impact/blob/main/screenshot/login.png) |
| Halaman Pembayaran    | ![Halaman Pembayaran](https://github.com/JonathanZefanya/Toko-Genshin-Impact/blob/main/screenshot/payment.png) |
| Kontak WhatsApp       | ![Kontak WhatsApp](https://github.com/JonathanZefanya/Toko-Genshin-Impact/blob/main/screenshot/detail.png) |

---

## 📚 Cara Menjalankan Proyek

### Prasyarat
Pastikan Anda telah menginstal:
- Node.js
- Firebase CLI

### Instalasi
```bash
# Clone repositori
git clone https://github.com/JonathanZefanya/API_Toko-Genshin-Impact.git

# Masuk ke direktori proyek
cd API_Toko-Genshin-Impact

# Instal dependensi
npm install
```

### Menjalankan Proyek
```bash
# Jalankan server pengembangan
npm run dev
```

---

## 🔐 Autentikasi dengan Firebase
Proyek ini menggunakan Firebase Authentication untuk login dan registrasi pengguna. Pastikan Anda mengonfigurasi pengaturan proyek Firebase di file `.env.local`.

### Contoh konfigurasi `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
```

---

## 💳 Integrasi Pembayaran dengan Midtrans
Midtrans digunakan sebagai gateway pembayaran untuk memproses transaksi dengan aman.

### Langkah-langkah Mengatur Midtrans:
1. Buat akun di [Midtrans](https://midtrans.com/).
2. Dapatkan kunci API Anda dari dashboard Midtrans.
3. Konfigurasikan kunci tersebut di backend Anda.

---
## Selamat Mengerjakan