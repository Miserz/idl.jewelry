export const metadata = {
	title: 'Dashboard | IDL.JEWELRY',
}

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body>{children}</body>
		</html>
	)
}
