import { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('container-custom', className)}>
      {children}
    </div>
  )
}
