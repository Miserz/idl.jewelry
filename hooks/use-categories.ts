import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

interface CategoryProps {
	category: number
}

export const useCategories = () => {
	const searchParams = useSearchParams() as unknown as Map<
		keyof CategoryProps,
		string
	>

	// Активная категория
	const [activeCategory, setActiveCategory] = useState<number>(
		Number(searchParams.get('category'))
	)

	return {
		activeCategory,
		setActiveCategory,
	}
}
