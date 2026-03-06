import { cn } from '../../utils'
import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: ReactNode
  className?: string
}

export function PageHeader({ title, subtitle, children, className }: PageHeaderProps) {
  return (
    <div
      className={cn('flex items-center gap-4 px-8 py-5 border-b', className)}
      style={{ borderColor: '#EDEAE3', background: '#EFEDE8' }}
    >
      <div className="flex-1">
        <h1 className="font-display text-2xl tracking-tight" style={{ color: '#1C1C1E' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-[13px] mt-0.5" style={{ color: '#6B6B6E' }}>
            {subtitle}
          </p>
        )}
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  )
}
