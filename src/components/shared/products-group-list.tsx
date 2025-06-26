import { cn } from '@/lib/utils'
import { Product } from '@prisma/client'
import React from 'react'
import { ProductCard } from './product-card'

interface Props {
	items: Product[]
	className?: string
	listClassName?: string
}

export const ProductsGroupList: React.FC<Props> = ({
	items,
	listClassName,
	className,
}) => {
	return (
		<div className={className}>
			<div className={cn('grid grid-cols-3 gap-6', listClassName)}>
				{items.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imagesUrl[0]}
						price={product.price}
					/>
				))}
			</div>
		</div>
	)
}
