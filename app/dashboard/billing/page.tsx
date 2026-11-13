import type { Metadata } from 'next'
import { BillingPanel } from '@/components/Dashboard/BillingPanel'
import { Navbar } from '@/components/Dashboard/Navbar'

export const metadata: Metadata = { title: 'Billing' }

export default function BillingPage() {
	return (
		<>
			<Navbar email='Demo account' section='Billing' />
			<main className='dashboard-content' id='main-content' tabIndex={-1}>
				<div className='dashboard-title-row'>
					<div>
						<p className='eyebrow'>SUBSCRIPTION</p>
						<h1>Billing</h1>
						<p className='dashboard-intro'>
							Explore the subscription UI preview and adapt it to your product.
						</p>
					</div>
				</div>
				<BillingPanel />
			</main>
		</>
	)
}
