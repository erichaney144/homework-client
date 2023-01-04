import { useState } from 'react'
import { User } from '../../interfaces'

type Props = {
	user: User
	setUser: Function
}

type LoginApiResult = {
	success: boolean
	isNthOrderDiscountAvailable: boolean
	nthOrderDiscountCode: string | null
}

const LoginDialog = ({ user, setUser }: Props) => {
	const [nthOrderCode, setNthOrderCode] = useState(null)
	const login = async () => {
		// TODO: issue POST request to server /login and interrogate isNthOrderDiscountAvailable
		const username = (
			document.getElementById('login-username') as HTMLInputElement
		).value
		const password = (
			document.getElementById('login-password') as HTMLInputElement
		).value
		if (username) {
			const res = await fetch(`${process.env.SERVER_BASE_URL}/login`, {
				method: 'POST',
				body: JSON.stringify({ username, password }),
				headers: { 'Content-Type': 'application/json' },
			})
			const { success, nthOrderDiscountCode } =
				(await res.json()) as LoginApiResult
			if (success) {
				setUser({ name: username })
				if (nthOrderDiscountCode) {
					setNthOrderCode(nthOrderDiscountCode)
				}
			}
		}
	}

	const form = [
		<div className='modal-body text-center'>
			<label className='m-2'>
				<input
					type='text'
					id='login-username'
					name='username'
					placeholder='Username'
					className='form-control'
				></input>
			</label>
			<br />
			<label className='m-2'>
				<input
					type='password'
					id='login-password'
					name='password'
					placeholder='Password'
					className='form-control'
				></input>
			</label>
		</div>,
		<div className='modal-footer'>
			<button
				type='button'
				className='btn btn-secondary'
				data-bs-dismiss='modal'
			>
				Close
			</button>
			<button type='button' className='btn btn-primary' onClick={login}>
				Log In
			</button>
		</div>,
	]

	const successWithDiscount = (
		<div>
			<h3 className='text-success m-4 text-center'>Successful Login</h3>
			<h4 className='text-secondary m-4 text-center'>
				For a special deal, use discount code{' '}
				<span className='text-body'>{nthOrderCode}</span>
			</h4>
		</div>
	)

	const successWithoutDiscount = (
		<div>
			<h3 className='text-success m-4 text-center'>Successful Login.</h3>
			<h4 className='text-secondary m-4 text-center'>
				Now logged in as <span className='text-body'>{user?.name}</span>
			</h4>
		</div>
	)

	const success = [
		nthOrderCode ? successWithDiscount : successWithoutDiscount,
		<div className='modal-footer'>
			<button type='button' className='btn btn-primary' data-bs-dismiss='modal'>
				Close
			</button>
		</div>,
	]

	return (
		<div id='login-modal' className='modal fade' tabIndex={-1}>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Log In</h5>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					{user?.name ? success : form}
				</div>
			</div>
		</div>
	)
}

export default LoginDialog
