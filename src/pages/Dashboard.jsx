import ActiveOrderTable from '../components/ActiveOrderTable.jsx'
import CashDrawer from '../components/CashDrawer.jsx'
import CriticalAlerts from '../components/CriticalAlerts.jsx'
import GreetingBanner from '../components/GreetingBanner.jsx'
import MachineTelemetry from '../components/MachineTelemetry.jsx'
import MetricCards from '../components/MetricCards.jsx'
import QuickActions from '../components/QuickActions.jsx'
import RevenueChart from '../components/RevenueChart.jsx'

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full gap-space-lg">
      {/* 1. Header & Greeting Banner */}
      <GreetingBanner />

      {/* 2. Top Row: 4 Metric Cards */}
      <MetricCards />

      {/* 3. Middle Section: Dual Column (65% / 35%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
        {/* LEFT COLUMN (approx 8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-space-md">
          <RevenueChart />
          <MachineTelemetry />
        </div>

        {/* RIGHT COLUMN (approx 4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-space-md">
          <QuickActions />
          <CriticalAlerts />
          <CashDrawer />
        </div>
      </div>

      {/* 4. Bottom Section: Live Order Table */}
      <ActiveOrderTable />
    </div>
  )
}