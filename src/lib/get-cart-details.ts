import { CartDTO } from 'services/dto/cart.dto'
import { calcTotalPrice } from './calc-total-price'

export type CartStateItem = {
	id: number
	productId: number
	quantity: number
	name: string
	imagesUrl: string[]
	price: number
}

interface ReturnProps {
	items: CartStateItem[]
	totalAmount: number
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
	const items = data.items.map(item => ({
		id: item.id,
		productId: item.product.id,
		quantity: item.quantity,
		name: item.product.name,
		imagesUrl: item.product.imagesUrl,
		price: calcTotalPrice(item),
	}))

	return {
		items,
		totalAmount: data.totalAmount,
	}
}
