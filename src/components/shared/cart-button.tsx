'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useCartStore } from 'store'
import { Button } from '../ui'
import { Text } from './text'

interface Props {
	className?: string
}

export const CartButton: React.FC<Props> = ({ className }) => {
	const itemsCount = useCartStore(state => state.items.length)
	const fetchCartItems = useCartStore(state => state.fetchCartItems)

	React.useEffect(() => {
		fetchCartItems()
	}, [fetchCartItems])

	return (
		<div className={cn('relative', className)}>
			<Link href='/cart'>
				<Button className='size-10' variant='ghost' size='icon'>
					<ShoppingCart className='size-6' />
				</Button>
				<AnimatePresence>
					{itemsCount > 0 && (
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0, opacity: 0 }}
							transition={{ type: 'spring', stiffness: 400, damping: 20 }}
							className='absolute -top-1 left-6 rounded-full h-4 px-1 bg-black/10'
						>
							<Text
								className='text-foreground'
								text={itemsCount > 10 ? '10+' : `${itemsCount}`}
								size='badge'
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</Link>
		</div>
	)
}
