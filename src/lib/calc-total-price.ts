import { CartItemDTO } from 'services/dto/cart.dto'

export const calcTotalPrice = (item: CartItemDTO): number => {
	const discountAmount = (item.product.discount / 100) * item.product.price
	return (item.product.price - discountAmount) * item.quantity
}
