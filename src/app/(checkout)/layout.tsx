import { Footer } from '@/components/shared'
import { Header } from '@/components/shared/header'

export default function CheckoutLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header hasCheckout={true} />
			<main className='flex-1 flex flex-col gap-40'>{children}</main>
			<Footer />
		</>
	)
}
