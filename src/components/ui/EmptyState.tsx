import { cn } from '../utils'
import type { ReactNode } from 'react'

interface EmptyStateProps {
  icon?: string
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function EmptyState({ icon = '📭', title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-16 px-8 text-center', className)}>
      <div className="text-4xl mb-4">{icon}</div>
      <div className="font-display text-xl text-[#1C1C1E] tracking-tight">{title}</div>
      {description && <p className="text-[14px] text-[#6B6B6E] mt-2 max-w-sm">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}
