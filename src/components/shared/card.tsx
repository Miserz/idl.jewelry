import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const Card: React.FC<React.PropsWithChildren<Props>> = ({
	children,
	className,
}) => {
	return (
		<div className={cn('border rounded-3xl bg-card p-4', className)}>
			{children}
		</div>
	)
}
