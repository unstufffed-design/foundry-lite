import type { Metadata } from 'next'
import { Navbar } from '@/components/Dashboard/Navbar'
import { ItemsManager } from '@/components/Dashboard/ItemsManager'
import { BillingPanel } from '@/components/Dashboard/BillingPanel'
import { StatCards } from '@/components/Dashboard/StatCards'

export const metadata: Metadata = { title: 'Dashboard' }

export default function DashboardPage() {
	return (
		<>
			<Navbar email='Demo account' />
			<main className='dashboard-content' id='main-content' tabIndex={-1}>
				<div className='dashboard-title-row'>
					<div>
						<p className='eyebrow'>OVERVIEW</p>
						<h1>Your workspace</h1>
						<p className='dashboard-intro'>
							A quick read on what&apos;s happening in your business.
						</p>
					</div>
					<div className='period-select'>
						Last 30 days <span>⌄</span>
					</div>
				</div>
				<StatCards />
				<div className='dashboard-lower'>
					<ItemsManager />
					<BillingPanel />
				</div>
			</main>
		</>
	)
}
