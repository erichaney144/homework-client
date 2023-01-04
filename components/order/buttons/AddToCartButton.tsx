import { useRouter } from 'next/router'
import { Cart, Product } from '../../../interfaces'

type Props = {
	product: Product
	cart: Cart
}

const AddToCartButton = ({ product, cart }: Props) => {
	const router = useRouter()
	const addToCart = product => {
		const [item] = cart.items.filter(item => item.product.id == product.id)
		if (item) {
			item.quantity++
		} else {
			cart.items.push({ product, quantity: 1 })
		}
		return cart
	}
	return (
		<button
			onClick={() => {
				addToCart(product)
				router.push('/cart')
			}}
			type='button'
			className='btn btn-lg btn-block btn-primary'
		>
			Add To Cart
		</button>
	)
}

export default AddToCartButton
