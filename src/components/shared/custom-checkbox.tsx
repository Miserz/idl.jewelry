import { cn } from '@/lib/utils'
import React from 'react'
import { Checkbox } from '../ui'
import { Text } from './text'

export interface CheckboxProps {
	text?: string
	value: string
	endAdornment?: React.ReactNode
	onCheckedChange?: (checked: boolean) => void
	checked?: boolean
	name?: string
	className?: string
}

export const CustomCheckbox: React.FC<CheckboxProps> = ({
	text = '',
	value,
	endAdornment,
	onCheckedChange,
	checked,
	name,
	className,
}) => {
	return (
		<div className={cn('flex items-center space-x-2', className)}>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className='rounded-[8px] w-6 h-6'
				id={`checkbox-${String(name)}-${String(value)}`}
			/>
			{text !== '' && (
				<label
					htmlFor={`checkbox-${String(name)}-${String(value)}`}
					className='leading-none cursor-pointer flex-1'
				>
					<Text text={text} weight='regular' />
				</label>
			)}
			{endAdornment}
		</div>
	)
}
