'use client'

import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'
import { useState } from 'react'

const plans = {
	monthly: {
		label: 'Monthly',
		period: 'month',
		description: 'Flexible billing for a growing product.',
	},
	yearly: {
		label: 'Yearly',
		period: 'year',
		description: 'Simple annual billing for your team.',
	},
}

const benefits = [
	'Example plan layout',
	'Responsive pricing cards',
	'Monthly and yearly options',
	'Easy to customize',
]

export function PricingTable() {
	const [selected, setSelected] = useState<keyof typeof plans>('monthly')
	const plan = {
		...plans[selected],
		price: selected === 'monthly' ? '$19' : '$190',
	}

	return (
		<div className='pricing-grid'>
			<div className='pricing-copy'>
				<div className='pricing-mark'>
					<Sparkles size={20} />
				</div>
				<h3>Simple plans. Room to grow.</h3>
				<p>
					Start with the tools you need today and shape the experience around
					your product.
				</p>
				<ul>
					{benefits.map((benefit) => (
						<li key={benefit}>
							<Check size={15} />
							{benefit}
						</li>
					))}
				</ul>
				<span className='pricing-note'>
					Example pricing only. No payment is collected.
				</span>
			</div>
			<div className='pricing-panel'>
				<div
					className='pricing-switch'
					role='group'
					aria-label='Choose a billing period'>
					<button
						type='button'
						aria-pressed={selected === 'monthly'}
						onClick={() => setSelected('monthly')}>
						Monthly
					</button>
					<button
						type='button'
						aria-pressed={selected === 'yearly'}
						onClick={() => setSelected('yearly')}>
						Yearly
					</button>
				</div>
				<p className='plan-kicker'>{plan.label.toUpperCase()} PLAN</p>
				<div className='plan-price'>
					{plan.price}
					<small>/ {plan.period}</small>
				</div>
				<p className='plan-description'>{plan.description}</p>
				<Link
					className='button button-primary button-large w-full justify-center'
					href={`/signup?billing=${selected}`}>
					Preview {plan.label.toLowerCase()} plan
				</Link>
				<p className='checkout-note'>
					Example price. Connect your own checkout before accepting payments.
				</p>
			</div>
		</div>
	)
}
