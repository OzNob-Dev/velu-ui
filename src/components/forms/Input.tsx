import { cn } from '../utils'
import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export function Input({ label, error, hint, className, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-[13px] font-semibold text-[#3A3A3C]">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'border rounded-[10px] px-3.5 py-2.5 text-[14px] text-[#1C1C1E] bg-white outline-none transition-all',
          'placeholder:text-[#C4BFB4]',
          error
            ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
            : 'border-[#EDEAE3] focus:border-[#F97316] focus:ring-2 focus:ring-[rgba(249,115,22,0.10)]',
          className
        )}
        {...props}
      />
      {hint && !error && <p className="text-[12px] text-[#6B6B6E]">{hint}</p>}
      {error && <p className="text-[12px] text-red-500">{error}</p>}
    </div>
  )
}
