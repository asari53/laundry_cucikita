import { useEffect, useMemo, useState } from 'react'
import CustomerProfileCard from '../components/pos/CustomerProfileCard.jsx'
import OrderList from '../components/pos/OrderList.jsx'
import PosStatusBanner from '../components/pos/PosStatusBanner.jsx'
import ReceiptDialog from '../components/pos/ReceiptDialog.jsx'
import { createOrder, listOrders } from '../services/ordersService'
import {
  FRAGRANCES,
  HYGIENE_ADDONS,
  PAYMENT_METHODS,
  PAYMENT_STATUSES,
  SERVICE_TABS,
  SERVICE_TIERS,
  UNIT_ITEMS,
} from '../data/posData'

const idr = (value) => new Intl.NumberFormat('id-ID').format(Math.round(value))
const rupiah = (value) => `Rp ${idr(value)}`

export default function KasirPos() {
  const [activeTab, setActiveTab] = useState('kiloan')
  const [tierId, setTierId] = useState('kilat')
  const [scaleReading, setScaleReading] = useState('4.85')
  const [weight, setWeight] = useState(4.85)
  const [scaleLocked, setScaleLocked] = useState(false)
  const [editingWeight, setEditingWeight] = useState(false)
  const [selectedUnits, setSelectedUnits] = useState(['bed-cover'])
  const [fragrance, setFragrance] = useState('ocean')
  const [hygiene, setHygiene] = useState({ antibakteri: true, pelembut: false })
  const [delivery, setDelivery] = useState('antar')
  const [notes, setNotes] = useState(
    'Kemeja putih kerah ada noda tinta biru; Bed cover ada sedikit lepas jahitan sudut kanan',
  )
  const [voucherCode, setVoucherCode] = useState('HEMAT10K')
  const [appliedVoucher, setAppliedVoucher] = useState('HEMAT10K')
  const [usePoints, setUsePoints] = useState(true)
  const [payStatus, setPayStatus] = useState('lunas')
  const [payMethod, setPayMethod] = useState('tunai')
  const [cashNominal, setCashNominal] = useState(100000)
  const [receiptOpen, setReceiptOpen] = useState(false)
  const [currentNota, setCurrentNota] = useState('CK-20250524-0042')
  const [orders, setOrders] = useState([])
  const [ordersLoading, setOrdersLoading] = useState(false)
  const [ordersError, setOrdersError] = useState(null)
  const [saving, setSaving] = useState(false)
  const [saveNotice, setSaveNotice] = useState(null)

  const tier = SERVICE_TIERS.find((item) => item.id === tierId) ?? SERVICE_TIERS[1]
  const activeFragrance = FRAGRANCES.find((item) => item.id === fragrance) ?? FRAGRANCES[1]
  const selectedUnitItems = UNIT_ITEMS.filter((item) => selectedUnits.includes(item.id))

  const kiloTotal = Math.round(weight * tier.price)
  const unitTotal = selectedUnitItems.reduce((sum, item) => sum + item.price, 0)
  const subtotalCucian = kiloTotal + unitTotal + activeFragrance.surcharge
  const deliveryFee = delivery === 'antar' ? 8000 : 0
  const voucherDiscount = appliedVoucher === 'HEMAT10K' ? 10000 : 0
  const pointsDiscount = usePoints ? 5000 : 0
  const totalTagihan = Math.max(subtotalCucian + deliveryFee - voucherDiscount - pointsDiscount, 0)
  const cashChange = Math.max(cashNominal - totalTagihan, 0)

  const quickCashOptions = useMemo(() => {
    const round10 = Math.ceil(totalTagihan / 10000) * 10000
    return [...new Set([totalTagihan, round10, round10 + 10000])]
  }, [totalTagihan])

  useEffect(() => {
    if (scaleLocked || editingWeight) return undefined
    const timer = setInterval(() => {
      setScaleReading((4.84 + Math.random() * 0.02).toFixed(2))
    }, 3500)
    return () => clearInterval(timer)
  }, [scaleLocked, editingWeight])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Enter' && !event.target.matches('input, textarea')) {
        setReceiptOpen(true)
      }
      if (event.key === 'Escape') {
        setReceiptOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const toggleUnit = (id) => {
    setSelectedUnits((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id],
    )
  }

  const lockWeight = () => {
    setWeight(Number(scaleReading))
    setScaleLocked(true)
    setEditingWeight(false)
  }

  const applyVoucher = () => setAppliedVoucher(voucherCode.trim().toUpperCase())

  const receiptOrder = {
    nota: currentNota,
    kasir: 'Sari',
    dateTime: '24/05/2025 09:42',
    customer: 'Budi Santoso (Gold)',
    status: payStatus === 'lunas' ? 'LUNAS' : payStatus === 'dp' ? 'DP' : 'BAYAR NANTI',
    lines: [
      {
        title: `Cuci Komplit ${tier.cartLabel}`,
        detail: `${weight.toFixed(2)} kg x ${rupiah(tier.price)}`,
        amount: rupiah(kiloTotal),
      },
      ...selectedUnitItems.map((item) => ({
        title: item.cartLabel,
        detail: `1 pcs x ${rupiah(item.price)}`,
        amount: rupiah(item.price),
      })),
      ...(activeFragrance.surcharge
        ? [{ title: `Aroma ${activeFragrance.label}`, amount: rupiah(activeFragrance.surcharge) }]
        : []),
      ...(deliveryFee ? [{ title: 'Ongkir Antar Tebet', amount: rupiah(deliveryFee) }] : []),
      ...(voucherDiscount
        ? [{ title: 'Diskon Voucher', amount: `-${rupiah(voucherDiscount)}`, accent: true }]
        : []),
      ...(pointsDiscount
        ? [{ title: 'Poin Loyalitas', amount: `-${rupiah(pointsDiscount)}`, accent: true }]
        : []),
    ],
    total: rupiah(totalTagihan),
    tenderLabel: payMethod === 'tunai' ? 'TUNAI' : payMethod === 'qris' ? 'QRIS' : 'TRANSFER BCA',
    tenderValue: payMethod === 'tunai' ? rupiah(cashNominal) : rupiah(totalTagihan),
    changeValue: payMethod === 'tunai' ? rupiah(cashChange) : null,
  }

  const refreshOrders = async () => {
    setOrdersLoading(true)
    setOrdersError(null)
    try {
      setOrders(await listOrders())
    } catch (error) {
      setOrdersError(error.message)
    } finally {
      setOrdersLoading(false)
    }
  }

  useEffect(() => {
    // Muat daftar order dari Supabase saat halaman dibuka
    refreshOrders()
  }, [])

  const generateNota = () => {
    const now = new Date()
    const date = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, '0'),
      String(now.getDate()).padStart(2, '0'),
    ].join('')
    const todayCount = orders.filter((order) => order.nota?.startsWith(`CK-${date}`)).length + 1
    return `CK-${date}-${String(todayCount).padStart(4, '0')}`
  }

  const buildOrderPayload = (nota) => ({
    nota,
    customer_name: 'Budi Santoso',
    customer_phone: '0812-8899-1234',
    customer_tier: 'Gold Member',
    service_tier_id: tier.id,
    service_tier_label: `Cuci Komplit ${tier.cartLabel}`,
    weight_kg: weight,
    fragrance: activeFragrance.label,
    delivery_method: delivery,
    notes,
    items: [
      {
        name: `Cuci Komplit ${tier.cartLabel}`,
        detail: `${weight.toFixed(2)} kg x ${rupiah(tier.price)}`,
        amount: kiloTotal,
      },
      ...selectedUnitItems.map((item) => ({
        name: item.cartLabel,
        detail: `1 pcs x ${rupiah(item.price)}`,
        amount: item.price,
      })),
      ...(deliveryFee
        ? [
            {
              name: 'Ongkos Antar Kurir Tebet',
              detail: 'Zona 1 (Radius < 3 km)',
              amount: deliveryFee,
            },
          ]
        : []),
    ],
    subtotal_cucian: subtotalCucian,
    delivery_fee: deliveryFee,
    voucher_code: voucherDiscount > 0 ? appliedVoucher : null,
    voucher_discount: voucherDiscount,
    points_discount: pointsDiscount,
    total: totalTagihan,
    pay_status: payStatus,
    pay_method: payMethod,
    cash_nominal: payMethod === 'tunai' ? cashNominal : null,
    cash_change: payMethod === 'tunai' ? cashChange : null,
  })

  const handleCheckout = async () => {
    if (saving) return
    setSaving(true)
    setSaveNotice(null)
    const payload = buildOrderPayload(generateNota())
    try {
      let saved
      try {
        saved = await createOrder(payload)
      } catch (error) {
        // Unique violation nomor nota → coba sekali lagi dengan nomor acak
        if (error?.code === '23505') {
          const fallbackNota = `CK-${payload.nota.slice(3, 11)}-${String(
            Math.floor(1000 + Math.random() * 9000),
          )}`
          saved = await createOrder({ ...payload, nota: fallbackNota })
        } else {
          throw error
        }
      }
      setCurrentNota(saved.nota)
      setSaveNotice({
        type: 'success',
        text: `Order ${saved.nota} berhasil disimpan ke Supabase.`,
      })
      setReceiptOpen(true)
      refreshOrders()
    } catch (error) {
      setSaveNotice({ type: 'error', text: error.message || 'Gagal menyimpan order ke Supabase.' })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex flex-col w-full gap-space-md">
      {/* Status & Quick Announcement Bar */}
      <PosStatusBanner />

      {/* Save Confirmation / Error Notice */}
      {saveNotice && (
        <div
          className={`flex items-center justify-between gap-space-sm px-space-md py-2.5 rounded-xl shadow-sm ${
            saveNotice.type === 'success'
              ? 'bg-secondary-fixed text-on-secondary-fixed'
              : 'bg-error-container text-on-error-container'
          }`}
          role="alert"
        >
          <div className="flex items-center gap-space-xs font-label-md text-label-md">
            <span className="material-symbols-outlined text-sm">
              {saveNotice.type === 'success' ? 'check_circle' : 'error'}
            </span>
            <span>{saveNotice.text}</span>
          </div>
          <button
            className="p-1 rounded hover:bg-black/5"
            onClick={() => setSaveNotice(null)}
            type="button"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}

      {/* Dual-Pane Core Grid */}
      <div className="grid grid-cols-12 gap-space-md items-start">
        {/* LEFT COLUMN: Interactive Entry, Catalog & Garment Manifest */}
        <div className="col-span-12 xl:col-span-8 flex flex-col gap-space-md">
          {/* Customer Identity & Loyalty Banner */}
          <CustomerProfileCard />

          {/* Service Selection Multi-Tab Container */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
            {/* Navigation Filter Pill Tabs */}
            <div className="flex items-center justify-between border-b-0 pb-1 flex-wrap gap-space-sm">
              <div className="flex items-center gap-space-xs overflow-x-auto w-full md:w-auto">
                {SERVICE_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-space-md py-2 rounded-lg font-label-md text-label-md flex items-center gap-space-xs transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-container text-on-primary shadow-sm'
                        : 'bg-surface-container-low hover:bg-surface-container text-on-surface'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
              <div className="text-on-surface-variant font-label-sm text-label-sm">
                Katalog: Aktif Reguler &amp; Paket Express
              </div>
            </div>

            {/* Sub-tier cards: Kiloan Speed Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
              {SERVICE_TIERS.map((item) => {
                const selected = item.id === tierId
                return (
                  <button
                    key={item.id}
                    className={`text-left p-space-md rounded-xl flex flex-col justify-between gap-space-sm relative group transition-all ${
                      selected
                        ? 'bg-surface-container-lowest shadow-md ring-2 ring-secondary'
                        : 'bg-surface-container-low hover:bg-surface-container cursor-pointer'
                    }`}
                    onClick={() => setTierId(item.id)}
                    type="button"
                  >
                    {item.popular && (
                      <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-xs">bolt</span>
                        Paling Populer
                      </span>
                    )}
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-headline-sm text-headline-sm text-on-surface block font-bold">
                          {item.name}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {item.desc}
                        </span>
                      </div>
                      <span
                        className={`material-symbols-outlined transition-colors ${
                          selected ? 'text-secondary' : 'text-on-surface-variant group-hover:text-secondary'
                        }`}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between mt-space-xs">
                      <span
                        className={`font-display-md text-display-md font-bold ${
                          selected ? 'text-secondary' : 'text-on-surface'
                        }`}
                      >
                        {rupiah(item.price)}
                        <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">
                          /kg
                        </span>
                      </span>
                      <span
                        className={`font-label-sm text-label-sm px-2 py-0.5 rounded ${
                          item.accentNote
                            ? 'bg-secondary-fixed text-on-secondary-fixed font-bold'
                            : 'bg-surface-container-highest text-on-surface'
                        }`}
                      >
                        {item.note}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
            {/* Interactive Weight Hardware Sync Section */}
            <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col lg:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md w-full lg:w-auto">
                <div className="p-3 bg-surface-container-lowest rounded-xl shadow-sm text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">scale</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Sensor Timbangan Digital CuciKita IoT
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        scaleLocked ? 'bg-secondary' : 'bg-secondary-container'
                      }`}
                    ></span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {scaleLocked ? 'Berat Terkunci' : 'Live'}
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Letakkan keranjang pakaian kotor di timbangan timbang meja 01
                  </span>
                </div>
              </div>
              {/* Digital Scale Readout Deck */}
              <div className="flex items-center gap-space-sm w-full lg:w-auto justify-end">
                {editingWeight ? (
                  <input
                    autoFocus
                    className="w-32 text-right bg-surface-container-lowest px-space-md py-2 rounded-xl shadow-sm font-data-metric text-data-metric font-bold text-on-surface tracking-tight focus:outline-none ring-2 ring-secondary"
                    max="999"
                    min="0"
                    onBlur={() => setEditingWeight(false)}
                    onChange={(event) => setWeight(Number(event.target.value))}
                    step="0.01"
                    type="number"
                    value={weight}
                  />
                ) : (
                  <div className="bg-surface-container-lowest px-space-lg py-2 rounded-xl shadow-sm flex items-baseline gap-space-xs">
                    <span
                      className="font-data-metric text-data-metric font-bold text-on-surface tracking-tight"
                      id="active-scale-value"
                    >
                      {scaleLocked ? weight.toFixed(2) : scaleReading}
                    </span>
                    <span className="font-headline-md text-headline-md font-bold text-on-surface-variant">
                      kg
                    </span>
                  </div>
                )}
                <button
                  className="px-space-md py-3 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md hover:bg-opacity-90 flex items-center gap-space-xs active:scale-95 transition-all shadow-sm"
                  onClick={lockWeight}
                  type="button"
                >
                  <span className="material-symbols-outlined text-sm">sync</span>
                  <span>Tara &amp; Kunci Berat</span>
                </button>
                <button
                  className="p-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant"
                  onClick={() => setEditingWeight(true)}
                  title="Koreksi Manual"
                  type="button"
                >
                  <span className="material-symbols-outlined text-sm">edit</span>
                </button>
              </div>
            </div>
          </div>
          {/* Cuci Satuan Quick Add Bar (Cross-sell in order) */}
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                Tambahan Item Satuan (Opsional)
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Klik untuk menyertakan dalam nota ini
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-space-xs">
              {UNIT_ITEMS.map((item) => {
                const added = selectedUnits.includes(item.id)
                return (
                  <button
                    key={item.id}
                    className={`p-2 rounded-lg text-left flex flex-col gap-1 transition-all ${
                      added
                        ? 'bg-surface-container-lowest shadow-sm ring-1 ring-secondary'
                        : 'bg-surface-container-low hover:bg-surface-container'
                    }`}
                    onClick={() => toggleUnit(item.id)}
                    type="button"
                  >
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                      {item.name}
                    </span>
                    <span
                      className={`font-body-sm text-body-sm ${
                        added ? 'text-secondary' : 'text-on-surface-variant'
                      }`}
                    >
                      {rupiah(item.price)}
                    </span>
                    <span
                      className={`font-label-sm text-label-sm px-1.5 py-[2px] rounded w-fit ${
                        added
                          ? 'text-on-secondary-fixed-variant bg-secondary-fixed'
                          : 'text-on-surface-variant'
                      }`}
                    >
                      {added ? '✓ Terpilih' : '+ Tambah'}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
          {/* Special Treatments, Fragrance & Garment Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
            {/* Fragrance Selector */}
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-secondary">sanitizer</span>
                Pilihan Aroma Parfum Laundry
              </label>
              <div className="grid grid-cols-3 gap-space-xs">
                {FRAGRANCES.map((item) => {
                  const selected = fragrance === item.id
                  return (
                    <label
                      key={item.id}
                      className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-colors ${
                        selected
                          ? 'bg-surface-container-lowest shadow-sm ring-1 ring-secondary'
                          : 'bg-surface-container-low hover:bg-surface-container'
                      }`}
                    >
                      <input
                        checked={selected}
                        className="hidden"
                        name="fragrance"
                        onChange={() => setFragrance(item.id)}
                        type="radio"
                        value={item.id}
                      />
                      <span
                        className={`material-symbols-outlined text-base ${
                          selected ? 'text-secondary' : 'text-on-surface-variant'
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span
                        className={`font-label-sm text-label-sm mt-1 ${
                          selected ? 'text-on-surface font-bold' : 'text-on-surface'
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`font-label-sm text-label-sm ${
                          selected ? 'text-secondary' : 'text-on-surface-variant'
                        }`}
                      >
                        {item.subLabel}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Add-on Hygiene Toggles */}
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-secondary">shield</span>
                Formula Khusus &amp; Higienis
              </label>
              <div className="flex items-center gap-space-xs">
                {HYGIENE_ADDONS.map((item) => {
                  const active = hygiene[item.id]
                  return (
                    <button
                      key={item.id}
                      className={`flex-1 py-2 px-space-xs rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 transition-colors ${
                        active
                          ? 'bg-surface-container-lowest ring-1 ring-secondary text-on-surface'
                          : 'bg-surface-container-low hover:bg-surface-container text-on-surface'
                      }`}
                      onClick={() => setHygiene((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                      type="button"
                    >
                      <span
                        className={`material-symbols-outlined text-xs ${
                          active ? 'text-secondary' : 'text-outline'
                        }`}
                      >
                        {active ? 'check_circle' : 'add'}
                      </span>
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
          {/* Special Notes & Garment Defect Inspection Checklist */}
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <label
                className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1"
                htmlFor="garment-notes"
              >
                <span className="material-symbols-outlined text-sm text-secondary">edit_note</span>
                Catatan Khusus Pakaian &amp; Kondisi Noda
              </label>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Penting untuk komplain &amp; QA
              </span>
            </div>
            <div className="relative">
              <input
                className="w-full bg-surface-container-low px-space-md py-2.5 rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm"
                id="garment-notes"
                onChange={(event) => setNotes(event.target.value)}
                type="text"
                value={notes}
              />
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-sm text-secondary">
                verified
              </span>
            </div>
          </div>

          {/* Pickup & Delivery Dispatch Selection */}
          <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-2xl">two_wheeler</span>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface font-bold">
                  Metode Pengambilan Cucian
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {delivery === 'antar'
                    ? 'Kirim otomatis via Kurir Internal CuciKita'
                    : 'Pelanggan menjemput langsung ke outlet'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-xs w-full sm:w-auto">
              <button
                className={`flex-1 sm:flex-initial px-space-md py-2 rounded-lg text-label-sm font-label-sm transition-all ${
                  delivery === 'pickup'
                    ? 'bg-surface-container-lowest text-on-surface-variant ring-1 ring-secondary'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container'
                }`}
                onClick={() => setDelivery('pickup')}
                type="button"
              >
                Ambil di Outlet
              </button>
              <button
                className={`flex-1 sm:flex-initial px-space-md py-2 rounded-lg text-label-sm font-label-sm flex items-center justify-center gap-1 shadow-sm ${
                  delivery === 'antar'
                    ? 'bg-primary-container text-on-primary'
                    : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                }`}
                onClick={() => setDelivery('antar')}
                type="button"
              >
                {delivery === 'antar' && (
                  <span className="material-symbols-outlined text-xs">check</span>
                )}
                Antar ke Alamat (+Rp8.000)
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sticky Order Manifest, Tender Calculator & Receipt Execution */}
        <div className="col-span-12 xl:col-span-4 flex flex-col gap-space-md">
          {/* POS Register Cart Box */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md sticky top-20">
            {/* Order Bill Identifier & Due Time */}
            <div className="flex flex-col gap-space-2xs bg-surface-container-low p-space-sm rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-receipt-mono text-label-sm text-on-surface-variant uppercase tracking-wider">
                  No. Nota Transaksi
                </span>
                <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-bold">
                  DRAFT ORDER
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-receipt-mono text-headline-sm font-bold text-on-surface">
                  #{currentNota}
                </span>
                <span className="material-symbols-outlined text-secondary text-sm">print</span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t-0 text-on-surface-variant font-body-sm text-body-sm">
                <span>Estimasi Siap Ambil:</span>
                <span className="font-label-md text-label-md text-secondary font-bold">
                  {tier.id === 'reguler'
                    ? '2 Hari Lagi, 26 Mei (16:00 WIB)'
                    : tier.id === 'express'
                      ? 'Hari Ini, 24 Mei (14:00 WIB)'
                      : 'Besok, 25 Mei (16:00 WIB)'}
                </span>
              </div>
            </div>
            {/* Itemized Cart Listing */}
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider px-1">
                <span>Rincian Layanan &amp; Barang</span>
                <span>Jumlah (IDR)</span>
              </div>

              {/* Base Kiloan Service */}
              <div className="flex items-start justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors group">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Cuci Komplit {tier.cartLabel}
                  </span>
                  <span className="font-receipt-mono text-body-sm text-on-surface-variant">
                    {weight.toFixed(2)} kg × {rupiah(tier.price)}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs text-secondary">
                      water_drop
                    </span>
                    {activeFragrance.label}{' '}
                    {activeFragrance.surcharge > 0
                      ? `(+${idr(activeFragrance.surcharge)})`
                      : '(Gratis)'}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-receipt-mono text-label-lg font-bold text-on-surface">
                    {idr(kiloTotal)}
                  </span>
                </div>
              </div>

              {/* Unit Items */}
              {selectedUnitItems.map((item) => (
                <div
                  className="flex items-start justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors group"
                  key={item.id}
                >
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      {item.cartLabel}
                    </span>
                    <span className="font-receipt-mono text-body-sm text-on-surface-variant">
                      1 pcs × {rupiah(item.price)}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.note}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-receipt-mono text-label-lg font-bold text-on-surface">
                      {idr(item.price)}
                    </span>
                    <button
                      className="opacity-0 group-hover:opacity-100 text-error hover:underline font-label-sm text-label-sm transition-opacity"
                      onClick={() => toggleUnit(item.id)}
                      type="button"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))}

              {/* Delivery Service */}
              {deliveryFee > 0 && (
                <div className="flex items-start justify-between p-space-xs rounded-lg bg-surface-container-low/50">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Ongkos Antar Kurir Tebet
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Zona 1 (Radius &lt; 3 km)
                    </span>
                  </div>
                  <span className="font-receipt-mono text-label-lg font-bold text-on-surface">
                    {idr(deliveryFee)}
                  </span>
                </div>
              )}
            </div>
            {/* Voucher & Loyalty Point Application */}
            <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-lg">
              <div className="flex items-center gap-space-xs">
                <input
                  className="flex-1 bg-surface-container-lowest px-3 py-1.5 rounded font-receipt-mono text-label-md uppercase text-on-surface focus:outline-none shadow-sm"
                  onChange={(event) => setVoucherCode(event.target.value)}
                  placeholder="KODE VOUCHER"
                  type="text"
                  value={voucherCode}
                />
                <button
                  className="px-3 py-1.5 rounded bg-surface-container-highest text-on-surface font-label-md text-label-md hover:bg-opacity-80"
                  onClick={applyVoucher}
                  type="button"
                >
                  Pakai
                </button>
              </div>
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    checked={usePoints}
                    className="rounded text-secondary focus:ring-0"
                    onChange={(event) => setUsePoints(event.target.checked)}
                    type="checkbox"
                  />
                  <span className="font-body-sm text-body-sm text-on-surface">
                    Tukar 100 Poin CuciKita
                  </span>
                </label>
                <span className="font-receipt-mono text-label-sm text-secondary font-bold">
                  -{rupiah(5000)}
                </span>
              </div>
              {appliedVoucher && appliedVoucher !== 'HEMAT10K' && (
                <span className="font-label-sm text-label-sm text-error">
                  Kode &quot;{appliedVoucher}&quot; tidak dikenal — kupon tidak dipotong.
                </span>
              )}
            </div>

            {/* Calculation Subtotal Ledger */}
            <div className="flex flex-col gap-space-2xs border-t-0 pt-space-xs">
              <div className="flex justify-between text-on-surface-variant font-body-sm text-body-sm">
                <span>Subtotal Cucian</span>
                <span className="font-receipt-mono">{rupiah(subtotalCucian)}</span>
              </div>
              <div className="flex justify-between text-on-surface-variant font-body-sm text-body-sm">
                <span>Biaya Ongkos Kirim</span>
                <span className="font-receipt-mono">
                  {deliveryFee > 0 ? `+${rupiah(deliveryFee)}` : rupiah(0)}
                </span>
              </div>
              <div className="flex justify-between text-secondary font-body-sm text-body-sm">
                <span>Diskon Kupon ({appliedVoucher || '—'})</span>
                <span className="font-receipt-mono">-{rupiah(voucherDiscount)}</span>
              </div>
              <div className="flex justify-between text-secondary font-body-sm text-body-sm">
                <span>Potongan Poin Loyalitas</span>
                <span className="font-receipt-mono">-{rupiah(pointsDiscount)}</span>
              </div>
              <div className="flex items-baseline justify-between pt-space-xs mt-1 bg-surface-container-low p-space-sm rounded-lg">
                <span className="font-headline-md text-headline-md font-bold text-on-surface">
                  Total Tagihan
                </span>
                <div className="text-right">
                  <span className="font-data-metric text-data-metric font-bold text-primary-container">
                    {rupiah(totalTagihan)}
                  </span>
                  <span className="block font-receipt-mono text-label-sm text-on-surface-variant">
                    Termasuk PPN 11%
                  </span>
                </div>
              </div>
            </div>
            {/* Payment Settlement Mode */}
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Status Pembayaran
              </span>
              <div className="grid grid-cols-3 gap-space-xs">
                {PAYMENT_STATUSES.map((item) => (
                  <button
                    key={item.id}
                    className={`py-2 rounded-lg font-label-sm text-label-sm transition-colors ${
                      payStatus === item.id
                        ? 'bg-primary-container text-on-primary font-bold shadow-sm'
                        : 'bg-surface-container-low hover:bg-surface-container text-on-surface'
                    }`}
                    onClick={() => setPayStatus(item.id)}
                    type="button"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Channel Selectors */}
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Metode Pembayaran
              </span>
              <div className="grid grid-cols-3 gap-space-xs">
                {PAYMENT_METHODS.map((item) => {
                  const selected = payMethod === item.id
                  return (
                    <button
                      key={item.id}
                      className={`p-2.5 rounded-lg flex flex-col items-center justify-center gap-1 transition-colors ${
                        selected
                          ? 'bg-surface-container-lowest ring-2 ring-secondary'
                          : 'bg-surface-container-low hover:bg-surface-container'
                      }`}
                      onClick={() => setPayMethod(item.id)}
                      type="button"
                    >
                      <span
                        className={`material-symbols-outlined ${selected ? 'text-secondary' : 'text-on-surface-variant'}`}
                      >
                        {item.icon}
                      </span>
                      <span
                        className={`font-label-sm text-label-sm ${
                          selected ? 'text-on-surface font-bold' : 'text-on-surface'
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
            {/* Cash Nominal Suggestion Deck */}
            <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
              {quickCashOptions.map((option) => (
                <button
                  key={option}
                  className={`px-2.5 py-1 rounded font-receipt-mono text-label-sm transition-colors ${
                    cashNominal === option
                      ? 'bg-surface-container-lowest ring-1 ring-secondary text-secondary font-bold'
                      : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                  }`}
                  onClick={() => setCashNominal(option)}
                  type="button"
                >
                  {option === totalTagihan ? `Pas (${rupiah(option)})` : rupiah(option)}
                </button>
              ))}
              <span className="font-receipt-mono text-label-sm text-on-surface-variant ml-auto">
                Kembali: <strong>{rupiah(cashChange)}</strong>
              </span>
            </div>

            {/* Execution Triggers */}
            <div className="flex flex-col gap-space-xs pt-space-xs">
              <button
                className="w-full py-3.5 rounded-xl bg-primary-container hover:bg-opacity-95 text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-space-sm shadow-md active:scale-95 transition-all disabled:opacity-60 disabled:cursor-wait disabled:active:scale-100"
                disabled={saving}
                id="btn-process-checkout"
                onClick={handleCheckout}
                type="button"
              >
                <span className="material-symbols-outlined">receipt_long</span>
                <span>{saving ? 'Menyimpan ke Supabase...' : 'Proses & Cetak Nota'}</span>
                <kbd className="bg-secondary/40 text-on-primary px-2 py-0.5 rounded font-receipt-mono text-label-sm">
                  Enter
                </kbd>
              </button>
              <div className="grid grid-cols-2 gap-space-xs">
                <button
                  className="py-2 px-space-xs rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center gap-1 transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined text-sm text-secondary">chat</span>
                  <span>Kirim Struk WhatsApp</span>
                </button>
                <button
                  className="py-2 px-space-xs rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center gap-1 transition-colors"
                  onClick={() => setReceiptOpen((open) => !open)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  <span>Pratinjau Thermal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daftar order tersimpan di Supabase */}
      <OrderList
        error={ordersError}
        loading={ordersLoading}
        onRefresh={refreshOrders}
        orders={orders}
      />

      {/* Interactive Thermal Receipt Preview Modal (80mm roll printer output) */}
      <ReceiptDialog onClose={() => setReceiptOpen(false)} open={receiptOpen} order={receiptOrder} />
    </div>
  )
}
