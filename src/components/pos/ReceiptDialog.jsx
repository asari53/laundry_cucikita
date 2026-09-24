export default function ReceiptDialog({ open, onClose, order }) {
  const containerClass = open
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm p-space-md'
    : 'hidden fixed inset-0 z-50 items-center justify-center bg-inverse-surface/40 backdrop-blur-sm p-space-md'

  return (
    <div className={containerClass} id="receipt-preview-dialog">
      <div className="bg-surface-container-lowest max-w-sm w-full rounded-2xl shadow-2xl p-space-lg flex flex-col gap-space-md relative max-h-[90vh] overflow-y-auto">
        {/* Modal Close Button */}
        <button
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-surface-container text-on-surface-variant"
          onClick={onClose}
          type="button"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Thermal Simulated Sheet (80mm roll) */}
        <div className="bg-surface-bright p-space-md rounded-lg flex flex-col gap-space-sm font-receipt-mono text-on-surface">
          <div className="text-center flex flex-col items-center">
            <span className="font-headline-sm text-headline-sm font-bold tracking-tighter">
              LAUNDRY CUCIKITA
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Cabang Tebet Barat No. 14, Jaksel
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              WA: 0812-8899-1234
            </span>
            <div className="w-full my-2 text-on-surface-variant text-center overflow-hidden tracking-widest text-xs select-none">
              ================================
            </div>
          </div>
          <div className="flex justify-between text-label-sm">
            <span>NO: {order.nota}</span>
            <span>KASIR: {order.kasir}</span>
          </div>
          <div className="flex justify-between text-label-sm">
            <span>TGL: {order.dateTime}</span>
            <span>STATUS: {order.status}</span>
          </div>
          <div className="text-label-sm">
            <span>PLG: {order.customer}</span>
          </div>
          <div className="w-full my-1 text-on-surface-variant text-center overflow-hidden tracking-widest text-xs select-none">
            --------------------------------
          </div>
          {/* Receipt Rows */}
          <div className="flex flex-col gap-1 text-label-sm">
            {order.lines.map((line) => (
              <div className="flex flex-col" key={line.title}>
                <div
                  className={`flex justify-between ${
                    line.detail ? 'font-bold' : 'text-on-surface-variant'
                  } ${line.accent ? 'text-secondary' : ''} ${line.detail ? '' : 'mt-1'}`}
                >
                  <span>{line.title}</span>
                  {!line.detail && <span>{line.amount}</span>}
                </div>
                {line.detail && (
                  <div
                    className={`flex justify-between ${
                      line.accent ? 'text-secondary' : 'text-on-surface-variant'
                    }`}
                  >
                    <span>{line.detail}</span>
                    <span>{line.amount}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="w-full my-1 text-on-surface-variant text-center overflow-hidden tracking-widest text-xs select-none">
            ================================
          </div>
          <div className="flex justify-between text-label-md font-bold">
            <span>TOTAL</span>
            <span>{order.total}</span>
          </div>
          <div className="flex justify-between text-label-sm">
            <span>{order.tenderLabel}</span>
            <span>{order.tenderValue}</span>
          </div>
          {order.changeValue && (
            <div className="flex justify-between text-label-sm">
              <span>KEMBALI</span>
              <span>{order.changeValue}</span>
            </div>
          )}
          <div className="w-full my-2 text-on-surface-variant text-center overflow-hidden tracking-widest text-xs select-none">
            --------------------------------
          </div>

          {/* Simulated QR Tracking Section */}
          <div className="flex flex-col items-center gap-1 text-center py-1">
            <svg className="w-24 h-24 text-on-surface" fill="currentColor" viewBox="0 0 100 100">
              <rect fill="none" height="25" stroke="currentColor" strokeWidth="6" width="25" x="10" y="10" />
              <rect fill="currentColor" height="11" width="11" x="17" y="17" />
              <rect fill="none" height="25" stroke="currentColor" strokeWidth="6" width="25" x="65" y="10" />
              <rect fill="currentColor" height="11" width="11" x="72" y="17" />
              <rect fill="none" height="25" stroke="currentColor" strokeWidth="6" width="25" x="10" y="65" />
              <rect fill="currentColor" height="11" width="11" x="17" y="72" />
              <rect fill="currentColor" height="8" width="8" x="45" y="15" />
              <rect fill="currentColor" height="15" width="8" x="45" y="35" />
              <rect fill="currentColor" height="8" width="12" x="65" y="45" />
              <rect fill="currentColor" height="8" width="15" x="45" y="65" />
              <rect fill="currentColor" height="15" width="15" x="75" y="65" />
              <rect fill="currentColor" height="5" width="8" x="65" y="85" />
            </svg>
            <span className="text-label-sm uppercase tracking-wider font-bold">
              Lacak Status via WhatsApp
            </span>
            <span className="text-label-sm text-on-surface-variant">
              Simpan nota ini saat pengambilan pakaian
            </span>
          </div>
        </div>

        {/* Print Execution Dialog Actions */}
        <div className="flex items-center gap-space-xs">
          <button
            className="flex-1 py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md"
            onClick={onClose}
            type="button"
          >
            Tutup
          </button>
          <button
            className="flex-1 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center gap-1 shadow-sm"
            onClick={() => window.print()}
            type="button"
          >
            <span className="material-symbols-outlined text-sm">print</span>
            <span>Cetak Sekarang</span>
          </button>
        </div>
      </div>
    </div>
  )
}


