'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { useFilters, useMaterials, useQueryFilters } from '@/hooks'
import { RangeSlider, Text } from '../shared'
import { Button, Input, Separator } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { materials, loading } = useMaterials()
	const filters = useFilters()

	const applyQueryFilters = useQueryFilters()

	const items = materials.map(item => ({
		value: String(item.id),
		text: item.name,
	}))

	const updatePrices = (prices: number[]) => {
		filters.setPrices('priceFrom', prices[0])
		filters.setPrices('priceTo', prices[1])
	}

	return (
		<div
			className={cn(
				'flex flex-col gap-4 border px-6 py-4 rounded-3xl',
				className
			)}
		>
			{/* Название */}
			<Text text='Фильтры' size='p1' />
			<Separator />

			{/* Фильтр цен */}
			<div className='flex flex-col gap-3'>
				<Text text='Цена' size='p2' />
				<div className='flex gap-4'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={5000}
						value={String(filters.prices.priceFrom)}
						onChange={e =>
							filters.setPrices('priceFrom', Number(e.target.value))
						}
					/>
					<Input
						type='number'
						placeholder='5000'
						min={1000}
						max={5000}
						value={String(filters.prices.priceTo)}
						onChange={e => filters.setPrices('priceTo', Number(e.target.value))}
					/>
				</div>

				<RangeSlider
					min={0}
					max={5000}
					step={100}
					value={[
						filters.prices.priceFrom || 0,
						filters.prices.priceTo || 5000,
					]}
					onValueChange={updatePrices}
				/>
			</div>
			<Separator />

			<CheckboxFiltersGroup
				title='Материал'
				name='materials'
				limit={4}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={filters.setSelectedMaterials}
				selected={filters.selectedMaterials}
			/>
			<Separator />
			<Button
				onClick={() => applyQueryFilters(filters)}
				size='lg'
				className='w-full'
			>
				Применить
			</Button>
		</div>
	)
}
