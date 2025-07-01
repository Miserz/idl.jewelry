import { hashSync } from 'bcrypt'
import { categories, materials, products } from './constants'
import { prisma } from './prisma-client'

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'User',
				email: 'user@test.ru',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'USER',
			},
			{
				fullName: 'Admin',
				email: 'admin@test.ru',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'ADMIN',
			},
		],
	})

	await prisma.category.createMany({
		data: categories,
	})

	await prisma.material.createMany({
		data: materials,
	})

	await prisma.product.createMany({
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		data: products.map(({ materials, ...rest }) => rest),
	});

	for (const [i, product] of products.entries()) {
		if (product.materials?.connect) {
			await prisma.product.update({
				where: { id: i + 1 },
				data: {
					materials: {
					connect: product.materials.connect,
					},
				},
			});
		}
	}

	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				token: '11111',
			},
			{
				userId: 2,
				token: '22222',
			},
		],
	})

	await prisma.cartItem.createMany({
		data: [
			{
				productId: 1,
				cartId: 1,
				quantity: 1,
			},
			{
				productId: 4,
				cartId: 1,
				quantity: 2,
			},
			{
				productId: 2,
				cartId: 2,
				quantity: 1,
			},
			{
				productId: 5,
				cartId: 2,
				quantity: 3,
			},
		],
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Material" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.error(e)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
