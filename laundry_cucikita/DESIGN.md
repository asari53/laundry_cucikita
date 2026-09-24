---
name: Laundry CuciKita
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464651'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#777683'
  outline-variant: '#c7c5d3'
  surface-tint: '#5156aa'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#070666'
  on-primary-container: '#777cd3'
  inverse-primary: '#bfc1ff'
  secondary: '#5451b8'
  on-secondary: '#ffffff'
  secondary-container: '#9592fe'
  on-secondary-container: '#29228d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001e2c'
  on-tertiary-container: '#488bad'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#bfc1ff'
  on-primary-fixed: '#070666'
  on-primary-fixed-variant: '#393d91'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#0f0069'
  on-secondary-fixed-variant: '#3c379f'
  tertiary-fixed: '#c3e8ff'
  tertiary-fixed-dim: '#8dcff3'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c68'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  display-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
  data-metric:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  receipt-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1.5rem
  margin-compact: 1rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style
The design system powers an enterprise-grade laundry operations suite and point-of-sale system built for heavy daily utilization, precision tracking, and operational velocity. It blends technical utility with crisp, hygiene-focused clarity.

The visual style combines **Corporate / Modern** structure with **Tactile Utility**:
- **Utilitarian Elegance**: Dense operational data (scale weights in kg, pricing tables, piece counts) is balanced by clean, breathable spacing, ensuring zero cognitive fatigue during long cashier and supervisor shifts.
- **Hygiene & Precision**: Cool navy structures represent trust and enterprise control, balanced by fresh aquatic accents evoke cleanliness, fabric care, and freshness.
- **Immediate Status Awareness**: Dynamic, instantly recognizable states for garments cycling across stages (Draft, Washing, Drying, Ironing, Packing, Ready) guarantee high operational throughput under pressure.

## Colors
The color architecture supports multi-tiered enterprise workflows, balancing heavy-contrast navigation with crisp transactional zones.

### Core Swatches
- **Primary Deep Navy (`#030164`)**: Command canvas for high-level UI chrome, dark navigation rail, master action buttons, and dominant operational headings.
- **Indigo Brand (`#363199`)**: Interactive primary triggers, active selection states, order IDs, and focal data highlights.
- **Teal Freshness Accent (`#2D7495`)**: Functional indicator of sanitization, wash cycle indicators, fabric freshness alerts, and positive progress vectors.
- **Warm Lemon Accent (`#E8E085`)**: Operational focus, alert chips, active timer indicators, and warning-level notifications without cognitive panic.

### Neutral & Canvas Palette
- **Background Root**: `#F8FAFC` (Slate-50) – ultra-crisp base canvas.
- **Surface Elevation**: `#FFFFFF` – pure white for primary metric and ticket cards.
- **Surface Dim / Inputs**: `#F1F5F9` (Slate-100) – structural inset backgrounds, search bars, and table striping.
- **Borders & Dividers**: `#E2E8F0` (Slate-200) – clean separation without visual noise.
- **Text Dominance**: Master Ink (`#0F172A`), Secondary Meta (`#475569`), Muted Clues (`#94A3B8`).

### Laundry Status Semantics
- **Draft**: Neutral Slate (Fill: `#F1F5F9`, Text: `#475569`, Border: `#CBD5E1`)
- **Washing**: Deep Teal Hydration (Fill: `#E6F4F8`, Text: `#164E63`, Border: `#2D7495`)
- **Drying**: Warm Amber Air (Fill: `#FEF9C3`, Text: `#713F12`, Border: `#E8E085`)
- **Ironing**: Indigo Press (Fill: `#EDE9FE`, Text: `#3730A3`, Border: `#818CF8`)
- **Packing**: Sky Parcel (Fill: `#E0F2FE`, Text: `#075985`, Border: `#38BDF8`)
- **Ready / Completed**: Emerald Fresh (Fill: `#DCFCE7`, Text: `#166534`, Border: `#4ADE80`)

## Typography
Plus Jakarta Sans serves as the universal typeface, providing clean geometry, legibility on high-DPI POS terminals, and open counterforms.

### Tabular Numerical Integrity
Every monetary value (`IDR`, `$`), batch scale weight (`kg`), piece count, and shelf coordinate must enforce `font-feature-settings: "tnum" 1` (tabular figures). This guarantees absolute vertical alignment across high-speed POS registers, line item summaries, and daily end-of-shift audits.

### Thermal Receipt Typography
Thermal receipt previews switch context to `JetBrains Mono` (`receipt-mono`), strictly emulating fixed-width 58mm/80mm ESC/POS hardware outputs with crisp ink contrast.

