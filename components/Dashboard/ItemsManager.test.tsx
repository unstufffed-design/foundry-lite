import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { ItemsManager } from '@/components/Dashboard/ItemsManager'

const storageKey = 'foundry-lite-workspace-items'

describe('ItemsManager', () => {
	beforeEach(() => {
		window.localStorage.clear()
	})

	afterEach(() => {
		cleanup()
	})

	it('loads saved notes and persists additions and deletions', () => {
		window.localStorage.setItem(
			storageKey,
			JSON.stringify([
				{
					id: 'saved-item',
					title: 'Saved note',
					created_at: '2026-11-13T12:00:00.000Z',
				},
			]),
		)

		render(<ItemsManager />)
		expect(screen.getByText('Saved note')).toBeTruthy()

		fireEvent.change(screen.getByLabelText('New workspace note'), {
			target: { value: 'New note' },
		})
		fireEvent.click(screen.getByRole('button', { name: /add item/i }))

		const savedItems = JSON.parse(
			window.localStorage.getItem(storageKey) ?? '[]',
		) as Array<{ id: string; title: string }>
		expect(savedItems.map((item) => item.title)).toEqual([
			'New note',
			'Saved note',
		])
		expect(screen.getByText('New note')).toBeTruthy()

		fireEvent.click(screen.getByRole('button', { name: 'Delete New note' }))
		const remainingItems = JSON.parse(
			window.localStorage.getItem(storageKey) ?? '[]',
		) as Array<{ title: string }>
		expect(remainingItems.map((item) => item.title)).toEqual(['Saved note'])
		expect(screen.queryByText('New note')).toBeNull()
	})

	it('reports malformed stored data instead of hiding it', () => {
		window.localStorage.setItem(storageKey, JSON.stringify([{ title: 'Broken' }]))

		render(<ItemsManager />)

		expect(screen.getByRole('alert').textContent).toBe(
			'Saved workspace data has an invalid format.',
		)
	})
})
