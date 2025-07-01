import { cn } from '@/lib/utils'
import React from 'react'
import { Text } from './text'

interface Props {
	title: string
	className?: string
	contentClassName?: string
}

export const CheckoutBlock: React.FC<React.PropsWithChildren<Props>> = ({
	title,
	children,
	className,
	contentClassName,
}) => {
	return (
		<div className={cn('flex flex-col gap-4', className)}>
			<Text text={title} size='p1' />

			<div className={contentClassName}>{children}</div>
		</div>
	)
}
