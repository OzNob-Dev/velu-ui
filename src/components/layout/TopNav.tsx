'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { cn } from '../../utils'
import { VeluLogo } from './VeluLogo'
import { Avatar } from '../ui/Avatar'

export interface NavModule {
  label: string
  href: string
  color: string
  dot?: string
}

export interface TopNavProps {
  modules?: NavModule[]
  userName: string
  userRole?: string
  userInitials?: string
  userAvatarSrc?: string | null
  userAvatarColor?: string
  onLogout?: () => void | Promise<void>
  logoHref?: string
}

const DEFAULT_MODULES: NavModule[] = [
  { label: 'HR Core',          href: '/hr',        color: '#F97316' },
  { label: 'Manager Coach',    href: '/manager',   color: '#0D7A6E' },
  { label: 'Recruiter',        href: '/recruiter', color: '#F97316' },
  { label: 'Candidate Portal', href: '/candidate', color: '#0D7A6E' },
  { label: 'Admin',            href: '/admin',     color: '#4A5568' },
]

export function TopNav({
  modules = DEFAULT_MODULES,
  userName,
  userRole,
  userAvatarSrc,
  userAvatarColor = '#F97316',
  onLogout,
  logoHref = '/hr',
}: TopNavProps) {
  const pathname = usePathname()

  return (
    <nav
      style={{
        background: '#1C1C1E',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      {/* Left */}
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Link href={logoHref} style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <VeluLogo size={26} />
          <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: 'white', letterSpacing: '-0.02em' }}>
            Velu
          </span>
        </Link>

        <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.1)', margin: '0 16px', flexShrink: 0 }} />

        <div style={{ display: 'flex', alignItems: 'stretch', height: '100%' }}>
          {modules.map((mod) => {
            const isActive = pathname.startsWith(mod.href)
            return (
              <Link
                key={mod.href}
                href={mod.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '0 14px',
                  fontSize: 13,
                  fontWeight: 500,
                  borderBottom: `2px solid ${isActive ? mod.color : 'transparent'}`,
                  color: isActive ? 'white' : 'rgba(255,255,255,0.45)',
                  background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: mod.color, flexShrink: 0 }} />
                {mod.label}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Avatar name={userName} src={userAvatarSrc} size="sm" color={userAvatarColor} />
          <div className="hidden sm:block">
            <div style={{ fontSize: 13, fontWeight: 600, color: 'white', lineHeight: 1.2 }}>{userName}</div>
            {userRole && <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.2 }}>{userRole}</div>}
          </div>
        </div>

        {onLogout && (
          <button
            onClick={onLogout}
            title="Log out"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: 6,
              borderRadius: 6,
              background: 'transparent',
              border: 'none',
              color: 'rgba(255,255,255,0.35)',
              cursor: 'pointer',
            }}
          >
            <LogOut size={15} />
          </button>
        )}
      </div>
    </nav>
  )
}
