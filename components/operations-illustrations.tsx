// Operasyon kartları için şematik illüstrasyonlar (saf SVG, sıfır görsel dosyası).
// Bunlar ürün ekran görüntüsü DEĞİL; özelliğin ne anlattığını gösteren genel çizimlerdir.
// Gerçek ürün ekran görüntüleri hazır olduğunda yerlerine konabilir.
// Çizimlerde yalnızca rakam ve şekil kullanılır, böylece TR/EN için ayrı çeviri gerekmez.

const QR_SIZE = 15
const CELL = 6

function isFinderZone(x: number, y: number) {
  return (x < 8 && y < 8) || (x > QR_SIZE - 9 && y < 8) || (x < 8 && y > QR_SIZE - 9)
}

// Rastgele sayı kullanılmaz: sunucu ve istemci aynı çıktıyı üretsin (hydration uyumu).
const qrCells = Array.from({ length: QR_SIZE * QR_SIZE }, (_, i) => ({ x: i % QR_SIZE, y: Math.floor(i / QR_SIZE) })).filter(
  ({ x, y }) => !isFinderZone(x, y) && (x * 7 + y * 13 + x * y) % 5 < 2,
)

function Finder({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x} y={y} width={7 * CELL} height={7 * CELL} rx={4} className="fill-foreground" />
      <rect x={x + CELL} y={y + CELL} width={5 * CELL} height={5 * CELL} rx={2} className="fill-card" />
      <rect x={x + 2 * CELL} y={y + 2 * CELL} width={3 * CELL} height={3 * CELL} rx={2} className="fill-foreground" />
    </g>
  )
}

export function QrMenuIllustration({ className = "" }: { className?: string }) {
  const ox = 45
  const oy = 62
  return (
    <svg viewBox="0 0 360 240" className={className} aria-hidden="true" focusable="false">
      {/* Masadaki QR kartı */}
      <rect x="28" y="44" width="124" height="152" rx="14" className="fill-card stroke-border" strokeWidth="2" />
      <Finder x={ox} y={oy} />
      <Finder x={ox + (QR_SIZE - 7) * CELL} y={oy} />
      <Finder x={ox} y={oy + (QR_SIZE - 7) * CELL} />
      {qrCells.map(({ x, y }) => (
        <rect key={`${x}-${y}`} x={ox + x * CELL} y={oy + y * CELL} width={CELL - 1} height={CELL - 1} rx="1" className="fill-foreground" />
      ))}
      {/* Tarama çizgisi ve köşe işaretleri */}
      <rect x="36" y="104" width="108" height="3" rx="1.5" className="fill-success" opacity="0.85" />
      <g className="stroke-success" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M38 70v-8h8" />
        <path d="M142 70v-8h-8" />
        <path d="M38 146v8h8" />
        <path d="M142 146v8h-8" />
      </g>
      <rect x="52" y="168" width="76" height="6" rx="3" className="fill-primary/25" />
      <rect x="64" y="180" width="52" height="6" rx="3" className="fill-muted-foreground/25" />

      {/* Telefona bağlantı */}
      <path d="M156 120h34" className="stroke-primary" strokeWidth="3" strokeDasharray="4 6" strokeLinecap="round" fill="none" />
      <path d="M188 112l10 8-10 8z" className="fill-primary" />

      {/* Telefon */}
      <rect x="204" y="20" width="132" height="200" rx="22" className="fill-card stroke-primary" strokeWidth="3" />
      <rect x="254" y="28" width="32" height="6" rx="3" className="fill-primary/25" />
      <rect x="216" y="44" width="108" height="34" rx="8" className="fill-primary" />
      <rect x="226" y="54" width="58" height="7" rx="3.5" className="fill-white/90" />
      <rect x="226" y="66" width="34" height="5" rx="2.5" className="fill-white/60" />
      {[0, 1, 2].map((i) => {
        const y = 88 + i * 34
        return (
          <g key={i}>
            <rect x="216" y={y} width="30" height="28" rx="8" className="fill-primary/15" />
            <circle cx="231" cy={y + 14} r="6" className="fill-primary/40" />
            <rect x="254" y={y + 4} width="44" height="6" rx="3" className="fill-muted-foreground/50" />
            <rect x="254" y={y + 16} width="28" height="5" rx="2.5" className="fill-muted-foreground/25" />
            <rect x="300" y={y + 7} width="24" height="14" rx="7" className="fill-success/30" />
          </g>
        )
      })}
      <rect x="216" y="192" width="108" height="20" rx="10" className="fill-primary" />
    </svg>
  )
}

