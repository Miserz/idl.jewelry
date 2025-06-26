'use client'

import { cn } from '@/lib/utils'
import { Trash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui'
import { CountButton } from './count-button'
import { CustomCheckbox } from './custom-checkbox'
import { Text } from './text'

interface CartItemProps {
	id: number
	productId: number
	imageUrl: string
	name: string
	price: number
	quantity: number
	loading?: boolean
	onClickCountButton?: (type: 'plus' | 'minus') => void
	onClickRemove?: () => void
	className?: string
}

export const CartProduct: React.FC<CartItemProps> = ({
	id,
	productId,
	imageUrl,
	name,
	price,
	quantity,
	loading,
	onClickCountButton,
	onClickRemove,
	className,
}) => {
	return (
		<div className={cn('relative flex h-[120px] gap-4', className)}>
			{/* Чекбокс */}
			<div className='absolute bg-background pb-1 pr-1 rounded-br-[12px]'>
				<CustomCheckbox name='cart-item' value={id.toString()} />
			</div>

			{/* Картинка */}
			<Link className='h-full aspect-square' href={`/product/${productId}`}>
				<img
					className='h-full aspect-square object-cover rounded-[.5rem]'
					src={imageUrl}
					alt={name}
				/>
			</Link>

			{/* Информация */}
			<div className='flex flex-col gap-2 w-full'>
				{/* Верхний блок */}
				<div className='flex gap-6 justify-between'>
					<Link href={`/product/${productId}`}>
						<Text text={name} size='p1' weight='bold' />
					</Link>
					<Button
						className='group hover:bg-[#FF333310] transition-all duration-300 ease-in-out'
						variant={'ghost'}
						size={'icon'}
						onClick={onClickRemove}
					>
						<Trash2
							className='size-6 group-hover:stroke-[#FF3333] transition-all duration-300 ease-in-out'
							strokeWidth={2}
						/>
					</Button>
				</div>

				{/* Нижний блок */}
				<div className='flex justify-between'>
					<Text text={`${price}₽`} size='subtitle' weight='bold' />
					<CountButton
						loading={loading}
						onClick={onClickCountButton}
						value={quantity}
					/>
				</div>
			</div>
		</div>
	)
}
