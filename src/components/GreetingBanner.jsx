export default function GreetingBanner() {
  return (
    <section className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-xs flex-wrap">
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            Selamat Pagi, Sari Permata
          </h1>
          <span className="text-xl">👋</span>
          <span className="px-space-xs py-space-2xs bg-secondary/10 text-secondary rounded-full font-label-sm text-label-sm uppercase tracking-wider">
            Shift 01 Aktif
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Berikut ringkasan performa operasional & transaksi outlet Tebet hari ini (
          <span className="font-receipt-mono text-receipt-mono text-on-surface">
            Selasa, 28 Oktober 2023
          </span>
          )
        </p>
        <div className="flex items-center gap-space-sm pt-space-xs flex-wrap">
          <div className="flex items-center gap-space-xs px-space-sm py-space-2xs rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
            <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
            <span>
              Status:{' '}
              <strong className="text-on-surface font-semibold">Normal (8/10 Mesin Aktif)</strong>
            </span>
          </div>
          <div className="flex items-center gap-space-xs px-space-sm py-space-2xs rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-sm text-secondary">verified</span>
            <span>
              SLA Tepat Waktu: <strong className="text-on-surface font-semibold">98.4%</strong>
            </span>
          </div>
          <div className="flex items-center gap-space-xs px-space-sm py-space-2xs rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-sm text-on-surface-variant">
              schedule
            </span>
            <span>
              Shift Kasir:{' '}
              <strong className="text-on-surface font-semibold">Pagi (07:00 - 15:00 WIB)</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-space-sm self-start xl:self-auto shrink-0">
        <button
          className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md"
          type="button"
        >
          <span className="material-symbols-outlined text-headline-sm">download</span>
          <span>Download Laporan Harian (PDF)</span>
        </button>
        <button
          className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary hover:bg-secondary transition-colors font-label-md text-label-md shadow-sm"
          type="button"
        >
          <span className="material-symbols-outlined text-headline-sm">add_circle</span>
          <span>+ Buat Transaksi Baru (F2)</span>
        </button>
      </div>
    </section>
  )
}
