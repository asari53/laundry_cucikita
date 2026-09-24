import { NavLink } from 'react-router-dom'

const LOGO_SRC =
  'https://lh3.googleusercontent.com/aida/AEtjO1V7tHcD5qYnfjhITqxNVZkzzodXPz7sQaDBcECptsvN-vs8JervVtshCILOmzek9DynMaw92f8juMIRf8ifCgwSuERqn6wiSXZd9nRk9tHhBQKNma7YzL2T7TunY7S8Pc-7b1UOj7TJi_tBio1VKeY5jlEdLvxWKvNXI3L_pDTr0pRbakX89W-UpIE4w5x-rqu2UuCmlPgeIAYIDlISahkwAICKQI6WYf6hs-KtrssVz5Nle4yzBty1sai1'

const NAV_ITEMS = [
  { path: '/', label: 'Dashboard', icon: 'space_dashboard' },
  { path: '/kasir-pos', label: 'Kasir POS', icon: 'point_of_sale' },
  { path: '/operasional-kanban', label: 'Operasional & Kanban', icon: 'view_kanban' },
  { path: '/pelanggan-crm', label: 'Pelanggan & CRM', icon: 'group' },
  { path: '/stok-bahan-baku', label: 'Stok & Bahan Baku', icon: 'inventory_2' },
  { path: '/laporan-keuangan', label: 'Laporan Keuangan', icon: 'receipt_long' },
  { path: '/pengaturan-wa', label: 'Pengaturan & WA', icon: 'tune' },
]

const LINK_BASE =
  'flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-colors'
const LINK_ACTIVE =
  'bg-secondary text-on-secondary font-headline-sm shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
const LINK_INACTIVE =
  'text-primary-fixed-dim hover:bg-secondary-container/20 hover:text-on-primary font-body-md text-body-md'

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-primary-container text-on-primary z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col">
        <div className="h-16 px-gutter flex items-center justify-between bg-tertiary-container/30">
          <div className="flex items-center gap-space-sm">
            <img
              alt="Modern clean minimalist vector logo for 'Laundry CuciKita'"
              className="h-8 w-auto object-contain"
              src={LOGO_SRC}
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-primary leading-none">
                CuciKita
              </span>
              <span className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider">
                Enterprise
              </span>
            </div>
          </div>
          <span className="px-space-xs py-space-2xs bg-secondary-container text-on-secondary-container rounded font-label-sm text-label-sm uppercase font-bold">
            POS
          </span>
        </div>
        <div className="px-gutter pt-space-md pb-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim">
            Navigasi Operasional
          </span>
        </div>
        <nav className="flex flex-col gap-space-2xs px-space-sm">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `${LINK_BASE} ${isActive ? LINK_ACTIVE : LINK_INACTIVE}`
              }
              to={item.path}
            >
              <span className="material-symbols-outlined text-headline-md">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="p-space-md bg-tertiary-container/40">
        <div className="flex items-center justify-between p-space-sm rounded-lg bg-primary-container">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
            <span className="font-label-sm text-label-sm text-tertiary-fixed">
              Timbangan Terhubung
            </span>
          </div>
          <span className="material-symbols-outlined text-tertiary-fixed text-headline-sm">
            scale
          </span>
        </div>
      </div>
    </aside>
  )
}
