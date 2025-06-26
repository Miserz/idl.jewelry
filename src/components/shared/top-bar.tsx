import { Category } from '@prisma/client'
import React from 'react'
import { Categories } from './categories'
import { Container } from './container'
import { SortPopup } from './sort-popup'

interface Props {
	categories: Category[]
	className?: string
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
	return (
		<div className={className}>
			<Container className='flex items-center justify-between'>
				<Categories items={categories} />
				<SortPopup />
			</Container>
		</div>
	)
}
