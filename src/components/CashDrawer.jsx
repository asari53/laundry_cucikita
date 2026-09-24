export default function CashDrawer() {
  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary text-xl">
            account_balance_wallet
          </span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            Laci Kasir Shift Pagi
          </h2>
        </div>
        <span className="font-receipt-mono text-receipt-mono text-on-surface-variant">
          Drawer #01
        </span>
      </div>
      <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-lg">
        <div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
          <span>Modal Kas Awal:</span>
          <span className="font-receipt-mono text-receipt-mono text-on-surface">Rp 500.000</span>
        </div>
        <div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
          <span>Tunai Masuk (Kasir):</span>
          <span className="font-receipt-mono text-receipt-mono text-on-surface">
            + Rp 1.450.000
          </span>
        </div>
        <div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
          <span>Pengeluaran Kas Kecil:</span>
          <span className="font-receipt-mono text-receipt-mono text-error">- Rp 45.000</span>
        </div>
        <div className="pt-space-xs mt-space-2xs flex justify-between items-center font-label-md text-label-md">
          <span className="text-on-surface font-bold">Total Fisik Laci:</span>
          <span className="font-receipt-mono text-headline-sm text-primary-container font-bold">
            Rp 1.905.000
          </span>
        </div>
      </div>
      <button
        className="w-full py-space-sm rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center justify-center gap-space-xs"
        type="button"
      >
        <span className="material-symbols-outlined text-sm">calculate</span>
        <span>Hitung & Cocokkan Uang Fisik</span>
      </button>
    </div>
  )
}