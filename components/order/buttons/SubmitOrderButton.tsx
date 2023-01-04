import { useRouter } from 'next/router'
import { useState } from 'react'
import { Cart, User } from '../../../interfaces'

type Props = {
	user: User
	cart: Cart
	setCart: Function
	orderId: number
}

type CreateOrderApiResult = {
	success: boolean
	order?: { id: number }
	messages?: string[]
}

const SubmitOrderButton = ({ user, cart, setCart }: Props) => {
	const router = useRouter()
	const [errors, setErrors] = useState([])

	const checkOut = async () => {
		if (!user) {
			return
		}
		const res = await fetch(`${process.env.SERVER_BASE_URL}/order`, {
			method: 'POST',
			body: JSON.stringify({
				items: cart.items.map(({ quantity, product }) => {
					return { productId: product.id, quantity }
				}),
				discount: cart.discount?.code,
			}),
			headers: { 'Content-Type': 'application/json' },
		})
		const orderResult: CreateOrderApiResult = await res.json()
		if (orderResult.success) {
			setErrors([])
			setCart({ items: [] })
			router.push(`/order/confirmation?id=${orderResult.order.id}`)
		} else {
			setErrors(orderResult.messages)
		}
		return cart
	}

	const errorMessages = errors.map(e => <div className='text-danger'>{e}</div>)

	return (
		<div className='d-inline position-relative'>
			<button
				onClick={() => {
					checkOut()
				}}
				type='button'
				className='btn btn-lg btn-block btn-primary m-4'
				data-bs-toggle={!user ? 'modal' : ''}
				data-bs-target={!user ? '#login-modal' : ''}
			>
				Submit Order
			</button>
			{errorMessages}
		</div>
	)
}

export default SubmitOrderButton
