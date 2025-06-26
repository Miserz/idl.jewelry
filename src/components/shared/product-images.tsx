'use client'

import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	imagesUrl: string[]
	className?: string
}

export const ProductImages: React.FC<Props> = ({ imagesUrl, className }) => {
	const [selectedIndex, setSelectedIndex] = React.useState(0)

	return (
		<div className={cn('flex h-[560px] gap-5', className)}>
			<div className='grid grid-cols-1 grid-rows-3 gap-4'>
				{imagesUrl.slice(0, 3).map((image, index) => (
					<img
						key={index}
						className={cn(
							'w-[130px] h-full object-cover rounded-3xl cursor-pointer transition-all duration-300 ease-in-out',
							selectedIndex === index && 'ring-2 p-[2px]'
						)}
						src={image}
						alt=''
						onClick={() => setSelectedIndex(index)}
					/>
				))}
			</div>
			<img
				className='w-[438px] h-full object-cover rounded-3xl'
				src={imagesUrl[selectedIndex]}
				alt=''
			/>
		</div>
	)
}
