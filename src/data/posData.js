export const SERVICE_TABS = [
  { id: 'kiloan', label: 'Cuci Komplit Kiloan', icon: 'local_laundry_service' },
  { id: 'satuan', label: 'Cuci Satuan / Bijian', icon: 'dry_cleaning' },
  { id: 'dryclean', label: 'Dry Clean Premium', icon: 'diamond' },
  { id: 'setrika', label: 'Setrika Saja', icon: 'iron' },
]

export const SERVICE_TIERS = [
  {
    id: 'reguler',
    name: 'Reguler 2 Hari',
    cartLabel: 'Reguler (2 Hari)',
    desc: 'Cuci, Kering & Setrika Rapi',
    price: 8000,
    icon: 'bedtime',
    note: 'Min 3 kg',
  },
  {
    id: 'kilat',
    name: 'Kilat 1 Hari',
    cartLabel: 'Kilat (1 Hari)',
    desc: 'Selesai 24 Jam Pasti Bersih',
    price: 12000,
    icon: 'flash_on',
    note: 'Pilihan Kasir',
    popular: true,
    accentNote: true,
  },
  {
    id: 'express',
    name: 'Express 4 Jam',
    cartLabel: 'Express (4 Jam)',
    desc: 'Prioritas Antrean Mesin',
    price: 18000,
    icon: 'timer',
    note: 'Slot Tersedia (3)',
  },
]

export const UNIT_ITEMS = [
  {
    id: 'bed-cover',
    name: 'Bed Cover King',
    price: 35000,
    cartLabel: 'Bed Cover King Size (Satuan)',
    note: 'Kemasan Plastik Tebal Zipper',
  },
  {
    id: 'jas',
    name: 'Jas Formal / Blazer',
    price: 30000,
    cartLabel: 'Jas Formal / Blazer (Satuan)',
    note: 'Dry Clean Premium',
  },
  {
    id: 'sepatu',
    name: 'Sepatu Sneakers',
    price: 25000,
    cartLabel: 'Sepatu Sneakers (Satuan)',
    note: 'Pembersih Khusus Sepatu',
  },
  {
    id: 'helm',
    name: 'Helm Full Face',
    price: 25000,
    cartLabel: 'Helm Full Face (Satuan)',
    note: 'Cuci Bagian Dalam & Kaca',
  },
  {
    id: 'gaun',
    name: 'Gaun / Kebaya',
    price: 45000,
    cartLabel: 'Gaun / Kebaya (Satuan)',
    note: 'Handling Khusus Kain Halus',
  },
  {
    id: 'gorden',
    name: 'Gorden Tebal (m²)',
    price: 15000,
    cartLabel: 'Gorden Tebal (m²)',
    note: 'Dihitung Per Meter Persegi',
  },
]

export const FRAGRANCES = [
  { id: 'lavender', label: 'Lavender', subLabel: 'Breeze', icon: 'spa', surcharge: 0 },
  { id: 'ocean', label: 'Ocean Fresh', subLabel: 'Default Outlet', icon: 'water_drop', surcharge: 0 },
  { id: 'sakura', label: 'Sakura', subLabel: '+Rp2.000', icon: 'local_florist', surcharge: 2000 },
]

export const HYGIENE_ADDONS = [
  { id: 'antibakteri', label: 'Anti-Bakteri & Jamur' },
  { id: 'pelembut', label: 'Pelembut Ekstra' },
]

export const PAYMENT_STATUSES = [
  { id: 'lunas', label: 'Lunas Sekarang' },
  { id: 'dp', label: 'Uang Muka (DP)' },
  { id: 'nanti', label: 'Bayar Nanti' },
]

export const PAYMENT_METHODS = [
  { id: 'tunai', label: 'Tunai (Cash)', icon: 'payments' },
  { id: 'qris', label: 'QRIS Statis', icon: 'qr_code_2' },
  { id: 'bca', label: 'Transfer BCA', icon: 'account_balance' },
]
