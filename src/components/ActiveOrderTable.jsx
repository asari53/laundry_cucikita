import { ACTIVE_ORDERS } from '../data/ordersData.js'

const FILTERS = ['Semua', 'Kilat Express', 'Reguler']

function RowActions() {
  return (
    <div className="flex items-center justify-end gap-space-xs text-on-surface-variant">
      <button className="p-space-2xs hover:text-on-surface" title="Lihat Detail" type="button">
        <span className="material-symbols-outlined text-sm">visibility</span>
      </button>
      <button className="p-space-2xs hover:text-on-surface" title="Cetak Nota" type="button">
        <span className="material-symbols-outlined text-sm">print</span>
      </button>
      <button className="p-space-2xs hover:text-secondary" title="Kirim WA" type="button">
        <span className="material-symbols-outlined text-sm">chat</span>
      </button>
    </div>
  )
}

export default function ActiveOrderTable() {
  return (
    <section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-headline-md text-secondary">dataset</span>
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Antrean Order Aktif Terkini
            </h2>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Menampilkan 4 dari 24 transaksi yang sedang dikerjakan
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Filter Layanan:</span>
          {FILTERS.map((filter, index) => (
            <button
              key={filter}
              className={`px-space-sm py-space-2xs rounded font-label-sm text-label-sm ${
                index === 0
                  ? 'bg-surface-container-low text-on-surface'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left font-body-sm text-body-sm">
          <thead className="bg-surface-container-low text-on-surface font-label-sm text-label-sm uppercase tracking-wider">
            <tr>
              <th className="py-space-sm px-space-md rounded-l-lg">No. Nota</th>
              <th className="py-space-sm px-space-md">Pelanggan</th>
              <th className="py-space-sm px-space-md">Layanan & Muatan</th>
              <th className="py-space-sm px-space-md">Status Siklus</th>
              <th className="py-space-sm px-space-md">Alokasi Mesin/Rak</th>
              <th className="py-space-sm px-space-md">Pengambilan</th>
              <th className="py-space-sm px-space-md">Total Tagihan</th>
              <th className="py-space-sm px-space-md">Pembayaran</th>
              <th className="py-space-sm px-space-md text-right rounded-r-lg">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {ACTIVE_ORDERS.map((order) => (
              <tr
                key={order.nota}
                className={`hover:bg-surface-container-low/60 transition-colors ${
                  order.striped ? 'bg-surface-container-low/20' : ''
                }`}
              >
                <td className="py-space-sm px-space-md font-receipt-mono text-receipt-mono font-bold text-primary-container">
                  {order.nota}
                </td>
                <td className="py-space-sm px-space-md">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">
                      {order.customer}
                    </span>
                    <span className={order.tier.className}>{order.tier.label}</span>
                  </div>
                </td>
                <td className="py-space-sm px-space-md">
                  <div className="flex flex-col">
                    <span className="text-on-surface font-medium">{order.service}</span>
                    <span className="text-on-surface-variant font-receipt-mono text-receipt-mono">
                      {order.load}
                    </span>
                  </div>
                </td>
                <td className="py-space-sm px-space-md">
                  <span
                    className={`inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full font-label-sm text-label-sm font-semibold ${order.status.className}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${order.status.dotClass}`}></span>
                    {order.status.label}
                  </span>
                </td>
                <td className="py-space-sm px-space-md text-on-surface-variant font-receipt-mono text-receipt-mono">
                  {order.allocation}
                </td>
                <td className="py-space-sm px-space-md">
                  <span className={`flex items-center gap-space-2xs ${order.pickup.className}`}>
                    <span
                      className={`material-symbols-outlined text-sm ${order.pickup.iconClass}`}
                    >
                      {order.pickup.icon}
                    </span>
                    {order.pickup.label}
                  </span>
                </td>
                <td className="py-space-sm px-space-md font-receipt-mono text-receipt-mono font-semibold text-on-surface">
                  {order.total}
                </td>
                <td className="py-space-sm px-space-md">
                  <span
                    className={`px-space-xs py-space-2xs rounded font-label-sm text-label-sm ${order.payment.className}`}
                  >
                    {order.payment.label}
                  </span>
                </td>
                <td className="py-space-sm px-space-md text-right">
                  <RowActions />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Table Pagination / Realtime WebSocket Tagline */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-space-xs text-on-surface-variant font-label-sm text-label-sm gap-space-xs">
        <div className="flex items-center gap-space-2xs">
          <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
          <span>Terakhir disinkronkan otomatis: Baru saja (Realtime WebSocket terhubung)</span>
        </div>
        <div className="flex items-center gap-space-sm">
          <span>Menampilkan 1-4 dari 24 transaksi</span>
          <button
            className="px-space-sm py-space-2xs rounded bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors"
            type="button"
          >
            Lihat Semua Order →
          </button>
        </div>
      </div>
    </section>
  )
}
