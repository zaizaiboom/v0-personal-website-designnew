"use client"

import { useEffect, useRef } from "react"

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener("resize", resize)

    // Floating geometric shapes
    const shapes: Array<{
      x: number
      y: number
      size: number
      rotation: number
      speed: number
      type: "triangle" | "circle" | "square"
      opacity: number
    }> = []

    for (let i = 0; i < 12; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 8,
        rotation: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.3 + 0.1,
        type: ["triangle", "circle", "square"][Math.floor(Math.random() * 3)] as any,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    const drawShapes = () => {
      shapes.forEach((shape) => {
        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.rotate(shape.rotation)
        ctx.strokeStyle = `rgba(59, 130, 246, ${shape.opacity})`
        ctx.fillStyle = `rgba(6, 182, 212, ${shape.opacity * 0.3})`
        ctx.lineWidth = 1.5

        switch (shape.type) {
          case "triangle":
            ctx.beginPath()
            ctx.moveTo(0, -shape.size / 2)
            ctx.lineTo(-shape.size / 2, shape.size / 2)
            ctx.lineTo(shape.size / 2, shape.size / 2)
            ctx.closePath()
            break
          case "circle":
            ctx.beginPath()
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
            break
          case "square":
            ctx.beginPath()
            ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
            break
        }

        ctx.fill()
        ctx.stroke()
        ctx.restore()

        // Update position
        shape.rotation += 0.005
        shape.y += shape.speed
        if (shape.y > canvas.height + shape.size) {
          shape.y = -shape.size
          shape.x = Math.random() * canvas.width
        }
      })
    }

    // Connection lines between shapes
    const drawConnections = () => {
      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const dx = shapes[i].x - shapes[j].x
          const dy = shapes[i].y - shapes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.15
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(shapes[i].x, shapes[i].y)
            ctx.lineTo(shapes[j].x, shapes[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      drawShapes()
      drawConnections()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
}
