import { cn } from '@/lib/utils'
import React from 'react'
import { CountIconButton } from './count-icon-button'
import { Text } from './text'

export interface CountButtonProps {
	value?: number
	size?: 'sm' | 'lg'
	loading?: boolean
	onClick?: (type: 'plus' | 'minus') => void
	className?: string
}

export const CountButton: React.FC<CountButtonProps> = ({
	value = 1,
	size = 'sm',
	loading,
	onClick,
	className,
}) => {
	return (
		<div
			className={cn(
				'relative inline-flex gap-2 items-center bg-card border rounded-full',
				size !== 'sm' && 'gap-4',
				!loading ? 'pointer-events-auto' : 'pointer-events-none',
				className
			)}
		>
			<CountIconButton onClick={() => onClick?.('minus')} type='minus' />

			<Text text={`${value}`} size={size === 'sm' ? 'caption' : 'p3'} />

			<CountIconButton onClick={() => onClick?.('plus')} type='plus' />
		</div>
	)
}
