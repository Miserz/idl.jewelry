import {
	Card,
	Container,
	Filters,
	ProductsGroupList,
	TopBar,
} from '@/components/shared'
import { findProducts, GetSearchParams } from '@/lib/find-products'
import { Suspense } from 'react'

export default async function Catalog({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
	const resolvedSearchParams = await searchParams
	const { products, categories } = await findProducts(
		resolvedSearchParams as GetSearchParams
	)

	return (
		<div className='flex flex-col gap-6'>
			<Suspense>
				<TopBar
					categories={categories.filter(
						category => category.products.length > 0
					)}
				/>
			</Suspense>

			<Container className='flex gap-6'>
				{/* Фильтрация */}
				<Card className='w-3/12 px-6 h-fit'>
					<Suspense>
						<Filters />
					</Suspense>
				</Card>

				{/* Список товаров */}
				<div className='w-9/12'>
					<div className='flex flex-col'>
						<ProductsGroupList items={products} />
					</div>
				</div>
			</Container>
		</div>
	)
}
