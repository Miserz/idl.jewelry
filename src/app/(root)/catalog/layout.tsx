import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'IDL.JEWELRY | Каталог',
	description:
		'Ознакомьтесь с каталогом украшений ручной работы от IDL.JEWELRY. Коллекция ювелирной бижутерии, которая подчеркнет ваш стиль и станет идеальным подарком для подруги, сестры или мамы.',
	keywords:
		'украшения, бижутерия, ручная работа, каталог, купить украшения, подарки',
	openGraph: {
		title: 'IDL.JEWELRY | Каталог',
		description: 'Широкий выбор уникальных украшений ручной работы',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return children
}
