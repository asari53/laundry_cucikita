import { DRYERS, WASHERS } from '../data/machinesData.js'

function MachineCard({ machine }) {
  const { capacityBold = true, nameClass = 'text-on-surface', capacityClass } = machine

  return (
    <div
      className={`p-space-sm rounded-lg flex flex-col justify-between gap-space-xs ${machine.cardClass}`}
    >
      <div className="flex items-center justify-between">
        <span className={`font-label-md text-label-md ${nameClass}`}>{machine.name}</span>
        <span
          className={`px-space-xs py-space-2xs rounded font-label-sm text-label-sm ${capacityClass} ${
            capacityBold ? 'font-bold' : ''
          }`}
        >
          {machine.capacity}
        </span>
      </div>
      <div className="flex flex-col">
        <span className={`font-label-sm text-label-sm ${machine.statusClass}`}>
          {machine.statusAlert && <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>}
          {machine.statusText}
        </span>
        <span className={machine.metaClass}>{machine.meta}</span>
      </div>
      {typeof machine.progress === 'number' && (
        <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-space-2xs">
          <div
            className="bg-secondary h-full rounded-full"
            style={{ width: `${machine.progress}%` }}
          ></div>
        </div>
      )}
      {machine.action && (
        <button className={machine.action.className} type="button">
          {machine.action.label}
        </button>
      )}
      {machine.footer && (
        <span className="font-receipt-mono text-receipt-mono text-on-surface-variant text-center mt-space-2xs">
          {machine.footer}
        </span>
      )}
    </div>
  )
}

export default function MachineTelemetry() {
  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-headline-lg text-secondary">
            local_laundry_service
          </span>
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Status Live Mesin (Washer & Dryer IoT)
            </h2>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Sensor telemetri terhubung langsung ke switchboard outlet
            </span>
          </div>
        </div>
        <span className="flex items-center gap-space-2xs text-secondary font-label-sm text-label-sm">
          <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
          Sync Tiap 5 Detik
        </span>
      </div>

      {/* Washers (5 units) */}
      <div className="flex flex-col gap-space-xs">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
          Washer Units (Mesin Cuci)
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-space-sm">
          {WASHERS.map((machine) => (
            <MachineCard key={machine.name} machine={machine} />
          ))}
        </div>
      </div>

      {/* Dryers (4 units) */}
      <div className="flex flex-col gap-space-xs pt-space-xs">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
          Dryer Units (Mesin Pengering Gas)
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-sm">
          {DRYERS.map((machine) => (
            <MachineCard key={machine.name} machine={machine} />
          ))}
        </div>
      </div>
    </div>
  )
}