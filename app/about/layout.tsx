import '../globals.css'

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='nav' style={{ border: '1px solid #fff' }}>
			{children}
		</div>
	)
}
