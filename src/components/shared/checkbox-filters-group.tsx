'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { Text } from '../shared'
import { Input, Skeleton } from '../ui'
import { CheckboxProps, CustomCheckbox } from './custom-checkbox'

type Item = CheckboxProps

interface Props {
	title: string
	items: Item[]
	defaultItems?: Item[]
	limit?: number
	loading?: boolean
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	defaultValue?: string[]
	selected?: Set<string>
	name?: string
	className?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	loading,
	searchInputPlaceholder = 'Поиск...',
	onClickCheckbox,
	selected,
	name,
	className,
}) => {
	const [showAll, setShowAll] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState('')

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	if (loading) {
		return (
			<div className={cn('flex flex-col gap-3', className)}>
				<Text text={title} size='p2' />

				<div className='flex flex-col gap-4'>
					{...Array(limit)
						.fill(0)
						.map((_, index) => (
							<Skeleton key={index} className='h-[26px] rounded-full' />
						))}
				</div>

				<Skeleton className='h-[26px] w-[114px] rounded-full' />
			</div>
		)
	}

	const list = showAll
		? items.filter(item =>
				(item.text || '')
					.toLowerCase()
					.includes(searchValue.toLocaleLowerCase())
		  )
		: (defaultItems || items).slice(0, limit)

	return (
		<div className={cn('flex flex-col gap-3', className)}>
			<Text text={title} size='p2' />

			{showAll && (
				<Input
					onChange={onChangeSearchInput}
					placeholder={searchInputPlaceholder}
					className='bg-[#F0F0F0] border-none'
				/>
			)}

			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{list.map((item, index) => (
					<CustomCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={selected?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						name={name}
					/>
				))}
			</div>

			{items.length > limit && (
				<button
					onClick={() => setShowAll(!showAll)}
					className='cursor-pointer w-fit'
				>
					<Text text={showAll ? 'Скрыть' : '+ Показать все'} weight='regular' />
				</button>
			)}
		</div>
	)
}
