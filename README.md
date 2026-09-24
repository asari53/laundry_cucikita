# Laundry CuciKita — Dashboard Operasional

Website dashboard monitoring operasional outlet laundry, dibangun dengan **React + Vite + Tailwind CSS** berdasarkan desain di `design/dashboard_utama_monitoring_operasional/code.html`.

## Menjalankan

```bash
npm install
npm run dev      # development server (http://localhost:5173)
npm run build    # production build ke dist/
npm run preview  # preview hasil build
```

## Struktur

```
src/
  components/
    Sidebar.jsx           # Navigasi operasional (kiri)
    TopHeader.jsx         # Header atas (search, shift, profil)
    GreetingBanner.jsx    # Sapaan & aksi cepat
    MetricCards.jsx       # 4 kartu metrik harian
    RevenueChart.jsx      # Tren pendapatan & volume (SVG)
    MachineTelemetry.jsx  # Status live washer & dryer IoT
    QuickActions.jsx      # Pintasan operasional
    CriticalAlerts.jsx    # Peringatan kritis
    CashDrawer.jsx        # Laci kasir shift
    ActiveOrderTable.jsx  # Tabel antrean order aktif
    pos/
      PosStatusBanner.jsx    # Banner status POS (timbangan, mesin, sesi)
      CustomerProfileCard.jsx # Kartu pelanggan & loyalty
      OrderList.jsx          # Daftar order tersimpan di Supabase
      ReceiptDialog.jsx      # Pratinjau struk thermal 80mm
  data/
    machinesData.js       # Data mesin washer/dryer
    ordersData.js         # Data order & pintasan
    posData.js            # Katalog layanan, item satuan, pembayaran POS
  lib/
    supabase.js           # Client Supabase (dari variabel .env)
  services/
    ordersService.js      # createOrder() & listOrders() ke Supabase
  pages/
    Dashboard.jsx         # Halaman utama (desain lengkap)
    KasirPos.jsx          # Halaman Kasir POS (desain lengkap)
    Placeholder.jsx       # Halaman modul berikutnya
  App.jsx                # Shell + routing
  main.jsx
  index.css
supabase/
  schema.sql             # Skema database orders + RLS policy
```

## Catatan

- Token desain (warna, spacing, tipografi) disalin persis dari mockup ke `tailwind.config.js`.
- Navigasi sidebar memakai `react-router-dom`; **Dashboard** dan **Kasir POS** (`/kasir-pos`) sudah lengkap, modul lain menampilkan placeholder dengan shell yang sama.

## Koneksi Supabase

Halaman `/kasir-pos` menyimpan order ke tabel `public.orders` di Supabase dan menampilkan daftar ordernya.

1. Isi kredensial di file `.env` (dapat ditemukan di Supabase Dashboard → *Project Settings* → *API*):

   ```bash
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
   ```

2. Buat skema database: Supabase Dashboard → **SQL Editor** → jalankan seluruh isi `supabase/schema.sql` (tabel `orders`, index, dan RLS policy untuk role `anon`).

3. Restart dev server:

   ```bash
   npm run dev
   ```

4. Buka `http://localhost:5173/kasir-pos`, klik **Proses & Cetak Nota** — order tersimpan, struk thermal muncul, dan daftar order di bawah tabel ikut ter-refresh.

> Catatan: key `anon` bersifat publik dan memang dipakai dari browser; akses dibatasi lewat Row Level Security (hanya `SELECT` & `INSERT` pada tabel `orders`).
- Font (Plus Jakarta Sans, JetBrains Mono) dan Material Symbols dimuat dari Google Fonts.
