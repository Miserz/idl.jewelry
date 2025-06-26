import { findOrCreateCart } from '@/lib/find-or-create-cart'
import { updateTotalAmount } from '@/lib/update-total-amount'
import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/prisma/prisma-client'
import { CreateCartItemValues } from 'services/dto/cart.dto'

export async function GET(req: NextRequest) {
	try {
		const token = req.cookies.get('cartToken')?.value

		if (!token) {
			return NextResponse.json({ totalAmount: 0, items: [] })
		}

		const userCart = await prisma.cart.findFirst({
			where: {
				OR: [
					{
						token,
					},
				],
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

		return NextResponse.json(userCart)
	} catch (error) {
		console.log('[CART_GET] Server error', error)
		return NextResponse.json(
			{ message: 'Не удалось получить корзину' },
			{ status: 500 }
		)
	}
}

export async function POST(req: NextRequest) {
	try {
		let token = req.cookies.get('cartToken')?.value

		if (!token) {
			token = crypto.randomUUID()
		}
		const userCart = await findOrCreateCart(token)

		const data = (await req.json()) as CreateCartItemValues

		const findCartItem = await prisma.cartItem.findFirst({
			where: {
				cartId: userCart.id,
				productId: data.productId,
			},
		})

		if (findCartItem) {
			await prisma.cartItem.update({
				where: {
					id: findCartItem.id,
				},
				data: {
					quantity: findCartItem.quantity + 1,
				},
			})
		}

		await prisma.cartItem.create({
			data: {
				cartId: userCart.id,
				productId: data.productId,
				quantity: 1,
			},
		})

		const updatedUserCart = await updateTotalAmount(token)

		const resp = NextResponse.json(updatedUserCart)
		resp.cookies.set('cartToken', token)
		return resp
	} catch (error) {
		console.log('[CART_POST] Server error', error)
		return NextResponse.json(
			{ message: 'Не удалось создать корзину' },
			{ status: 500 }
		)
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const token = req.cookies.get('cartToken')?.value

		if (!token) {
			return NextResponse.json({ message: 'Токен не найден' })
		}

		const userCart = await prisma.cart.findFirst({
			where: { token },
		})

		if (!userCart) {
			return NextResponse.json({ message: 'Корзина не найдена' })
		}

		await prisma.cartItem.deleteMany({
			where: { cartId: userCart.id },
		})

		const updatedUserCart = await updateTotalAmount(token)
		return NextResponse.json(updatedUserCart)
	} catch (error) {
		console.log('[CART_DELETE] Server error', error)
		return NextResponse.json(
			{ message: 'Не удалось очистить корзину' },
			{ status: 500 }
		)
	}
}
