import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui'
import { Text } from './text'

interface Props {
	title: string
	description: string
	buttonText: string
	className?: string
}

export const CtaBlock: React.FC<Props> = ({
	title,
	description,
	buttonText,
	className,
}) => {
	return (
		<div
			className={cn(
				'flex flex-col items-center gap-10 py-25 border rounded-3xl',
				className
			)}
		>
			<Text text={title} size='h1' weight='bold' />
			<Text
				className='text-[#737373] max-w-136 text-center'
				text={description}
				size='p1'
				weight='medium'
			/>
			<Link href='/catalog'>
				<Button className='w-50' size='lg'>
					<Text text={buttonText} />
				</Button>
			</Link>
		</div>
	)
}
