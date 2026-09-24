const PROFILE_SRC =
  'https://lh3.googleusercontent.com/aida/AEtjO1XmcdaKdlGngUWqEYbeSq24jKrva0pEXw5hszUPd8O0NtHEU-U9SMus_GarhgNaL6Vr2gNa-ZWT6AODkVcLi6pl8YzNErKAWjXXIsms5omWoLfh2aCLFTn23YUdI6vlAgeV7PbePq9OyqC7pXN42o2xMgR7t7G_qHdR2rOkQ4Lb7pHqZblttGhrSQXW0toab1IpmuvSUa-kiQwziPu6-u6Vx8ifGpU768rU_KSYPcE3hNromK6Au3y1oAW0'

export default function TopHeader() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-gutter flex items-center justify-between">
      <div className="flex items-center gap-gutter">
        <div className="relative w-80">
          <span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-headline-md">
            search
          </span>
          <input
            className="w-full pl-10 pr-space-md py-space-xs bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
            placeholder="Cari nota, pelanggan, atau transaksi..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-low rounded-lg">
          <span className="material-symbols-outlined text-secondary text-headline-sm">store</span>
          <span className="font-label-md text-label-md text-on-surface">Outlet Tebet, Jaksel</span>
          <span className="px-space-xs py-space-2xs bg-tertiary-container text-on-tertiary rounded-full font-label-sm text-label-sm uppercase">
            Buka
          </span>
        </div>
        <div className="flex items-center gap-space-xs text-on-surface-variant">
          <span className="material-symbols-outlined text-headline-sm">schedule</span>
          <span className="font-receipt-mono text-receipt-mono">Shift 1 • 08:00 - 16:00</span>
        </div>
      </div>
      <div className="flex items-center gap-space-md">
        <div className="flex items-center gap-space-xs">
          <button
            className="flex items-center gap-space-xs px-space-sm py-space-xs bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-secondary transition-colors shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
            type="button"
          >
            <span className="material-symbols-outlined text-headline-sm">add_circle</span>
            <span>+ Order Baru (F2)</span>
          </button>
          <button
            className="flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-low text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-headline-sm">fact_check</span>
            <span>Cek Nota (F3)</span>
          </button>
        </div>
        <div className="relative flex items-center justify-center p-space-xs rounded-lg hover:bg-surface-container-low cursor-pointer">
          <span className="material-symbols-outlined text-on-surface-variant text-headline-md">
            notifications
          </span>
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error"></span>
        </div>
        <div className="h-8 w-px bg-surface-container-highest"></div>
        <div className="flex items-center gap-space-sm pl-space-xs">
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={PROFILE_SRC} />
          <div className="flex flex-col text-left">
            <span className="font-label-md text-label-md text-on-surface leading-tight">
              Sari Permata
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
              Kasir Utama / Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
