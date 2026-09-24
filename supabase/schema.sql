-- ============================================================
-- Skema Database Supabase — Laundry CuciKita (Kasir POS)
-- Jalankan di: Supabase Dashboard → SQL Editor → New query
-- ============================================================

create extension if not exists "pgcrypto";

-- Tabel order kasir POS
create table if not exists public.orders (
  id                uuid primary key default gen_random_uuid(),
  nota              text not null unique,
  created_at        timestamptz not null default now(),

  -- Identitas pelanggan
  customer_name     text not null,
  customer_phone    text,
  customer_tier     text,

  -- Layanan & detail cucian
  service_tier_id   text not null,
  service_tier_label text not null,
  weight_kg         numeric(6, 2) not null default 0,
  fragrance         text,
  delivery_method   text not null check (delivery_method in ('antar', 'pickup')),
  notes             text,

  -- Rincian item (JSON array): [{ name, detail, amount }]
  items             jsonb not null default '[]'::jsonb,

  -- Perhitungan tagihan
  subtotal_cucian   numeric(14, 2) not null default 0,
  delivery_fee      numeric(14, 2) not null default 0,
  voucher_code      text,
  voucher_discount  numeric(14, 2) not null default 0,
  points_discount   numeric(14, 2) not null default 0,
  total             numeric(14, 2) not null default 0,

  -- Pembayaran
  pay_status        text not null check (pay_status in ('lunas', 'dp', 'nanti')),
  pay_method        text not null check (pay_method in ('tunai', 'qris', 'bca')),
  cash_nominal      numeric(14, 2),
  cash_change       numeric(14, 2),

  -- Status order di pipeline laundry
  status            text not null default 'antri'
                    check (status in ('antri', 'cuci', 'kering', 'setrika', 'selesai', 'diambil'))
);

-- Query daftar order terbaru lebih cepat
create index if not exists orders_created_at_idx on public.orders (created_at desc);
create index if not exists orders_customer_name_idx on public.orders (customer_name);

-- ------------------------------------------------------------
-- Row Level Security: hanya role `anon` (frontend) yang dipakai,
-- jadi policy dibuka untuk insert & select dari aplikasi ini.
-- ------------------------------------------------------------
alter table public.orders enable row level security;

drop policy if exists "Anon dapat membaca order" on public.orders;
create policy "Anon dapat membaca order"
  on public.orders
  for select
  to anon
  using (true);

drop policy if exists "Anon dapat membuat order" on public.orders;
create policy "Anon dapat membuat order"
  on public.orders
  for insert
  to anon
  with check (true);

-- Selesai. Coba dari aplikasi: /kasir-pos → "Proses & Cetak Nota"
