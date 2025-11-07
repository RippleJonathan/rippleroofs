import { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export const Card: FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <div
      className={cn(
        'card p-6',
        {
          'hover:shadow-xl transition-shadow duration-300': hover,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
