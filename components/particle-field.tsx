"use client"

import { useEffect, useRef } from "react"

type Props = {
  className?: string
  color?: string
  secondaryColor?: string
  count?: number
  speed?: number
  opacity?: number
}

export function ParticleField({
  className,
  color = "#E67E22",
  secondaryColor = "#2C5E92",
  count = 60,
  speed = 0.25,
  opacity = 0.25,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number>()
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; r: number; c: string }[]>([])
  const sizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    function resize() {
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      sizeRef.current.w = Math.max(1, rect.width)
      sizeRef.current.h = Math.max(1, rect.height)
      canvas.width = Math.floor(sizeRef.current.w * dpr)
      canvas.height = Math.floor(sizeRef.current.h * dpr)
      canvas.style.width = `${sizeRef.current.w}px`
      canvas.style.height = `${sizeRef.current.h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    const ro = new ResizeObserver(resize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    // init particles
    particlesRef.current = Array.from({ length: count }).map((_, i) => {
      const usePrimary = i % 2 === 0
      const r = Math.random() * 1.8 + 0.6
      return {
        x: Math.random() * sizeRef.current.w,
        y: Math.random() * sizeRef.current.h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        r,
        c: usePrimary ? color : secondaryColor,
      }
    })

    function step() {
      if (!ctx) return
      const { w, h } = sizeRef.current
      ctx.clearRect(0, 0, w, h)

      // subtle glow gradient
      const grad = ctx.createRadialGradient(w * 0.2, h * 0.2, 0, w * 0.2, h * 0.2, Math.max(w, h) * 0.8)
      grad.addColorStop(0, "rgba(255,255,255,0.06)")
      grad.addColorStop(1, "rgba(255,255,255,0.00)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      // draw particles
      const ps = particlesRef.current
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < -5) p.x = w + 5
        if (p.x > w + 5) p.x = -5
        if (p.y < -5) p.y = h + 5
        if (p.y > h + 5) p.y = -5

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = hexToRgba(p.c, opacity)
        ctx.fill()
      }

      // soft connections
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const a = ps[i]
          const b = ps[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 80) {
            const alpha = (1 - dist / 80) * 0.25
            ctx.strokeStyle = hexToRgba("#94a3b8", alpha)
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [color, secondaryColor, count, speed, opacity])

  return <canvas ref={canvasRef} aria-hidden="true" className={className || ""} />
}

function hexToRgba(hex: string, a = 1) {
  const h = hex.replace("#", "")
  const bigint = Number.parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16,
  )
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${a})`
}
