'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  LayoutGrid, Users, Building2, FileText, Clock, BookOpen, BarChart2,
  Star, Target, Calendar, Sparkles, MessageSquare, Briefcase, Inbox,
  CheckCircle, User, Bookmark, Shield, Grid3X3, UserCheck
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '../../utils'

const ICON_MAP: Record<string, LucideIcon> = {
  LayoutGrid, Users, Building2, FileText, Clock, BookOpen, BarChart2,
  Star, Target, Calendar, Sparkles, MessageSquare, Briefcase, Inbox,
  CheckCircle, User, Bookmark, Shield, Grid3X3, UserCheck,
}

export interface SubNavItem {
  label: string
  href: string
  icon: string
  badge?: number | string
}

interface SubNavProps {
  items: SubNavItem[]
  accentColor?: string
}

function isActiveHref(pathname: string, href: string, items: SubNavItem[]): boolean {
  // Exact match always wins
  if (pathname === href) return true
  // For prefix match, ensure no longer href in the list matches first
  if (pathname.startsWith(href + '/')) {
    const longerMatch = items.some(
      other => other.href !== href &&
        other.href.startsWith(href) &&
        pathname.startsWith(other.href)
    )
    return !longerMatch
  }
  return false
}

export function SubNav({ items, accentColor = '#F97316' }: SubNavProps) {
  const pathname = usePathname()

  return (
    <div
      style={{
        background: '#EEF0F4',
        borderBottom: '1px solid #DDE1E9',
        display: 'flex',
        alignItems: 'stretch',
        padding: '0 20px',
        height: 38,
        flexShrink: 0,
        position: 'sticky',
        top: 52,
        zIndex: 40,
        overflowX: 'auto',
        scrollbarWidth: 'none',
      }}
    >
      {items.map((item) => {
        const Icon = ICON_MAP[item.icon]
        const isActive = isActiveHref(pathname, item.href, items)
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-1.5 px-3 text-[13px] border-b-2 transition-all whitespace-nowrap no-underline',
              isActive ? 'font-semibold' : 'font-medium border-transparent'
            )}
            style={{
              color: isActive ? '#1C1C1E' : '#6B6B6E',
              borderBottomColor: isActive ? accentColor : 'transparent',
              textDecoration: 'none',
            }}
          >
            {Icon && <Icon size={14} style={{ opacity: isActive ? 1 : 0.5 }} />}
            {item.label}
            {item.badge !== undefined && (
              <span
                style={{
                  background: '#FFF5ED',
                  color: '#F97316',
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '0 6px',
                  borderRadius: 999,
                  marginLeft: 2,
                }}
              >
                {item.badge}
              </span>
            )}
          </Link>
        )
      })}
    </div>
  )
}
