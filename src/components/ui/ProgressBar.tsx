import { cn } from '../../utils'

interface ProgressBarProps {
  value: number
  max?: number
  color?: string
  size?: 'sm' | 'md'
  showLabel?: boolean
  className?: string
}

export function ProgressBar({ value, max = 100, color = '#0D7A6E', size = 'sm', showLabel, className }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className={cn('flex-1 bg-[#EDEAE3] rounded-full overflow-hidden', size === 'sm' ? 'h-1.5' : 'h-2.5')}>
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      {showLabel && (
        <span className="text-[12px] font-semibold text-[#6B6B6E] w-8 text-right flex-shrink-0">
          {Math.round(pct)}%
        </span>
      )}
    </div>
  )
}
