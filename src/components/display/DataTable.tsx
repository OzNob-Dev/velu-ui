import { cn } from '../utils'
import type { ReactNode } from 'react'

export interface Column<T> {
  key: string
  header: string
  render?: (row: T) => ReactNode
  width?: string
}

interface DataTableProps<T extends { id: string }> {
  columns: Column<T>[]
  data: T[]
  empty?: ReactNode
  className?: string
}

export function DataTable<T extends { id: string }>({ columns, data, empty, className }: DataTableProps<T>) {
  return (
    <div className={cn('bg-[#FDFCFA] rounded-[20px] border border-[#EDEAE3] overflow-hidden shadow-[0_2px_10px_rgba(28,28,30,0.07)]', className)}>
      <table className="w-full border-collapse text-[14px]">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{ width: col.width }}
                className="text-left text-[11px] font-bold uppercase tracking-wide text-[#6B6B6E] px-4 py-3 border-b border-[#EDEAE3]"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-[#EFEDE8] transition-colors">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 border-b border-[#EDEAE3]">
                  {col.render
                    ? col.render(row)
                    : String((row as Record<string, unknown>)[col.key] ?? '—')}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-4 py-12 text-center text-[#6B6B6E] text-[14px]">
                {empty ?? 'No data yet.'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
