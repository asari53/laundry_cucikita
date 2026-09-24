export default function Placeholder({ title }) {
  return (
    <div className="flex flex-col w-full gap-space-lg">
      <section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
          Modul Berikutnya
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">{title}</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Halaman <strong className="text-on-surface">{title}</strong> akan dibangun mengikuti shell
          dashboard yang sama. Struktur project React + Vite ini sudah disiapkan agar desain dari
          folder <span className="font-receipt-mono text-receipt-mono">design/</span> dapat langsung
          diimplementasikan pada iterasi berikutnya.
        </p>
        <a
          className="self-start flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary hover:bg-secondary transition-colors font-label-md text-label-md"
          href="/"
        >
          <span className="material-symbols-outlined text-headline-sm">arrow_back</span>
          <span>Kembali ke Dashboard</span>
        </a>
      </section>
    </div>
  )
}
