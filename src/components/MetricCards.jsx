export default function MetricCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
      {/* Card 1: Revenue */}
      <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
        <div className="h-1 absolute top-0 left-0 right-0 bg-primary-container"></div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Pendapatan Hari Ini
            </span>
            <span className="font-data-metric text-data-metric text-on-surface mt-space-2xs">
              Rp 3.420.000
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-on-secondary-container">
            <span className="material-symbols-outlined">payments</span>
          </div>
        </div>
        <div className="flex flex-col gap-space-xs mt-space-md">
          <div className="flex items-center justify-between font-label-sm text-label-sm">
            <span className="text-secondary font-bold flex items-center gap-space-2xs">
              <span className="material-symbols-outlined text-xs">trending_up</span>+18.2% vs kemarin
            </span>
            <span className="text-on-surface-variant">Target: Rp 4.5M (76%)</span>
          </div>
          <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
            <div className="bg-primary-container h-full rounded-full" style={{ width: '76%' }}></div>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant pt-space-2xs">
            42 nota selesai • 6 pending pembayaran
          </span>
        </div>
      </div>

      {/* Card 2: Volume */}
      <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
        <div className="h-1 absolute top-0 left-0 right-0 bg-secondary"></div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Volume Cucian Hari Ini
            </span>
            <div className="flex items-baseline gap-space-2xs mt-space-2xs">
              <span className="font-data-metric text-data-metric text-on-surface">186.5</span>
              <span className="font-headline-sm text-headline-sm text-on-surface-variant">kg</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined">scale</span>
          </div>
        </div>
        <div className="flex flex-col gap-space-xs mt-space-md">
          <div className="flex items-center justify-between font-label-sm text-label-sm">
            <span className="text-secondary font-bold flex items-center gap-space-2xs">
              <span className="material-symbols-outlined text-xs">trending_up</span>+12.4% harian
            </span>
            <span className="text-on-surface-variant font-receipt-mono text-receipt-mono">
              142kg / 28pcs
            </span>
          </div>
          <div className="p-space-xs rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
            <span>
              Kiloan: <strong className="text-on-surface">142 kg</strong>
            </span>
            <span>
              Satuan: <strong className="text-on-surface">28 pcs</strong>
            </span>
            <span>
              Dry: <strong className="text-on-surface">16.5 kg</strong>
            </span>
          </div>
        </div>
      </div>
      {/* Card 3: Status Order & Queue */}
      <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
        <div className="h-1 absolute top-0 left-0 right-0 bg-tertiary-fixed-dim"></div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Status Order & Antrian
            </span>
            <span className="font-data-metric text-data-metric text-on-surface mt-space-2xs">
              24 Order
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-tertiary-fixed/40 flex items-center justify-center text-on-tertiary-fixed-variant">
            <span className="material-symbols-outlined">inventory</span>
          </div>
        </div>
        <div className="flex flex-col gap-space-xs mt-space-md">
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Sebaran Siklus Pengerjaan:
          </span>
          <div className="flex flex-wrap gap-space-2xs">
            <span className="px-space-xs py-space-2xs rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
              Terima: 5
            </span>
            <span className="px-space-xs py-space-2xs rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
              Cuci: 7
            </span>
            <span className="px-space-xs py-space-2xs rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm">
              Kering: 4
            </span>
            <span className="px-space-xs py-space-2xs rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">
              Setrika: 5
            </span>
            <span className="px-space-xs py-space-2xs rounded bg-secondary/20 text-secondary font-label-sm text-label-sm">
              Siap: 3
            </span>
          </div>
        </div>
      </div>

      {/* Card 4: Loyalty & Customer */}
      <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
        <div className="h-1 absolute top-0 left-0 right-0 bg-secondary-container"></div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Kepuasan & Member
            </span>
            <span className="font-data-metric text-data-metric text-on-surface mt-space-2xs">
              482 Member
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface">
            <span className="material-symbols-outlined">stars</span>
          </div>
        </div>
        <div className="flex flex-col gap-space-xs mt-space-md">
          <div className="flex items-center justify-between font-label-sm text-label-sm">
            <span className="text-secondary font-bold flex items-center gap-space-2xs">
              <span className="material-symbols-outlined text-xs">person_add</span>+8 Hari Ini
            </span>
            <span className="text-on-surface-variant">Rating 4.9/5.0</span>
          </div>
          <div className="p-space-xs rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
            <span>Poin Ditukar:</span>
            <span className="font-receipt-mono text-receipt-mono font-bold text-on-surface">
              1.450 CKP
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
