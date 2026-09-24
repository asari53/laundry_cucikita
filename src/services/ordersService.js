import { isSupabaseConfigured, supabase } from '../lib/supabase'

const ensureConfigured = () => {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error(
      'Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY pada file .env lalu restart dev server.',
    )
  }
}

const mapRow = (row) => ({
  id: row.id,
  nota: row.nota,
  createdAt: row.created_at,
  customerName: row.customer_name,
  serviceLabel: row.service_tier_label,
  weightKg: Number(row.weight_kg ?? 0),
  itemCount: Array.isArray(row.items) ? row.items.length : 0,
  total: Number(row.total ?? 0),
  payStatus: row.pay_status,
  payMethod: row.pay_method,
  deliveryMethod: row.delivery_method,
})

/** Simpan order baru ke tabel `public.orders`. Melempar error Supabase (termasuk unique violation 23505). */
export async function createOrder(payload) {
  ensureConfigured()
  const { data, error } = await supabase.from('orders').insert(payload).select('*').single()
  if (error) throw error
  return mapRow(data)
}

/** Ambil daftar order terbaru. */
export async function listOrders(limit = 50) {
  ensureConfigured()
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)
  if (error) throw error
  return (data ?? []).map(mapRow)
}
