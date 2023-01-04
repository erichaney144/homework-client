import { useRouter } from 'next/router'
import KeepShoppingButton from '../../components/order/buttons/KeepShoppingButton'

const OrderConfirmationPage = () => {
	const router = useRouter()
	const { id } = router.query
	return (
		<div>
			<h1>Order #{id} - Created Successfully!</h1>
			<KeepShoppingButton />
		</div>
	)
}

export default OrderConfirmationPage
