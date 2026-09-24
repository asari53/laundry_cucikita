const DAYS = ['Rab (22/10)', 'Kam (23/10)', 'Jum (24/10)', 'Sab (25/10)', 'Min (26/10)', 'Sen (27/10)']

export default function RevenueChart() {
  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div className="flex flex-col">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Tren Pendapatan & Volume Produksi
          </h2>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Perbandingan harian nilai rupiah dan muatan timbangan
          </span>
        </div>
        <div className="flex items-center gap-space-xs bg-surface-container-low p-space-2xs rounded-lg self-start">
          <button className="px-space-sm py-space-2xs rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">
            7 Hari
          </button>
          <button className="px-space-sm py-space-2xs rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm">
            30 Hari
          </button>
          <button className="px-space-sm py-space-2xs rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm">
            Bulan Ini
          </button>
        </div>
      </div>

      {/* Inline Visual Chart (SVG Dual-Axis Simulation) */}
      <div className="relative w-full h-64 flex flex-col justify-end pt-space-md">
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 200">
          <defs>
            <linearGradient id="revenueGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#070666" stopOpacity="0.25"></stop>
              <stop offset="100%" stopColor="#070666" stopOpacity="0.0"></stop>
            </linearGradient>
          </defs>
          {/* Grid Lines */}
          <line stroke="#e5eeff" strokeDasharray="4" strokeWidth="1" x1="0" x2="700" y1="40" y2="40"></line>
          <line stroke="#e5eeff" strokeDasharray="4" strokeWidth="1" x1="0" x2="700" y1="90" y2="90"></line>
          <line stroke="#e5eeff" strokeDasharray="4" strokeWidth="1" x1="0" x2="700" y1="140" y2="140"></line>
          <line stroke="#e5eeff" strokeWidth="1" x1="0" x2="700" y1="190" y2="190"></line>
          {/* Trend Line for Revenue */}
          <path
            d="M 50 160 L 150 140 L 250 125 L 350 95 L 450 110 L 550 60 L 650 45"
            fill="none"
            stroke="#5451b8"
            strokeLinecap="round"
            strokeWidth="3"
          ></path>
          {/* Volume bars */}
          <rect fill="#dce9ff" height="80" rx="4" width="20" x="40" y="110"></rect>
          <rect fill="#dce9ff" height="100" rx="4" width="20" x="140" y="90"></rect>
          <rect fill="#dce9ff" height="110" rx="4" width="20" x="240" y="80"></rect>
          <rect fill="#dce9ff" height="130" rx="4" width="20" x="340" y="60"></rect>
          <rect fill="#dce9ff" height="115" rx="4" width="20" x="440" y="75"></rect>
          <rect fill="#c3e8ff" height="160" rx="4" width="20" x="540" y="30"></rect>
          <rect fill="#070666" height="145" rx="4" width="20" x="640" y="45"></rect>
          {/* Points on Line */}
          <circle cx="50" cy="160" fill="#5451b8" r="4"></circle>
          <circle cx="150" cy="140" fill="#5451b8" r="4"></circle>
          <circle cx="250" cy="125" fill="#5451b8" r="4"></circle>
          <circle cx="350" cy="95" fill="#5451b8" r="4"></circle>
          <circle cx="450" cy="110" fill="#5451b8" r="4"></circle>
          <circle cx="550" cy="60" fill="#5451b8" r="5"></circle>
          <circle cx="650" cy="45" fill="#5451b8" r="5"></circle>
        </svg>
        {/* Day Labels */}
        <div className="flex justify-between items-center px-4 pt-space-xs text-on-surface-variant font-label-sm text-label-sm">
          {DAYS.map((day) => (
            <span key={day}>{day}</span>
          ))}
          <span className="font-bold text-on-surface">Hari Ini (Sel)</span>
        </div>
      </div>

      {/* Legend / Summary Bar */}
      <div className="flex items-center justify-between pt-space-sm bg-surface-container-low p-space-sm rounded-lg flex-wrap gap-space-sm">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface">
            <span className="w-3 h-3 rounded bg-primary-container"></span>
            <span>Volume Timbangan (Kg)</span>
          </div>
          <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface">
            <span className="w-3 h-1 rounded bg-secondary"></span>
            <span>Tren Omset (Rp)</span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-sm">bolt</span>
          <span>Puncak Mingguan: Sabtu (220 kg / Rp 4.1M)</span>
        </div>
      </div>
    </div>
  )
}
