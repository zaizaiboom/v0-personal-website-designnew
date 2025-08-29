"use client"

import { useMemo, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import type { Capability } from "@/data/core"


type Props = {
  humanities?: Capability[]
  tech?: Capability[]
  primaryColor?: string
  secondaryColor?: string
}

type NodeHit = {
  cap: Capability
  side: "left" | "right"
  t: number
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

/**
 * Enhanced interactive double helix with more vivid animations and effects
 */
export function DoubleHelix({
  humanities = [],
  tech = [],
  primaryColor = "#2C5E92",
  secondaryColor = "#E67E22",
}: Props) {
  const { scrollYProgress } = useScroll()
  const phase = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4])

  const [phi, setPhi] = useState(0)
  useMotionValueEvent(phase, "change", (v) => {
    if (typeof v === "number" && !Number.isNaN(v)) setPhi(v)
  })

  // Place nodes along the helix curve
  const nodes: NodeHit[] = useMemo(() => {
    const all = [...humanities, ...tech]
    const total = all.length || 1
    return all.map((cap, i) => {
      const t = i / total
      const side: "left" | "right" = cap.chain === "humanities" ? "left" : "right"
      return { cap, side, t }
    })
  }, [humanities, tech])

  const [active, setActive] = useState<NodeHit | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const width = 420
const height = 500
const [particles, setParticles] = useState<{x: number; y: number}[]>([]);

useEffect(() => {
  setParticles(Array.from({ length: 15 }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
  })));
}, [width, height]);
const cx = width / 2
  const amp = 80 // increased amplitude for more dramatic curves
  const pitch = 3 // increased pitch for more spirals
  const steps = 300 // increased steps for smoother curves

  function curveY(i: number) {
    return (i / steps) * height
  }
  function curveX(i: number, sidePhase = 0) {
    const yNorm = i / steps
    return cx + Math.sin(yNorm * pitch * Math.PI * 2 + sidePhase + phi * 0.5) * amp
  }

  // Enhanced base pairs with dynamic positioning
  const basePairs = new Array(24).fill(0).map((_, idx) => {
    const i = Math.floor((idx / 24) * steps)
    return i
  })

  function nodePosition(n: NodeHit, phi: number) {
    const i = Math.floor(n.t * steps)
    const y = curveY(i)
    const xLeft = curveX(i, phi)
    const xRight = curveX(i, phi + Math.PI)
    const x = n.side === "left" ? xLeft : xRight
    return { x, y }
  }

  return (
    <>
      <div className="w-full h-[500px] relative">
        <motion.svg
          role="img"
          aria-label="DNA双螺旋交互导航"
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${height}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Enhanced gradient definitions */}
          <defs>
            <linearGradient id="gradH" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.9" />
              <stop offset="50%" stopColor="#F39C12" stopOpacity="0.7" />
              <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradT" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={primaryColor} stopOpacity="0.9" />
              <stop offset="50%" stopColor="#3498DB" stopOpacity="0.7" />
              <stop offset="100%" stopColor={primaryColor} stopOpacity="0.3" />
            </linearGradient>

            {/* Glow effects */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Pulse animation for nodes */}
            <filter id="pulse">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background particles */}
          <g opacity="0.3">
            {particles.map((p, i) => (
              <motion.circle
                key={i}
                cx={p.x}
                cy={p.y}
                r="1"
                fill={i % 2 === 0 ? primaryColor : secondaryColor}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </g>

          {/* Enhanced helix strands with glow */}
          <motion.path
            d={buildPath(steps, (i) => [curveX(i, phi), curveY(i)])}
            stroke="url(#gradH)"
            strokeWidth={4}
            fill="none"
            filter="url(#glow)"
            animate={{
              strokeWidth: [3, 5, 3],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d={buildPath(steps, (i) => [curveX(i, phi + Math.PI), curveY(i)])}
            stroke="url(#gradT)"
            strokeWidth={4}
            fill="none"
            filter="url(#glow)"
            animate={{
              strokeWidth: [3, 5, 3],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />

          {/* Enhanced base pairs with animation */}
          {basePairs.map((i, idx) => {
            const y = curveY(i)
            const x1 = curveX(i, phi)
            const x2 = curveX(i, phi + Math.PI)
            const c = idx % 2 === 0 ? primaryColor : secondaryColor
            return (
              <motion.line
                key={idx}
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke={c}
                strokeOpacity={0.4}
                strokeWidth={2}
                animate={{
                  strokeOpacity: [0.2, 0.6, 0.2],
                  strokeWidth: [1, 3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: idx * 0.1,
                }}
              />
            )
          })}

          {/* Enhanced nodes with better interactions */}
          <motion.g>
            {nodes.map((n) => {
              const pos = nodePosition(n, phi)
              const c = n.side === "left" ? secondaryColor : primaryColor
              const isHovered = hoveredNode === n.cap.id
              const isCore = n.cap.core

              return (
                <g key={n.cap.id}>
                  {/* Node glow effect */}
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isHovered ? 15 : 12}
                    fill={c}
                    fillOpacity={0.2}
                    animate={{
                      r: isHovered ? [12, 18, 12] : [8, 12, 8],
                      fillOpacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />

                  {/* Main node */}
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isCore ? 10 : 8}
                    fill={c}
                    fillOpacity={0.9}
                    stroke="white"
                    strokeWidth={isCore ? 3 : 2}
                    filter={isHovered ? "url(#pulse)" : undefined}
                    tabIndex={0}
                    role="button"
                    aria-label={`${n.cap.name}（${n.cap.chain === "humanities" ? "人文链" : "技术链"}）`}
                    onClick={() => setActive(n)}
                    onMouseEnter={() => setHoveredNode(n.cap.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setActive(n)
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={
                      isCore
                        ? {
                            scale: [1, 1.1, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />

                  {/* Core indicator */}
                  {isCore && (
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r={4}
                      fill="white"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  )}

                  {/* Enhanced labels */}
                  <motion.text
                    x={clamp(pos.x + (n.side === "left" ? -12 : 12), 10, width - 10)}
                    y={pos.y - 15}
                    textAnchor={n.side === "left" ? "end" : "start"}
                    fontSize={12}
                    fontWeight={isCore ? "600" : "400"}
                    fill="#334155"
                    style={{ userSelect: "none" }}
                    animate={{
                      opacity: isHovered ? 1 : 0.8,
                      fontSize: isHovered ? 13 : 12,
                    }}
                  >
                    {n.cap.name}
                  </motion.text>
                </g>
              )
            })}
          </motion.g>

          {/* Floating connection indicators */}
          <g opacity="0.6">
            {nodes.slice(0, -1).map((n, i) => {
              const nextNode = nodes[i + 1]
              if (!nextNode || n.side === nextNode.side) return null

              const pos1 = nodePosition(n, phi)
              const pos2 = nodePosition(nextNode, phi)

              return (
                <motion.line
                  key={`connection-${i}`}
                  x1={pos1.x}
                  y1={pos1.y}
                  x2={pos2.x}
                  y2={pos2.y}
                  stroke="#94a3b8"
                  strokeWidth={1}
                  strokeDasharray="2,2"
                  animate={{
                    strokeDashoffset: [0, -4],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              )
            })}
          </g>
        </motion.svg>
      </div>

      <Dialog open={!!active} onOpenChange={() => setActive(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>{active?.cap.name}</span>
              {active?.cap.core && <Badge variant="secondary">核心能力</Badge>}
            </DialogTitle>
          </DialogHeader>
          {active && (
            <div className="space-y-3">
              <div className="text-sm">
                <span className="font-medium">链路：</span>
                {active.cap.chain === "humanities" ? "人文链（语言→洞察）" : "技术链（思维→落地）"}
              </div>
              <div className="text-sm">
                <span className="font-medium">能力转化：</span>
                {active.cap.transform}
              </div>
              <div className="text-sm">
                <span className="font-medium">能力等级：</span>
                {active.cap.level} / 100
              </div>
              {active.cap.metrics?.length ? (
                <div className="text-sm">
                  <span className="font-medium">量化成果：</span>
                  <ul className="list-disc pl-5">
                    {active.cap.metrics.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

function buildPath(steps: number, f: (i: number) => [number, number]) {
  const d = []
  for (let i = 0; i <= steps; i++) {
    const [x, y] = f(i)
    d.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`)
  }
  return d.join(" ")
}
