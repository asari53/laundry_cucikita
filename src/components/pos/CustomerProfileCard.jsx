export default function CustomerProfileCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
      <div className="flex items-center justify-between flex-wrap gap-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary">person_search</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Data Pelanggan</h2>
          <span className="bg-surface-container-low text-on-surface-variant font-receipt-mono text-label-sm px-2 py-0.5 rounded">
            F4
          </span>
        </div>
        <div className="flex items-center gap-space-xs">
          <button
            className="px-space-sm py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors flex items-center gap-space-2xs"
            type="button"
          >
            <span className="material-symbols-outlined text-sm">qr_code_scanner</span>
            <span>Scan QR Member</span>
          </button>
          <button
            className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-opacity-90 transition-all flex items-center gap-space-2xs shadow-sm active:scale-95"
            type="button"
          >
            <span className="material-symbols-outlined text-sm">person_add</span>
            <span>+ Pelanggan Baru</span>
          </button>
        </div>
      </div>

      {/* Active Customer Profile Card */}
      <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-headline-md text-headline-md shadow-sm">
            BS
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-md text-headline-md text-on-surface font-semibold">
                Budi Santoso
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm uppercase tracking-wide">
                <span className="material-symbols-outlined text-xs text-secondary">
                  workspace_premium
                </span>
                Gold Member
              </span>
            </div>
            <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm mt-0.5">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">call</span>
                0812-8899-1234
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">location_on</span>
                Jl. Tebet Barat Dalam IV No. 14, Jaksel
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-space-lg w-full md:w-auto justify-between md:justify-end bg-surface-container-lowest px-space-md py-2 rounded-lg">
          <div className="flex flex-col text-right">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Poin CuciKita</span>
            <span className="font-headline-md text-headline-md font-bold text-secondary">420 pts</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Total Transaksi
            </span>
            <span className="font-headline-md text-headline-md font-bold text-on-surface">
              38 Order
            </span>
          </div>
          <button
            className="p-1.5 rounded-md hover:bg-surface-container text-on-surface-variant"
            title="Ganti Pelanggan"
            type="button"
          >
            <span className="material-symbols-outlined text-sm">swap_horiz</span>
          </button>
        </div>
      </div>
    </div>
  )
}
