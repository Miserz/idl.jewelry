'use client'

import { cn } from '@/lib/utils'
import { Category } from '@prisma/client'
import React from 'react'
import { useCategories, useQueryCategories } from '@/hooks'
import { Button } from '../ui'
import { Text } from './text'

interface Props {
	items: Category[]
	className?: string
}

export const Categories: React.FC<Props> = ({ items, className }) => {
	const allCategory = { id: 0, name: 'Всё' } as Category
	const categories = [allCategory, ...items]

	const category = useCategories()
	const applyQueryCategories = useQueryCategories()

	const onClickCategory = (id: number) => {
		category.setActiveCategory(id)
		applyQueryCategories(id)
	}

	return (
		<div
			className={cn(
				'inline-flex gap-1 bg-[#F0F0F0] p-1 h-10 rounded-full',
				className
			)}
		>
			{categories.map(({ name, id }, index) => (
				<Button
					className={'h-full px-5'}
					key={index}
					variant={index === category.activeCategory ? 'default' : 'ghost'}
					onClick={() => onClickCategory(id)}
				>
					<Text text={name} />
				</Button>
			))}
		</div>
	)
}
