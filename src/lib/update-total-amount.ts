import { prisma } from '@/prisma/prisma-client'
import { calcTotalPrice } from './calc-total-price'

export const updateTotalAmount = async (token: string) => {
	const userCart = await prisma.cart.findFirst({
		where: {
			token,
		},
		include: {
			items: {
				orderBy: {
					createdAt: 'desc',
				},
				include: {
					product: true,
				},
			},
		},
	})

	if (!userCart) {
		return
	}

	const totalAmount = userCart?.items.reduce((acc, item) => {
		return acc + calcTotalPrice(item)
	}, 0)

	return await prisma.cart.update({
		where: {
			id: userCart.id,
		},
		data: {
			totalAmount,
		},
		include: {
			items: {
				orderBy: {
					createdAt: 'desc',
				},
				include: {
					product: true,
				},
			},
		},
	})
}
