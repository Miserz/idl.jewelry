import { prisma } from '@/prisma/prisma-client'

export interface GetSearchParams {
	query?: string
	sortBy?: string
	materials?: string
	priceFrom?: string
	priceTo?: string
	category?: string
}

const DEFAULT_MIN_PRICE = 0
const DEFAULT_MAX_PRICE = 5000

export const findProducts = async (params: GetSearchParams) => {
	const categoryId = params.category
	const materialsIdArr = params.materials?.split(',').map(Number)

	const minPrice = Number(params.priceFrom) || DEFAULT_MIN_PRICE
	const maxPrice = Number(params.priceTo) || DEFAULT_MAX_PRICE

	const categories = await prisma.category.findMany({
		include: {
			products: true,
		},
	})

	const products = await prisma.product.findMany({
		orderBy: {
			id: 'asc',
		},
		where: {
			materials: materialsIdArr
				? {
						some: {
							id: {
								in: materialsIdArr,
							},
						},
				  }
				: undefined,
			price: {
				gte: minPrice,
				lte: maxPrice,
			},
			categoryId: Number(categoryId) || undefined,
		},
	})

	return { products, categories }
}
