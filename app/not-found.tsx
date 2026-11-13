import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='auth-shell' id='main-content' tabIndex={-1}>
			<p className='eyebrow'>404 · PAGE NOT FOUND</p>
			<h1>We couldn&apos;t find that page.</h1>
			<p className='auth-description'>
				The link may be outdated, or the page may have moved.
			</p>
			<Link className='button button-primary' href='/'>
				Return home
			</Link>
		</main>
	)
}
