import type { Metadata } from 'next'
import { ItemsManager } from '@/components/Dashboard/ItemsManager'
import { Navbar } from '@/components/Dashboard/Navbar'

export const metadata: Metadata = { title: 'Workspace' }

export default function WorkspacePage() {
	return (
		<>
			<Navbar email='Demo account' section='Workspace' />
			<main className='dashboard-content' id='main-content' tabIndex={-1}>
				<div className='dashboard-title-row'>
					<div>
						<p className='eyebrow'>YOUR WORKSPACE</p>
						<h1>Workspace items</h1>
						<p className='dashboard-intro'>
							Keep track of notes and tasks for your workspace.
						</p>
					</div>
				</div>
				<ItemsManager />
			</main>
		</>
	)
}
