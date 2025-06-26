'use client'

import { CartBody, Container, CtaBlock } from '@/components/shared'
import { useCartStore } from '@/store'
import React from 'react'

export default function Cart() {
	const totalAmount = useCartStore(state => state.totalAmount)
	const items = useCartStore(state => state.items)
	const loading = useCartStore(state => state.loading)
	const fetchCartItems = useCartStore(state => state.fetchCartItems)
	const updateItemQuantity = useCartStore(state => state.updateItemQuantity)
	const removeCartItem = useCartStore(state => state.removeCartItem)
	const clearCart = useCartStore(state => state.clearCart)

	React.useEffect(() => {
		fetchCartItems()
	}, [fetchCartItems])

	return (
		<Container>
			{totalAmount > 0 && (
				<CartBody
					totalAmount={totalAmount}
					items={items}
					loading={loading}
					updateItemQuantity={updateItemQuantity}
					removeCartItem={removeCartItem}
					clearCart={clearCart}
				/>
			)}

			{!totalAmount && (
				<CtaBlock
					title='Корзина пуста'
					description='Похоже, здесь пока ничего нет. Добавьте украшения, которые вам понравились!'
					buttonText='Перейти в каталог'
				/>
			)}
		</Container>
	)
}
