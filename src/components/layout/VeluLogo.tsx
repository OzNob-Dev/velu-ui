interface VeluLogoProps {
  size?: number
}

export function VeluLogo({ size = 26 }: VeluLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <rect width="56" height="56" rx="14" fill="#F97316" />
      <line x1="10" y1="11" x2="28" y2="45" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.45" />
      <line x1="46" y1="11" x2="28" y2="45" stroke="white" strokeWidth="8.5" strokeLinecap="round" />
    </svg>
  )
}
