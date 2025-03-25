import { Card, CardContent } from "@/components/ui/card"
import { TooltipHelper } from "@/components/tooltip-helper"
import { InfoIcon } from "lucide-react"

interface ESGScoreCardProps {
  title: string
  score: number
  color: "environmental" | "social" | "governance"
  description: string
  size?: "small" | "large"
}

export function ESGScoreCard({ title, score, color, description, size = "large" }: ESGScoreCardProps) {
  const colorClasses = {
    environmental: "bg-[#e2f2df] text-[#14ae5c]",
    social: "bg-[rgba(128,0,128,0.1)] text-[#8000ff]",
    governance: "bg-[rgba(255,140,0,0.1)] text-[#ff8c00]",
  }

  if (size === "small") {
    return (
      <Card className={`border-none ${colorClasses[color]} bg-opacity-20`}>
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <div className="text-4xl font-bold">{score}</div>
          <div className="text-sm font-medium mt-1 flex items-center gap-1">
            {title}
            <TooltipHelper text={description}>
              <InfoIcon className="h-3 w-3 cursor-help" />
            </TooltipHelper>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`border-none ${colorClasses[color]} bg-opacity-20`}>
      <CardContent className="p-6 flex flex-col items-center justify-center">
        <div className="text-7xl font-bold">{score}</div>
        <div className="text-lg font-medium mt-2 flex items-center gap-1">
          {title}
          <TooltipHelper text={description}>
            <InfoIcon className="h-4 w-4 cursor-help" />
          </TooltipHelper>
        </div>
      </CardContent>
    </Card>
  )
}

