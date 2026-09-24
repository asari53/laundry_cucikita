import { QUICK_ACTIONS } from '../data/ordersData.js'

export default function QuickActions() {
  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Pintasan Cepat Operasional</h2>
      <div className="grid grid-cols-2 gap-space-sm">
        {QUICK_ACTIONS.map((action) => (
          <button
            key={action.label}
            className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high flex flex-col items-center justify-center text-center gap-space-2xs transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-secondary text-2xl">{action.icon}</span>
            <span className="font-label-sm text-label-sm text-on-surface">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}