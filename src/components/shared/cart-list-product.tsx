import { CartStateItem } from '@/lib/get-cart-details'
import { cn } from '@/lib/utils'
import React from 'react'
import { CartProduct } from './cart-product'
import { Text } from './text'

interface Props {
	items: CartStateItem[]
	loading: boolean
	updateItemQuantity: (id: number, quantity: number) => void
	removeCartItem: (id: number) => void
	clearCart: () => void
	className?: string
}

export const CartListProduct: React.FC<Props> = ({
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
		<div
			className={cn(
				'flex flex-col gap-4',
				className
			)}
		>
			<div className='flex justify-between'>
				<div className='flex gap-1'>
					<Text text='Корзина' size='h3' weight='bold' />
					<Text className='text-[#737373]' text={`${items.length}`} size='p2' />
				</div>
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
	)
}
