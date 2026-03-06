import type { ReactNode } from 'react'

export interface BaseProps {
  className?: string
  children?: ReactNode
}

export type Size = 'sm' | 'md' | 'lg'
export type Variant = 'default' | 'primary' | 'ghost' | 'danger'
export type Status = 'active' | 'inactive' | 'pending' | 'on_leave' | 'open' | 'closed' | 'draft'
export type Module = 'hr' | 'manager' | 'recruiter' | 'candidate' | 'admin'
