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
      ReceiptDialog.jsx      # Pratinjau struk thermal 80mm
  data/
    machinesData.js       # Data mesin washer/dryer
    ordersData.js         # Data order & pintasan
    posData.js            # Katalog layanan, item satuan, pembayaran POS
  pages/
    Dashboard.jsx         # Halaman utama (desain lengkap)
    KasirPos.jsx          # Halaman Kasir POS (desain lengkap)
    Placeholder.jsx       # Halaman modul berikutnya
  App.jsx                # Shell + routing
  main.jsx
  index.css
```

## Catatan

- Token desain (warna, spacing, tipografi) disalin persis dari mockup ke `tailwind.config.js`.
- Navigasi sidebar memakai `react-router-dom`; **Dashboard** dan **Kasir POS** (`/kasir-pos`) sudah lengkap, modul lain menampilkan placeholder dengan shell yang sama.
- Font (Plus Jakarta Sans, JetBrains Mono) dan Material Symbols dimuat dari Google Fonts.
