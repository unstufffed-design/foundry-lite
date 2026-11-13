import Link from 'next/link'
import {
	ArrowDownRight,
	ArrowRight,
	Check,
	Code2,
	Database,
	LockKeyhole,
	Zap,
} from 'lucide-react'
import { FeatureGrid } from '@/components/LandingPage/FeatureGrid'
import { PricingTable } from '@/components/LandingPage/PricingTable'
import { ThemeToggle } from '@/components/theme-toggle'

const included = [
	'App Router + TypeScript',
	'Responsive dashboard and workspace',
	'Local-only demo interactions',
]

export default function Home() {
	return (
		<main className='overflow-x-clip' id='main-content' tabIndex={-1}>
			<header className='site-header sticky top-0 z-30'>
				<div className='site-header-inner'>
					<Link className='brand' href='/' aria-label='Foundry Lite home'>
						<span className='brand-mark'>F</span>foundry lite
						<span className='brand-dot'>.</span>
					</Link>
					<nav
						className='hidden items-center gap-8 text-sm text-muted sm:flex'
						aria-label='Main navigation'>
						<a href='#features'>Features</a>
						<a href='#pricing'>Pricing</a>
						<a href='#stack'>Stack</a>
						<Link href='/docs'>Docs</Link>
					</nav>
					<div className='flex items-center gap-3'>
						<ThemeToggle />
						<Link className='text-muted text-sm sm:hidden' href='/docs'>
							Docs
						</Link>
						<Link className='button button-small button-dark' href='/login'>
							Sign in
						</Link>
					</div>
				</div>
			</header>

			<section className='hero-shell'>
				<div className='hero-grid'>
					<div className='hero-copy'>
						<p className='eyebrow'>
							<span className='eyebrow-line' /> YOUR NEXT PRODUCT, ALREADY IN
							MOTION
						</p>
						<h1>
							Skip the setup.
							<br />
							<span>Ship the useful part.</span>
						</h1>
						<p className='hero-description'>
							A thoughtful SaaS front-end foundation with polished screens and
							local-only demos, ready for the product only you can build.
						</p>
						<div className='hero-actions'>
							<Link
								className='button button-primary button-large'
								href='/signup'>
								Get started <ArrowRight size={17} />
							</Link>
							<a className='button button-quiet button-large' href='#features'>
								Explore the kit <ArrowDownRight size={17} />
							</a>
						</div>
						<ul className='hero-included'>
							{included.map((item) => (
								<li key={item}>
									<Check size={15} strokeWidth={2.5} />
									{item}
								</li>
							))}
						</ul>
					</div>
					<div
						className='product-window'
						aria-hidden='true'>
						<div className='window-bar'>
							<span className='window-dots'>
								<i />
								<i />
								<i />
							</span>
							<span className='window-address'>app.foundry.dev / overview</span>
							<span className='window-avatar'>JD</span>
						</div>
						<div className='preview-layout'>
							<div className='preview-sidebar'>
								<span className='preview-logo'>F</span>
								<span className='preview-nav active' />
								<span className='preview-nav' />
								<span className='preview-nav' />
								<span className='preview-nav short' />
							</div>
							<div className='preview-main'>
								<div className='preview-heading'>
									<div>
										<small>MONDAY, OCTOBER 21</small>
										<strong>Good morning, Jordan</strong>
									</div>
									<span className='preview-add'>+ New item</span>
								</div>
								<div className='preview-stats'>
									<div>
										<small>MONTHLY REVENUE</small>
										<b>$12,840</b>
										<em>↗ 12.8%</em>
									</div>
									<div>
										<small>ACTIVE USERS</small>
										<b>2,431</b>
										<em>↗ 8.2%</em>
									</div>
								</div>
								<div className='preview-chart'>
									<div className='chart-title'>
										<span>Revenue overview</span>
										<small>Last 30 days⌄</small>
									</div>
									<div className='chart-bars' aria-hidden='true'>
										{[32, 46, 39, 58, 48, 65, 53, 78, 64, 86, 72, 94].map(
											(height, index) => (
												<i key={index} style={{ height: `${height}%` }} />
											),
										)}
									</div>
								</div>
								<div className='preview-list'>
									<span>Recent activity</span>
									<div>
										<i className='activity-icon green' />
										Subscription renewed <small>2 min ago</small>
									</div>
									<div>
										<i className='activity-icon blue' />
										New workspace created <small>18 min ago</small>
									</div>
								</div>
							</div>
						</div>
						<div className='window-caption'>
							<span>
								<i /> LIVE PREVIEW
							</span>
							<span>Built for your next big idea</span>
						</div>
					</div>
				</div>
				<div className='hero-footnote'>
					<span>MADE FOR SMALL TEAMS WITH BIG PLANS</span>
					<a href='#stack'>
						See what&apos;s under the hood <ArrowRight size={13} />
					</a>
				</div>
			</section>

			<section className='stack-strip' id='stack'>
				<p>THE BORING PARTS, BEAUTIFULLY HANDLED</p>
				<div>
					<span>
						<Code2 size={17} /> Next.js 16
					</span>
					<span>
						<LockKeyhole size={17} /> TypeScript
					</span>
					<span>
						<Zap size={17} /> Tailwind CSS
					</span>
					<span>
						<Database size={17} /> Browser storage
					</span>
				</div>
			</section>

			<section className='section-wrap' id='features'>
				<div className='section-heading'>
					<div>
						<p className='eyebrow'>A HEAD START, NOT A BLACK BOX</p>
						<h2>
							The foundation is done.
							<br />
							<span>Your product is up next.</span>
						</h2>
					</div>
					<p>
						Clear patterns and enough room to make it yours. No mystery
						abstractions to unpick later.
					</p>
				</div>
				<FeatureGrid />
			</section>

			<section className='pricing-wrap' id='pricing'>
				<div className='section-heading pricing-heading'>
					<div>
						<p className='eyebrow'>A STARTING POINT FOR YOUR PRODUCT</p>
						<h2>Start with a clear plan.</h2>
					</div>
					<p>
						Example pricing is included as a design preview. Adapt it to your
						product before launch.
					</p>
				</div>
				<PricingTable />
			</section>

			<footer className='site-footer'>
				<Link className='brand' href='/'>
					<span className='brand-mark'>F</span>foundry lite
					<span className='brand-dot'>.</span>
				</Link>
				<span>Built to get out of your way.</span>
				<span>© unstuffed design, LLC</span>
			</footer>
		</main>
	)
}
