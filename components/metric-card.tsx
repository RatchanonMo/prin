import { Card, CardContent } from "@/components/ui/card"
import { TooltipHelper } from "@/components/tooltip-helper"
import { InfoIcon, ArrowUpRight, ArrowDownRight } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string | number
  unit?: string
  change?: string
  positive?: boolean
  description?: string
  color?: string
}

export function MetricCard({
  title,
  value,
  unit,
  change,
  positive,
  description,
  color = "text-primary",
}: MetricCardProps) {
  return (
    <Card className="border-none shadow-sm">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="text-sm font-medium text-muted-foreground flex items-center gap-1">
            {title}
            {description && (
              <TooltipHelper text={description}>
                <InfoIcon className="h-3 w-3 cursor-help" />
              </TooltipHelper>
            )}
          </div>
          {change && (
            <div className={`flex items-center text-xs ${positive ? "text-green-500" : "text-red-500"}`}>
              {positive ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
              {change}
            </div>
          )}
        </div>
        <div className="flex items-baseline gap-1 mt-2">
          <span className={`text-2xl font-bold ${color}`}>{value}</span>
          {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
        </div>
      </CardContent>
    </Card>
  )
}

