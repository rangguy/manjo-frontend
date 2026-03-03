# Manjo QR Frontend

Frontend untuk integrasi QR API.
Project ini dibuat menggunakan Create React App.

---

## 📦 Setup Project

### 1. Install Dependencies

```bash
npm install
```

---

## ⚙️ Konfigurasi Environment

### Langkah Penting

1. Copy file environment berikut:

**Mac / Linux**

```bash
cp .env.development.copy.local .env.development.local
```

**Windows (PowerShell)**

```powershell
copy .env.development.copy.local .env.development.local
```

2. Buka file `.env.development.local` lalu isi sesuai backend:

```env
REACT_APP_API_KEY=isi_dengan_api_key_backend
REACT_APP_ROUTE=http://localhost:8080/api/v1/qr
```

### Keterangan

* `REACT_APP_API_KEY` → sesuaikan dengan API Key yang ada di backend
* `REACT_APP_ROUTE` → sesuaikan dengan URL backend

Contoh:

```
REACT_APP_ROUTE=http://localhost:8080/api/v1/qr
```

⚠️ Setelah mengubah file `.env`, pastikan restart server dengan menghentikan `npm start` lalu jalankan kembali.

---

## 🚀 Menjalankan Project

```bash
npm start
```

Aplikasi akan berjalan di:

```
http://localhost:3000
```

---

## 🏗 Build Production

```bash
npm run build
```

Hasil build akan berada di folder:

```
/build
```

---

## ❗ Troubleshooting

Jika `process.env.REACT_APP_ROUTE` atau `REACT_APP_API_KEY` bernilai `undefined`:

* Pastikan file `.env.development.local` berada di root project
* Pastikan nama variable diawali dengan `REACT_APP_`
* Restart ulang server dengan `npm start`
