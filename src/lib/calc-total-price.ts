import { CartItemDTO } from 'services/dto/cart.dto'

export const calcTotalPrice = (item: CartItemDTO): number => {
	return item.product.price * item.quantity
}
