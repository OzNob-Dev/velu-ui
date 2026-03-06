import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'
import type { ReactNode } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:  'bg-[#1C1C1E] text-white hover:bg-[#3A3A3C]',
        coral:    'bg-[#F97316] text-white hover:bg-[#EA6C0E]',
        teal:     'bg-[#0D7A6E] text-white hover:bg-[#0FA898]',
        outline:  'border border-[#EDEAE3] bg-[#FDFCFA] text-[#3A3A3C] hover:border-[#3A3A3C]',
        ghost:    'text-[#3A3A3C] hover:bg-[#EFEDE8]',
        danger:   'bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        sm:  'text-[12px] px-3 py-1.5 rounded-full',
        md:  'text-[13px] px-4 py-2 rounded-full',
        lg:  'text-[14px] px-5 py-2.5 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  loading?: boolean
}

export function Button({ variant, size, className, children, loading, disabled, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
      )}
      {children}
    </button>
  )
}
