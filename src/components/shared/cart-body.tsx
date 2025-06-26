import { CartStateItem } from '@/lib/get-cart-details'
import { cn } from '@/lib/utils'
import React from 'react'
import { Button, Separator } from '../ui'
import { CartProduct } from './cart-product'
import { CustomCheckbox } from './custom-checkbox'
import { Text } from './text'

interface Props {
	className?: string
	totalAmount: number
	items: CartStateItem[]
	loading: boolean
	updateItemQuantity: (id: number, quantity: number) => void
	removeCartItem: (id: number) => void
	clearCart: () => void
}

export const CartBody: React.FC<Props> = ({
	totalAmount,
	items,
	loading,
	updateItemQuantity,
	removeCartItem,
	clearCart,
	className,
}) => {
	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	return (
		<div className={cn('flex gap-6', className)}>
			<div className='flex flex-col gap-4 border rounded-3xl h-fit px-6 py-4 w-7/12'>
				<div className='flex gap-1'>
					<Text text='Корзина' size='h3' weight='bold' />
					<Text className='text-[#737373]' text={`${items.length}`} size='p2' />
				</div>
				<div className='flex justify-between'>
					<CustomCheckbox text='Выбрать всё' value={'all'} />
					<button onClick={clearCart} className='cursor-pointer group'>
						<Text
							className='text-[#737373] group-hover:text-[#FF3333] transition-all duration-300 ease-in-out'
							text='Очистить корзину'
						/>
					</button>
				</div>
				<div className='flex flex-col gap-6'>
					{items.map(item => (
						<CartProduct
							key={item.id}
							id={item.id}
							productId={item.productId}
							imageUrl={item.imagesUrl[0]}
							name={item.name}
							price={item.price}
							quantity={item.quantity}
							loading={loading}
							onClickCountButton={type =>
								onClickCountButton(item.id, item.quantity, type)
							}
							onClickRemove={() => removeCartItem(item.id)}
						/>
					))}
				</div>
			</div>
			<div className='flex flex-col gap-4 border rounded-3xl h-fit px-6 py-4 w-5/12'>
				<div className='flex justify-between'>
					<Text className='text-[#737373]' text='Товары (1)' size='p2' />
					<Text text='2000₽' size='p2' weight='bold' />
				</div>
				<div className='flex justify-between'>
					<Text className='text-[#737373]' text='Скидка' size='p2' />
					<Text
						className='text-[#FF3333]'
						text='-600₽'
						size='p2'
						weight='bold'
					/>
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
		</div>
	)
}
