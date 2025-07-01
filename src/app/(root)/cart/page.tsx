'use client'

import {
	Card,
	CartListProduct,
	CartPrice,
	Container,
	CtaBlock,
} from '@/components/shared'
import { useCart } from '@/lib'

export default function Cart() {
	const {
		// totalAmount,
		updateItemQuantity,
		items,
		removeCartItem,
		loading,
		clearCart,
	} = useCart()

	return (
		<Container className='flex gap-6'>
			{items.length > 0 && (
				<>
					<Card className='w-7/12 h-fit px-6'>
						<CartListProduct
							items={items}
							loading={loading}
							updateItemQuantity={updateItemQuantity}
							removeCartItem={removeCartItem}
							clearCart={clearCart}
						/>
					</Card>
					<Card className='w-5/12 h-fit px-6'>
						<CartPrice
							items={items}
							totalAmount={0}
							loading={loading}
						/>
					</Card>
				</>
			)}

			{!items.length && (
				<CtaBlock
					className='w-full'
					title='Корзина пуста'
					description='Похоже, здесь пока ничего нет. Добавьте украшения, которые вам понравились!'
					buttonText='Перейти в каталог'
				/>
			)}
		</Container>
	)
}
