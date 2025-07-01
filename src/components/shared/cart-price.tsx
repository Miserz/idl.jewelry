import { CartStateItem } from '@/lib/get-cart-details'
import { cn } from '@/lib/utils'
import React from 'react'
import { Button, Separator } from '../ui'
import { Text } from './text'

interface Props {
	items: CartStateItem[]
	totalAmount: number
	loading: boolean
	className?: string
}

export const CartPrice: React.FC<Props> = ({
	items,
	totalAmount,
	loading,
	className,
}) => {
	return (
		<div className={cn('flex flex-col gap-4', className)}>
			<div className='flex justify-between'>
				<Text
					className='text-[#737373]'
					text={`Товары (${items.length})`}
					size='p2'
				/>
				<Text text={`${totalAmount}₽`} size='p2' weight='bold' />
			</div>
			<div className='flex justify-between'>
				<Text className='text-[#737373]' text='Скидка' size='p2' />
				<Text className='text-[#FF3333]' text='-600₽' size='p2' weight='bold' />
			</div>
			<Separator />
			<div className='flex justify-between'>
				<Text text='Итого' size='p1' weight='bold' />
				<Text text={`${totalAmount}₽`} size='p1' weight='bold' />
			</div>
			<Button loading={loading} size={'lg'}>
				<Text text='Перейти к оформлению' />
			</Button>
			<Text
				className='text-[#737373]'
				text='Доступные способы и время доставки можно выбрать при оформлении заказа'
				size='caption'
			/>
		</div>
	)
}
