import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-semibold rounded-full',
  {
    variants: {
      variant: {
        active:   'bg-[#E6F4F2] text-[#0D7A6E]',
        pending:  'bg-[#FFF5ED] text-[#F97316]',
        inactive: 'bg-[#EEF0F4] text-[#6B7A92]',
        open:     'bg-[#E6F4F2] text-[#0D7A6E]',
        closed:   'bg-[#EEF0F4] text-[#6B7A92]',
        draft:    'bg-[#EFEDE8] text-[#6B6B6E]',
        dark:     'bg-[#1C1C1E] text-white',
        coral:    'bg-[#FFF5ED] text-[#F97316]',
        teal:     'bg-[#E6F4F2] text-[#0D7A6E]',
      },
      size: {
        sm: 'text-[10px] px-2 py-0.5',
        md: 'text-[11px] px-2.5 py-0.5',
        lg: 'text-[12px] px-3 py-1',
      },
      dot: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'active',
      size: 'md',
    },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
}

export function Badge({ variant, size, dot, className, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  )
}
