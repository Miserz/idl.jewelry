import { cn } from '@/lib/utils'
import { Roboto } from 'next/font/google'
import './globals.css'

const robotoFont = Roboto({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={cn(
					'flex flex-col min-h-screen bg-background',
					robotoFont.className
				)}
			>
				{children}
			</body>
		</html>
	)
}