const attendanceRows = [
  { time: "08:58", avatar: "fill-primary/30", dot: "fill-success", nameW: 84 },
  { time: "09:03", avatar: "fill-success/35", dot: "fill-success", nameW: 72 },
  { time: "09:11", avatar: "fill-warning/45", dot: "fill-warning", nameW: 96 },
  { time: "--:--", avatar: "fill-primary/20", dot: "", nameW: 66 },
]

export function AttendanceIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 240" className={className} aria-hidden="true" focusable="false">
      <rect x="20" y="20" width="320" height="200" rx="16" className="fill-card stroke-border" strokeWidth="2" />
      {/* Başlık */}
      <circle cx="48" cy="50" r="14" className="fill-primary/15" />
      <path d="M48 42v8l6 4" className="stroke-primary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="70" y="40" width="96" height="9" rx="4.5" className="fill-foreground/75" />
      <rect x="70" y="55" width="64" height="6" rx="3" className="fill-muted-foreground/30" />
      <rect x="266" y="38" width="58" height="24" rx="12" className="fill-success/20" />
      <text x="295" y="55" textAnchor="middle" fontSize="12" fontWeight="700" className="fill-success-ink">
        3/4
      </text>
      <path d="M36 76h288" className="stroke-border" strokeWidth="2" />

      {attendanceRows.map((row, i) => {
        const y = 90 + i * 32
        return (
          <g key={row.time}>
            <circle cx="46" cy={y + 10} r="11" className={row.avatar} />
            <circle cx="46" cy={y + 6} r="3.5" className="fill-white/85" />
            <path d={`M39 ${y + 17}a7 6 0 0 1 14 0`} className="fill-white/85" />
            <rect x="68" y={y + 3} width={row.nameW} height="7" rx="3.5" className="fill-foreground/70" />
            <rect x="68" y={y + 15} width="44" height="5" rx="2.5" className="fill-muted-foreground/25" />
            <text x="246" y={y + 15} fontSize="13" fontWeight="600" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" className={row.dot ? "fill-foreground" : "fill-muted-foreground/60"}>
              {row.time}
            </text>
            {row.dot ? (
              <circle cx="314" cy={y + 10} r="6" className={row.dot} />
            ) : (
              <circle cx="314" cy={y + 10} r="5" className="fill-none stroke-muted-foreground/50" strokeWidth="2" />
            )}
          </g>
        )
      })}
    </svg>
  )
}

export function TaskIllustration({ className = "" }: { className?: string }) {
  const tasks = [
    { done: true, barW: 150, avatar: "fill-primary/35" },
    { done: true, barW: 120, avatar: "fill-warning/45" },
    { done: false, barW: 138, avatar: "fill-success/40" },
  ]
  return (
    <svg viewBox="0 0 360 240" className={className} aria-hidden="true" focusable="false">
      <rect x="20" y="20" width="320" height="200" rx="16" className="fill-card stroke-border" strokeWidth="2" />
      {/* Başlık ve ilerleme halkası */}
      <rect x="40" y="38" width="112" height="9" rx="4.5" className="fill-foreground/75" />
      <rect x="40" y="54" width="70" height="6" rx="3" className="fill-muted-foreground/30" />
      <circle cx="304" cy="48" r="16" className="fill-none stroke-secondary" strokeWidth="5" />
      <circle
        cx="304"
        cy="48"
        r="16"
        className="fill-none stroke-success"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="67 100.5"
        transform="rotate(-90 304 48)"
      />
      <text x="304" y="52" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-foreground">
        2/3
      </text>
      <path d="M36 76h288" className="stroke-border" strokeWidth="2" />

      {tasks.map((task, i) => {
        const y = 88 + i * 32
        return (
          <g key={i}>
            {task.done ? (
              <>
                <rect x="36" y={y} width="22" height="22" rx="6" className="fill-success" />
                <path d={`M42 ${y + 11}l4 4 7-8`} stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </>
            ) : (
              <rect x="37" y={y + 1} width="20" height="20" rx="6" className="fill-card stroke-border" strokeWidth="2" />
            )}
            <rect x="68" y={y + 3} width={task.barW} height="7" rx="3.5" className={task.done ? "fill-muted-foreground/40" : "fill-foreground/70"} />
            <rect x="68" y={y + 15} width="56" height="5" rx="2.5" className="fill-muted-foreground/25" />
            <circle cx="304" cy={y + 11} r="11" className={task.avatar} />
            <circle cx="304" cy={y + 7} r="3.5" className="fill-white/85" />
            <path d={`M297 ${y + 18}a7 6 0 0 1 14 0`} className="fill-white/85" />
          </g>
        )
      })}

      {/* Yeni görev ekle */}
      <rect x="36" y="186" width="288" height="26" rx="8" className="fill-none stroke-primary/50" strokeWidth="2" strokeDasharray="5 4" />
      <path d="M180 192v14M173 199h14" className="stroke-primary" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}
