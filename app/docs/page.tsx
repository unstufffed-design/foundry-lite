import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Docs' }

export default function DocsPage() {
	return (
		<main
			className='mx-auto max-w-3xl space-y-10 px-6 py-12'
			id='main-content'
			tabIndex={-1}>
			<header className='space-y-4'>
				<Link className='text-sm text-muted' href='/'>
					← Back to Foundry Lite
				</Link>
				<p className='eyebrow'>QUICK START</p>
				<h1 className='text-4xl font-semibold'>Make it yours.</h1>
				<p className='text-muted'>
					Foundry Lite is a front-end starter. Run it locally, explore the demo,
					and adapt the screens to your product.
				</p>
			</header>

			<section className='space-y-4'>
				<h2 className='text-2xl font-semibold'>Run the app</h2>
				<pre className='overflow-x-auto rounded-xl border p-4 text-sm'>
					<code>{`npm install\nnpm run dev`}</code>
				</pre>
				<p className='text-muted'>
					Open <code>http://localhost:3000</code>. No environment setup is
					required.
				</p>
			</section>

			<section className='space-y-4'>
				<h2 className='text-2xl font-semibold'>Explore the demo</h2>
				<ul className='list-disc space-y-2 pl-6 text-muted'>
					<li>Use the account screens to enter the dashboard preview.</li>
					<li>Add and remove workspace notes; they stay in this browser.</li>
					<li>Browse the pricing and billing previews.</li>
				</ul>
			</section>

			<section className='space-y-4'>
				<h2 className='text-2xl font-semibold'>Before production</h2>
				<p className='text-muted'>
					The account screens do not authenticate users, workspace notes are
					not private, and billing is not connected. Replace the demo behavior
					with server-backed services and authorization before handling real
					users, data, or payments. Update the example pricing before launch.
				</p>
			</section>

			<section className='space-y-4'>
				<h2 className='text-2xl font-semibold'>Useful commands</h2>
				<pre className='overflow-x-auto rounded-xl border p-4 text-sm'>
					<code>{`npm run lint\nnpm test\nnpx tsc --noEmit\nnpm run build`}</code>
				</pre>
			</section>
		</main>
	)
}
