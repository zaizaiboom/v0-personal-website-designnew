"use client"

type Axis = { label: string; value: number }
type Props = {
  size?: number
  axes?: Axis[]
  stroke?: string
  fill?: string
}

export function RadarChart({
  size = 280,
  axes = [
    { label: "用户需求洞察", value: 90 },
    { label: "医疗场景理解", value: 85 },
    { label: "技术可行性评估", value: 75 },
  ],
  stroke = "#2C5E92",
  fill = "#2C5E92",
}: Props) {
  const padding = 28
  const r = (size - padding * 2) / 2
  const cx = size / 2
  const cy = size / 2
  const n = axes.length
  const levels = 4

  function angle(i: number) {
    return (Math.PI * 2 * i) / n - Math.PI / 2
  }
  function point(v: number, i: number) {
    const a = angle(i)
    const radius = (v / 100) * r
    return [cx + Math.cos(a) * radius, cy + Math.sin(a) * radius]
  }

  const polygon = axes
    .map((a, i) => point(a.value, i))
    .map(([x, y]) => `${x},${y}`)
    .join(" ")

  return (
    <svg width={size} height={size} role="img" aria-label="能力雷达图">
      {/* grid */}
      {Array.from({ length: levels }).map((_, li) => {
        const rr = r * ((li + 1) / levels)
        const grid = axes.map((_, i) => {
          const a = angle(i)
          return [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]
        })
        const d = grid.map(([x, y]) => `${x},${y}`).join(" ")
        return <polygon key={li} points={d} fill="none" stroke="#94a3b8" strokeOpacity={0.3} />
      })}
      {/* axes lines and labels */}
      {axes.map((a, i) => {
        const [x, y] = point(100, i)
        const [lx, ly] = point(115, i)
        return (
          <g key={a.label}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="#94a3b8" strokeOpacity={0.3} />
            <text x={lx} y={ly} fontSize={12} textAnchor="middle" fill="#334155">
              {a.label}
            </text>
          </g>
        )
      })}
      {/* data */}
      <polygon points={polygon} fill={fill} fillOpacity={0.15} stroke={stroke} strokeWidth={2} />
    </svg>
  )
}
