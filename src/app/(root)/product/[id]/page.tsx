import {
	Container,
	ProductImages,
	ProductInformation,
} from '@/components/shared'
import { notFound } from 'next/navigation'
import { prisma } from '@/prisma/prisma-client'

export default async function Product(props: {
	params: Promise<{ id: string }>
}) {
	const params = await props.params
	const id = Number(params.id)
	const product = await prisma.product.findFirst({ where: { id } })

	if (!product) {
		return notFound()
	}

	return (
		<Container className='flex gap-6'>
			<ProductImages className='w-6/12' imagesUrl={product.imagesUrl} />

			<ProductInformation product={product} className='w-6/12' />
		</Container>
	)
}
