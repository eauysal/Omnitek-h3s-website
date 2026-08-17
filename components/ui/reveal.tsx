"use client"

import { useEffect, useRef, useState } from "react"

interface RevealProps {
  children: React.ReactNode
  direction?: "left" | "right" | "up"
  delay?: number
  className?: string
}

export function Reveal({ children, direction = "up", delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.15, rootMargin: "0px 0px 200px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hiddenTransform =
    direction === "left"
      ? "-translate-x-10"
      : direction === "right"
        ? "translate-x-10"
        : "translate-y-8"

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTransform}`
      } ${className}`}
    >
      {children}
    </div>
  )
}
