const rupiah = (value) => `Rp ${new Intl.NumberFormat('id-ID').format(Math.round(value))}`

const formatDateTime = (iso) =>
  new Date(iso).toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })

const PAY_STATUS_META = {
  lunas: { label: 'Lunas', className: 'bg-surface-container-high text-on-surface font-semibold' },
  dp: { label: 'DP', className: 'bg-surface-container-highest text-on-surface' },
  nanti: {
    label: 'Bayar Nanti',
    className: 'bg-error-container text-on-error-container font-semibold',
  },
}

const PAY_METHOD_LABEL = {
  tunai: 'Tunai',
  qris: 'QRIS',
  bca: 'Transfer BCA',
}

export default function OrderList({ orders, loading, error, onRefresh }) {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between flex-wrap gap-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary">receipt_long</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            Daftar Order Tersimpan
          </h2>
          <span className="bg-surface-container-low text-on-surface-variant font-receipt-mono text-label-sm px-2 py-0.5 rounded">
            Supabase · public.orders
          </span>
        </div>
        <div className="flex items-center gap-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {orders.length} order
          </span>
          <button
            className="flex items-center gap-space-2xs px-space-sm py-1 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors disabled:opacity-60"
            disabled={loading}
            onClick={onRefresh}
            type="button"
          >
            <span className="material-symbols-outlined text-sm">refresh</span>
            <span>{loading ? 'Memuat...' : 'Muat Ulang'}</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="flex items-start gap-space-xs px-space-sm py-2 rounded-lg bg-error-container text-on-error-container font-body-sm text-body-sm">
          <span className="material-symbols-outlined text-sm">error</span>
          <span>{error}</span>
        </div>
      )}

      {loading && orders.length === 0 ? (
        <div className="flex items-center gap-space-xs py-space-md text-on-surface-variant font-body-sm text-body-sm">
          <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
          <span>Mengambil data order dari Supabase...</span>
        </div>
      ) : !error && orders.length === 0 ? (
        <div className="flex flex-col items-center gap-space-xs py-space-lg text-on-surface-variant">
          <span className="material-symbols-outlined text-3xl text-outline-variant">inbox</span>
          <span className="font-body-md text-body-md">
            Belum ada order tersimpan. Buat order pertama Anda.
          </span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                <th className="pb-space-xs pr-space-md font-bold">No. Nota</th>
                <th className="pb-space-xs pr-space-md font-bold">Waktu</th>
                <th className="pb-space-xs pr-space-md font-bold">Pelanggan</th>
                <th className="pb-space-xs pr-space-md font-bold">Layanan</th>
                <th className="pb-space-xs pr-space-md font-bold text-right">Berat</th>
                <th className="pb-space-xs pr-space-md font-bold text-right">Item</th>
                <th className="pb-space-xs pr-space-md font-bold text-right">Total</th>
                <th className="pb-space-xs font-bold">Bayar</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const statusMeta = PAY_STATUS_META[order.payStatus] ?? PAY_STATUS_META.lunas
                return (
                  <tr
                    className="border-t border-outline-variant/40 hover:bg-surface-container-low transition-colors"
                    key={order.id}
                  >
                    <td className="py-space-xs pr-space-md font-receipt-mono text-receipt-mono text-on-surface font-bold">
                      {order.nota}
                    </td>
                    <td className="py-space-xs pr-space-md font-body-sm text-body-sm text-on-surface-variant">
                      {formatDateTime(order.createdAt)}
                    </td>
                    <td className="py-space-xs pr-space-md font-label-md text-label-md text-on-surface">
                      {order.customerName}
                    </td>
                    <td className="py-space-xs pr-space-md font-body-sm text-body-sm text-on-surface-variant">
                      {order.serviceLabel}
                      <span className="block font-label-sm text-label-sm text-outline">
                        {PAY_METHOD_LABEL[order.payMethod] ?? order.payMethod}
                        {order.deliveryMethod === 'antar' ? ' · Antar' : ' · Ambil'}
                      </span>
                    </td>
                    <td className="py-space-xs pr-space-md text-right font-receipt-mono text-receipt-mono text-on-surface">
                      {order.weightKg.toFixed(2)} kg
                    </td>
                    <td className="py-space-xs pr-space-md text-right font-receipt-mono text-receipt-mono text-on-surface">
                      {order.itemCount}
                    </td>
                    <td className="py-space-xs pr-space-md text-right font-receipt-mono text-label-lg font-bold text-on-surface">
                      {rupiah(order.total)}
                    </td>
                    <td className="py-space-xs">
                      <span
                        className={`inline-block px-space-xs py-space-2xs rounded font-label-sm text-label-sm whitespace-nowrap ${statusMeta.className}`}
                      >
                        {statusMeta.label}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

