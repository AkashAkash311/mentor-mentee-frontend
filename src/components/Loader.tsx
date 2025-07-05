import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface LoaderProps {
  progress?: number
  className?: string
}

export function Loader({ progress = 75, className }: LoaderProps) {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        className
      )}
    >
      <Progress value={progress} className="h-1 w-full" />
    </div>
  )
}
