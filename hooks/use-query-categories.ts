import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'qs'

export const useQueryCategories = () => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const applyQueryCategories = (id: number) => {
		const params = qs.parse(searchParams.toString())
		const newParams = {
			...params,
			category: id,
		}
		const query = qs.stringify(newParams, {
			arrayFormat: 'comma',
		})

		router.push(`?${query}`, { scroll: false })
	}

	return applyQueryCategories
}
