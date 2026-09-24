import { Navigate, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import TopHeader from './components/TopHeader.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Placeholder from './pages/Placeholder.jsx'
import KasirPos from './pages/KasirPos.jsx'

export default function App() {
  return (
    <div className="bg-surface font-body-md text-on-surface">
      <Sidebar />
      <div className="pl-64 min-h-screen bg-surface flex flex-col">
        <TopHeader />
        <main className="w-full pt-16 bg-surface flex-1 px-gutter py-space-lg">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/kasir-pos" element={<KasirPos />} />
            <Route path="/operasional-kanban" element={<Placeholder title="Operasional & Kanban" />} />
            <Route path="/pelanggan-crm" element={<Placeholder title="Pelanggan & CRM" />} />
            <Route path="/stok-bahan-baku" element={<Placeholder title="Stok & Bahan Baku" />} />
            <Route path="/laporan-keuangan" element={<Placeholder title="Laporan Keuangan" />} />
            <Route path="/pengaturan-wa" element={<Placeholder title="Pengaturan & WA" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
