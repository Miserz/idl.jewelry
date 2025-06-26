import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'qs'
import { Filters } from './use-filters'

export const useQueryFilters = () => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const applyQueryFilters = (filters: Filters) => {
		const params = qs.parse(searchParams.toString())
		const newParams = {
			...params,
			...filters.prices,
			materials: Array.from(filters.selectedMaterials),
		}

		const query = qs.stringify(newParams, {
			arrayFormat: 'comma',
		})

		router.push(`?${query}`, { scroll: false })
	}

	return applyQueryFilters
}
