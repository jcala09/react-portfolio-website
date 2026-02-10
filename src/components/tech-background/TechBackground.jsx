import React, { useRef, useEffect } from 'react'
import './TechBackground.css'

const PARTICLE_COUNT = 80
const CONNECT_DISTANCE = 140
const PARTICLE_RADIUS = 1.2
const LINE_OPACITY = 0.12
const DRIFT = 0.3
const PRIMARY = { r: 77, g: 181, b: 255 }
const ACCENT = { r: 0, g: 255, b: 200 }

function TechBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)
      initParticles(w, h)
    }

    const initParticles = (w, h) => {
      particles = []
      const isMobile = w < 768
      const count = isMobile ? Math.min(40, PARTICLE_COUNT) : PARTICLE_COUNT
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * DRIFT,
          vy: (Math.random() - 0.5) * DRIFT,
          radius: PARTICLE_RADIUS + Math.random() * 0.8,
          accent: Math.random() > 0.85,
        })
      }
    }

    const drawGrid = (w, h) => {
      const step = 60
      const alpha = 0.03
      ctx.strokeStyle = `rgba(77, 181, 255, ${alpha})`
      ctx.lineWidth = 0.5
      ctx.beginPath()
      for (let x = 0; x <= w + step; x += step) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
      }
      for (let y = 0; y <= h + step; y += step) {
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
      }
      ctx.stroke()
    }

    const draw = () => {
      const w = canvas.style.width ? parseInt(canvas.style.width, 10) : window.innerWidth
      const h = canvas.style.height ? parseInt(canvas.style.height, 10) : window.innerHeight

      ctx.fillStyle = '#02292e'
      ctx.fillRect(0, 0, w, h)

      drawGrid(w, h)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        p.x = Math.max(0, Math.min(w, p.x))
        p.y = Math.max(0, Math.min(h, p.y))
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < CONNECT_DISTANCE) {
            const alpha = (1 - dist / CONNECT_DISTANCE) * LINE_OPACITY
            ctx.strokeStyle = `rgba(77, 181, 255, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      particles.forEach((p) => {
        const c = p.accent ? ACCENT : PRIMARY
        const glow = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.radius * 6
        )
        glow.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, 0.9)`)
        glow.addColorStop(0.4, `rgba(${c.r}, ${c.g}, ${c.b}, 0.3)`)
        glow.addColorStop(1, 'transparent')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 6, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, 1)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(draw)
    }

    setSize()
    draw()

    const onResize = () => {
      setSize()
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="tech-background" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}

export default TechBackground
