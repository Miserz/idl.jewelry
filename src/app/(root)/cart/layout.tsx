import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'IDL.JEWELRY | Корзина',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return children
}
