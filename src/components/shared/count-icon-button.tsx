import { Minus, Plus } from 'lucide-react'
import React from 'react'
import { Button } from '../ui'

interface IconButtonProps {
	disabled?: boolean
	type?: 'plus' | 'minus'
	onClick?: () => void
}

export const CountIconButton: React.FC<IconButtonProps> = ({
	disabled,
	type,
	onClick,
}) => {
	return (
		<Button
			variant={'ghost'}
			disabled={disabled}
			onClick={onClick}
			className='aspect-square'
		>
			{type === 'plus' ? (
				<Plus className='size-5' />
			) : (
				<Minus className='size-5' />
			)}
		</Button>
	)
}
