export default function PosStatusBanner() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest px-space-md py-2.5 rounded-xl shadow-sm">
      <div className="flex items-center gap-space-sm">
        <div className="flex items-center gap-space-2xs px-space-xs py-1 rounded-full bg-surface-container-low text-on-surface">
          <span className="inline-block w-2 h-2 rounded-full bg-secondary-container"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-container">
            Kasir POS v3.4
          </span>
        </div>
        <span className="text-outline-variant font-label-md">|</span>
        <div className="flex items-center gap-space-xs text-on-surface">
          <span className="material-symbols-outlined text-base text-secondary">sensors</span>
          <span className="font-label-md text-label-md">Timbangan Digital:</span>
          <span className="font-receipt-mono text-label-md font-bold text-on-tertiary-container bg-surface-container-low px-2 py-0.5 rounded">
            COM3: AKTIF (Kalibrasi OK)
          </span>
        </div>
      </div>
      <div className="flex items-center gap-space-md">
        <div className="flex items-center gap-space-xs text-on-surface-variant">
          <span className="material-symbols-outlined text-base text-tertiary-fixed-dim">schedule</span>
          <span className="font-body-sm text-body-sm">Kapasitas Mesin Cuci:</span>
          <span className="font-label-md text-label-md text-on-surface">8/10 Aktif (80%)</span>
        </div>
        <button
          className="flex items-center gap-space-2xs px-space-sm py-1 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-sm">history</span>
          <span>Riwayat Sesi Ini (14 Nota)</span>
        </button>
      </div>
    </div>
  )
}