## Layout & Spacing
The layout architecture is structured for full-screen enterprise desktop management (1280px to 1920px+ viewport spans):

- **Master Navigation Structure**: Fixed 260px Primary Deep Navy sidebar (`#030164`) anchored left for macro navigation (POS, Service Queues, Tracking, Inventory, Financials, Settings).
- **Dual-Pane POS Layout**: Fluid catalog/service selector grid (spanning 65% width) paired with a persistent sticky order manifest and tender calculation rail (spanning 35% width).
- **Grid Architecture**: 12-column dynamic desktop grid with 1.5rem (`gutter-lg`) gutters for standard management dashboards; 1rem (`gutter`) gutters for transactional register views to maximize visibility above the fold.
- **Rhythm**: Component interiors follow a rigid 4px/8px incremental grid. Input rows, data-table cells, and transaction line items leverage `space-sm` vertical padding to ensure fast touch/click targets without wasted canvas space.

## Elevation & Depth
Depth is created through precise surface-level borders coupled with diffuse, low-opacity ambient shadows, maintaining clarity across industrial desktop displays.

### Layer Hierarchy
- **Level 0 (Floor)**: Canvas background (`#F8FAFC`). No shadow.
- **Level 1 (Card & Content Blocks)**: Surface white (`#FFFFFF`) with a 1px border (`#E2E8F0`) and subtle ambient shadow: `0 1px 3px 0 rgba(3, 1, 100, 0.04), 0 1px 2px -1px rgba(3, 1, 100, 0.02)`.
- **Level 2 (Interactive Floating / Active Tickets)**: White surfaces elevated on mouse-over or active drag states: `0 8px 16px -4px rgba(3, 1, 100, 0.08), 0 2px 4px -2px rgba(3, 1, 100, 0.04)`.
- **Level 3 (Modals & Slide-Over Cash Drawers)**: Heavy backdrop blur (`backdrop-blur-sm` with `rgba(3, 1, 100, 0.4)`) paired with high-impact soft projection: `0 20px 25px -5px rgba(3, 1, 100, 0.15), 0 8px 10px -6px rgba(3, 1, 100, 0.08)`.

## Shapes
A unified rounded geometry (`roundedness: 2`) softens the utilitarian interface while maintaining a modern enterprise look:
- **Cards & Data Panels**: Scaled to `rounded-xl` (1.5rem / 24px) for prominent visual sections and ticket pods.
- **Buttons, Form Inputs, & Dropdowns**: Set to `rounded-md` (0.5rem / 8px) for clear tactile bounds.
- **Status Tags & Metric Badges**: Rendered in full pill-shape (`rounded-full`) to differentiate metadata from actionable input controls.

## Components

### Buttons & POS Fast-Triggers
- **Primary POS Action** (e.g., "Bayar / Pay", "Simpan Order"): Solid Primary Deep Navy (`#030164`), text white, `rounded-md`, 48px height for point-of-sale efficiency, active transform `scale(0.99)`.
- **Secondary Action** (e.g., "Add Customer", "Apply Coupon"): Crisp white background, 1px border (`#E2E8F0`), text Deep Navy, hover background `#F1F5F9`.
- **Accent Triggers** (e.g., "Weigh Scale Sync"): Indigo Brand (`#363199`) or Fresh Teal (`#2D7495`) with bold iconography and tabular weight outputs.

### Status Badges & Trackers
- Badges use pill-shapes (`rounded-full`) with uppercase tracking (`tracking-wider`, `label-sm`), featuring a 6px status dot alongside the label.
- Color pairs strictly follow semantic token assignments (e.g., *Washing* in `#E6F4F8` with `#164E63` text; *Ready* in `#DCFCE7` with `#166534` text).

### Metric Cards & Scale Inputs
- Scale reading displays use large numeric sizing (`data-metric`) accompanied by a static `kg` label in Muted Slate.
- Cards feature a pure white surface, 1px `#E2E8F0` border, `rounded-xl` shape, and a 4px top accent border keyed to the active department or metric.

### Thermal Receipt Modal & Drawer
- **Dimensions**: Centered 400px fixed dialog simulating receipt thermal paper roll width.
- **Visuals**: Off-white sheet (`#FFFFFF`) framed with subtle drop shadow, monospaced line items (`receipt-mono`), dashed dividers (`border-dashed border-slate-300`), and real-time print execution triggers.

### Data Tables & Kanban Swimlanes
- **Tables**: Fixed headers, striped rows using alternate `#F8FAFC`, active order highlight with a 3px Indigo left-accent bar.
- **Queue Swimlanes**: Dedicated vertical rails per laundry phase, with draggable ticket cards indicating customer name, weight, service tier (Regular / Express), and remaining cycle timer.