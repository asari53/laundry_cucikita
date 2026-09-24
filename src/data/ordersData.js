export const ACTIVE_ORDERS = [
  {
    nota: '#CK-0045',
    striped: false,
    customer: 'Hendro Kusumo',
    tier: {
      label: 'Gold Member',
      className:
        'w-max px-space-xs py-space-2xs bg-surface-container-high text-on-surface rounded font-label-sm text-label-sm font-semibold',
    },
    service: 'Cuci Komplit Kilat 1 Hari',
    load: '4.8 kg',
    status: {
      label: 'Cuci (Washer #02)',
      className: 'bg-secondary-fixed text-on-secondary-fixed-variant',
      dotClass: 'bg-secondary',
    },
    allocation: 'Meja Sortir 1',
    pickup: {
      icon: 'store',
      label: 'Ambil Sendiri',
      className: 'text-on-surface',
      iconClass: 'text-on-surface-variant',
    },
    total: 'Rp 57.600',
    payment: {
      label: 'Lunas (QRIS)',
      className: 'bg-surface-container-high text-on-surface font-semibold',
    },
  },
  {
    nota: '#CK-0046',
    striped: true,
    customer: 'Siti Aminah',
    tier: {
      label: 'Reguler',
      className:
        'w-max px-space-xs py-space-2xs bg-surface-container-low text-on-surface-variant rounded font-label-sm text-label-sm',
    },
    service: 'Bed Cover Super King',
    load: '1 Pcs (Satuan)',
    status: {
      label: 'Kering (Dryer #01)',
      className: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
      dotClass: 'bg-on-tertiary-container',
    },
    allocation: 'Rak B-02',
    pickup: {
      icon: 'local_shipping',
      label: 'Kurir Antar',
      className: 'text-secondary font-medium',
      iconClass: '',
    },
    total: 'Rp 35.000',
    payment: {
      label: 'DP Rp 20.000',
      className: 'bg-surface-container-highest text-on-surface',
    },
  },
  {
    nota: '#CK-0047',
    striped: false,
    customer: 'dr. Hendra Kusuma',
    tier: {
      label: 'Platinum',
      className:
        'w-max px-space-xs py-space-2xs bg-secondary-fixed text-on-secondary-fixed-variant rounded font-label-sm text-label-sm font-bold',
    },
    service: 'Jas Formal + Kemeja',
    load: '3 Pcs (Dry Clean)',
    status: {
      label: 'Setrika Steam',
      className: 'bg-surface-container-highest text-on-surface',
      dotClass: 'bg-on-surface',
    },
    allocation: 'Meja Uap #1',
    pickup: {
      icon: 'local_shipping',
      label: 'Antar Jemput',
      className: 'text-secondary font-medium',
      iconClass: '',
    },
    total: 'Rp 65.000',
    payment: {
      label: 'Lunas (BCA)',
      className: 'bg-surface-container-high text-on-surface font-semibold',
    },
  },
  {
    nota: '#CK-0048',
    striped: true,
    customer: 'Kurnia Mega',
    tier: {
      label: 'Reguler',
      className:
        'w-max px-space-xs py-space-2xs bg-surface-container-low text-on-surface-variant rounded font-label-sm text-label-sm',
    },
    service: 'Cuci Kiloan Reguler',
    load: '6.2 kg',
    status: {
      label: 'Diterima / Antri',
      className: 'bg-surface-container-low text-on-surface-variant',
      dotClass: 'bg-on-surface-variant',
    },
    allocation: 'Antrian Masuk',
    pickup: {
      icon: 'store',
      label: 'Ambil Sendiri',
      className: 'text-on-surface',
      iconClass: 'text-on-surface-variant',
    },
    total: 'Rp 49.600',
    payment: {
      label: 'Bayar Nanti',
      className: 'bg-error-container text-on-error-container font-semibold',
    },
  },
]

export const QUICK_ACTIONS = [
  { icon: 'photo_camera', label: 'Foto Timbangan' },
  { icon: 'shelves', label: 'Cari Rak Simpan' },
  { icon: 'chat', label: 'WhatsApp Massal' },
  { icon: 'point_of_sale', label: 'Tutup Kasir / Kas' },
]
