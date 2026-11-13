import { CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function BillingPanel() {
	return (
		<aside className='billing-panel' id='billing'>
			<div className='billing-icon'>
				<CreditCard size={16} />
			</div>
			<p className='eyebrow'>BILLING PREVIEW</p>
			<h2>Your subscription</h2>
			<p className='billing-copy'>
				This is a UI preview only. Connect your own billing system before
				accepting payments.
			</p>
			<Button className='billing-action' type='button' disabled>
				Billing not connected
			</Button>
		</aside>
	)
}
