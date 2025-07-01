import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui'
import { Text } from './text'
import { Card } from "./card"

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
		<Card
			className={cn(
				'flex flex-col items-center justify-center gap-10 h-[440px]',
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
		</Card>
	)
}
