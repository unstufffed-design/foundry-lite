'use client'

import { useTheme } from 'next-themes'
import { SunMoon } from 'lucide-react'

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme()

	return (
		<button
			className='icon-button'
			type='button'
			title='Toggle light and dark theme'
			aria-label='Toggle light and dark theme'
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
			<SunMoon size={17} />
		</button>
	)
}
