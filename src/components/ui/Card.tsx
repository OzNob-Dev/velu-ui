import { cn } from '../utils'
import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

const paddingMap = {
  none: '',
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
}

export function Card({ padding = 'md', hover, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-[#FDFCFA] rounded-[20px] border border-[#EDEAE3]',
        'shadow-[0_2px_10px_rgba(28,28,30,0.07)]',
        hover && 'transition-shadow hover:shadow-[0_4px_22px_rgba(28,28,30,0.10)] cursor-pointer',
        paddingMap[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/** Pre-styled stat card with icon + value + label */
interface StatCardProps {
  label: string
  value: string | number
  delta?: string
  icon?: React.ReactNode
  iconColor?: string
  className?: string
}

export function StatCard({ label, value, delta, icon, iconColor = 'bg-[#FFF5ED] text-[#F97316]', className }: StatCardProps) {
  return (
    <Card padding="md" className={cn('flex items-center gap-4', className)}>
      {icon && (
        <div className={cn('w-11 h-11 rounded-[10px] flex items-center justify-center flex-shrink-0', iconColor)}>
          {icon}
        </div>
      )}
      <div>
        <div className="font-display text-[28px] text-[#1C1C1E] leading-none tracking-tight">{value}</div>
        {delta && <div className="text-[12px] text-[#0D7A6E] mt-1">{delta}</div>}
        <div className="text-[12px] text-[#6B6B6E] mt-0.5">{label}</div>
      </div>
    </Card>
  )
}
