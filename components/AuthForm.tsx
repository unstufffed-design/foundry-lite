'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type AuthFormProps = { mode: 'login' | 'signup' }

export function AuthForm({ mode }: AuthFormProps) {
	const router = useRouter()
	const [message, setMessage] = useState('')
	const isSignup = mode === 'signup'

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setMessage('')
		const formData = new FormData(event.currentTarget)
		const email = String(formData.get('email')).trim()
		const fullName = String(formData.get('name') ?? '').trim()

		try {
			window.sessionStorage.setItem(
				'foundry-lite-demo-user',
				fullName || email,
			)
			const requestedPath = new URLSearchParams(window.location.search).get(
				'next',
			)
			const destination = requestedPath?.startsWith('/dashboard')
				? requestedPath
				: '/dashboard'
			router.replace(destination)
			router.refresh()
		} catch (error) {
			setMessage(
				error instanceof Error
					? error.message
					: 'Unable to start the local demo.',
			)
		}
	}

	return (
		<form className='auth-form' onSubmit={handleSubmit}>
			{isSignup && (
				<label className='form-label'>
					Name <Input autoComplete='name' name='name' placeholder='Your name' />
				</label>
			)}
			<label className='form-label'>
				Email{' '}
				<Input
					autoComplete='email'
					name='email'
					type='email'
					placeholder='you@company.com'
					required
				/>
			</label>
			<p className='form-hint'>
				This is a local UI demo. No account is created and no credentials are
				sent to a server.
			</p>
			{message && (
				<p className='form-message' role='status'>
					{message}
				</p>
			)}
			<Button
				className='button-large w-full justify-center'
				type='submit'>
				Continue to demo
			</Button>
			<p className='auth-switch'>
				{isSignup ? 'Already have an account?' : 'New to Foundry Lite?'}{' '}
				<Link href={isSignup ? '/login' : '/signup'}>
					{isSignup ? 'Sign in' : 'Create an account'}
				</Link>
			</p>
		</form>
	)
}
