import type React from "react"
interface TooltipHelperProps {
  text: string
  children: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  width?: string
}

export function TooltipHelper({ text, children, position = "top", width = "w-64" }: TooltipHelperProps) {
  const positionClasses = {
    top: "-top-2 left-1/2 transform -translate-x-1/2 -translate-y-full",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 -translate-x-2",
    right: "left-full top-1/2 transform -translate-y-1/2 translate-x-2",
  }

  return (
    <div className="has-tooltip inline-block relative">
      {children}
      <div
        className={`tooltip ${positionClasses[position]} ${width} p-2 bg-black text-white text-xs rounded shadow-lg z-50`}
      >
        {text}
      </div>
    </div>
  )
}

