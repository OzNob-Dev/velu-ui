import { cn, getInitials } from '../../utils'

interface AvatarProps {
  name: string
  src?: string | null
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  className?: string
}

const sizeMap = {
  xs: { outer: 'w-6 h-6',   text: 'text-[9px]'  },
  sm: { outer: 'w-8 h-8',   text: 'text-[11px]' },
  md: { outer: 'w-10 h-10', text: 'text-[12px]' },
  lg: { outer: 'w-12 h-12', text: 'text-[14px]' },
  xl: { outer: 'w-16 h-16', text: 'text-[18px]' },
}

export function Avatar({ name, src, size = 'md', color = '#F97316', className }: AvatarProps) {
  const { outer, text } = sizeMap[size]

  return (
    <div
      className={cn('rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 overflow-hidden', outer, className)}
      style={{ background: src ? undefined : color }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className={text}>{getInitials(name)}</span>
      )}
    </div>
  )
}
