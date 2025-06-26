import { useSearchParams } from 'next/navigation'
import React from 'react'
import { useSet } from 'react-use'

interface PriceProps {
	priceFrom?: number
	priceTo?: number
}

interface QueryFilters extends PriceProps {
	materials: string
}

export interface Filters {
	selectedMaterials: Set<string>
	prices: PriceProps
}

interface ReturnProps extends Filters {
	setPrices: (name: keyof PriceProps, value: number) => void
	setSelectedMaterials: (value: string) => void
}

export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>

	// Фильтр материалов
	const [selectedMaterials, { toggle: toggleMaterials }] = useSet(
		new Set<string>(searchParams.get('materials')?.split(','))
	)

	// Фильтр цен
	const [prices, setPrices] = React.useState<PriceProps>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined,
	})

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrices(prev => ({
			...prev,
			[name]: value,
		}))
	}

	return {
		selectedMaterials,
		prices,
		setPrices: updatePrice,
		setSelectedMaterials: toggleMaterials,
	}
}
