export default function CriticalAlerts() {
  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-error text-xl">warning</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Peringatan Kritis</h2>
        </div>
        <span className="px-space-xs py-space-2xs rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
          3 Perlu Tindakan
        </span>
      </div>

      {/* Alert 1 */}
      <div className="p-space-sm rounded-lg bg-error-container/40 flex flex-col gap-space-2xs">
        <div className="flex items-start justify-between">
          <span className="font-label-sm text-label-sm text-error font-bold uppercase">
            Restock Bahan Baku
          </span>
          <span className="font-receipt-mono text-receipt-mono text-on-surface-variant">
            Stok Rendah
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface">
          Parfum <strong>Ocean Fresh</strong> tersisa <strong>1.8 Liter</strong> (estimasi habis ~2
          hari).
        </p>
        <button className="self-end mt-space-2xs font-label-sm text-label-sm text-error font-semibold underline" type="button">
          Buat PO Bahan Baku →
        </button>
      </div>

      {/* Alert 2 */}
      <div className="p-space-sm rounded-lg bg-surface-container-high flex flex-col gap-space-2xs">
        <div className="flex items-start justify-between">
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
            Prioritas Express SLA
          </span>
          <span className="font-receipt-mono text-receipt-mono text-error font-bold">
            35m Tersisa
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface">
          Order <strong>#CK-0038 (Budi Santoso)</strong> Express 4 Jam perlu segera disetrika &
          packing.
        </p>
        <button className="self-end mt-space-2xs font-label-sm text-label-sm text-secondary font-semibold underline" type="button">
          Prioritaskan Antrean →
        </button>
      </div>

      {/* Alert 3 */}
      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-2xs">
        <div className="flex items-start justify-between">
          <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">
            Maintenance Rutin
          </span>
          <span className="font-receipt-mono text-receipt-mono text-on-surface-variant">
            Dryer #02
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Pembersihan filter serat wajib dilakukan dalam 2 siklus lagi.
        </p>
      </div>
    </div>
  )
}