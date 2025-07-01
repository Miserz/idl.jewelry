'use client'

import { cn } from '@/lib/utils'
import { Product } from '@prisma/client'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useCartStore } from 'store'
import { Button, Separator } from '../ui'
import { CountButton } from './count-button'
import { Text } from './text'

interface Props {
	product: Product
	className?: string
}

export const ProductInformation: React.FC<Props> = ({ product, className }) => {
	const router = useRouter()

	const addCartItem = useCartStore(state => state.addCartItem)
	const items = useCartStore(state => state.items)
	const fetchCartItems = useCartStore(state => state.fetchCartItems)
	const updateItemQuantity = useCartStore(state => state.updateItemQuantity)
	const loading = useCartStore(state => state.loading)

	React.useEffect(() => {
		fetchCartItems()
	}, [fetchCartItems])

	const cartItem = items.find(item => item.productId === product.id)

	const onClickAddProduct = (productId: number) => {
		if (cartItem) {
			router.push('/cart')
		} else {
			addCartItem({ productId })
		}
	}

	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	return (
		<div className={cn('flex flex-col gap-4', className)}>
			<Text text={product.name} size='h3' weight='bold' />
			<Text className='text-[#737373]' text={product.description} size='p2' />
			<Text text={`${product.price}₽`} size='h3' weight='bold' />
			<Separator />
			<motion.div layout className='flex gap-4 w-full'>
				<AnimatePresence>
					{cartItem && (
						<motion.div
							layout
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.3 }}
						>
							<CountButton
								loading={loading}
								value={cartItem.quantity}
								onClick={type =>
									onClickCountButton(cartItem.id, cartItem.quantity, type)
								}
								size='lg'
							/>
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div layout className='w-full flex-1'>
					<Button
						onClick={() => onClickAddProduct(product.id)}
						className='w-full flex-1'
						size='lg'
						loading={loading}
					>
						<Text
							text={cartItem ? 'Перейти в корзину' : 'Добавить в корзину'}
						/>
					</Button>
				</motion.div>
				<Button className='size-10' variant='secondary' size='icon'>
					<Heart className='size-6' />
				</Button>
			</motion.div>
		</div>
	)
}
