interface VeluLogoProps {
  size?: number
  variant?: 'coral' | 'teal' | 'dual'
}

export function VeluLogo({ size = 26, variant = 'coral' }: VeluLogoProps) {
  if (variant === 'dual') {
    return (
      <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
        <defs>
          <clipPath id="velu-clip">
            <rect width="56" height="56" rx="14" />
          </clipPath>
        </defs>
        <g clipPath="url(#velu-clip)">
          {/* Coral left half */}
          <polygon points="0,0 56,0 28,56 0,56" fill="#F97316" />
          {/* Teal right half */}
          <polygon points="56,0 56,56 28,56" fill="#0D7A6E" />
        </g>
        <line x1="10" y1="11" x2="28" y2="45" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.45" />
        <line x1="46" y1="11" x2="28" y2="45" stroke="white" strokeWidth="8.5" strokeLinecap="round" />
      </svg>
    )
  }

  const bg = variant === 'teal' ? '#0D7A6E' : '#F97316'

  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <rect width="56" height="56" rx="14" fill={bg} />
      <line x1="10" y1="11" x2="28" y2="45" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.45" />
      <line x1="46" y1="11" x2="28" y2="45" stroke="white" strokeWidth="8.5" strokeLinecap="round" />
    </svg>
  )
}
