import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: {
		default: 'Foundry Lite | The Next.js starter built to ship',
		template: '%s | Foundry Lite',
	},
	description: 'A lightweight Next.js and Tailwind starter for your next product.',
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
				<ThemeProvider>
					<a className='skip-link' href='#main-content'>
						Skip to main content
					</a>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
