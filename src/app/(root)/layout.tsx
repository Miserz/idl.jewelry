import { Footer } from '@/components/shared'
import { Header } from '@/components/shared/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'IDL.JEWELRY | Главная',
	description:
		'IDL.JEWELRY — украшения ручной работы. Коллекция ювелирной бижутерии, которая дополнит ваш образ и вызовет восхищение окружающих. Найдите идеальное украшение для себя или вдохновитесь идеями подарков для подруги, сестры или мамы.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<main className='flex-1 flex flex-col gap-40'>{children}</main>
			<Footer />
		</>
	)
}
