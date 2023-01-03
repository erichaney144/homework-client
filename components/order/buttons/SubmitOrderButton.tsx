import { useRouter } from 'next/router'
import { Cart, User } from '../../../interfaces'

type Props = {
  user: User
  cart: Cart
  setCart: Function
  orderId: number
}

type CreateOrderApiResult = {
  success: boolean,
  order?: {id: number},
  errors?: string[]
}

const SubmitOrderButton = ({ user, cart, setCart}: Props) => {
  const router = useRouter()

  const checkOut = async () => {
    if (!user) {
      return
    }
    const res = await fetch(`${process.env.SERVER_BASE_URL}/order`,
      {
        method: 'POST',
        body: JSON.stringify({
          items: cart.items.map(({quantity, product}) => {
            return {productId: product.id, quantity}
          })
        }),
        headers: {'Content-Type': 'application/json'}
      }
    )
    const orderResult: CreateOrderApiResult = await res.json()
    if (orderResult.success) {
      setCart({items:[]})
      router.push(`/order/confirmation?id=${orderResult.order.id}`)
    } else {
    }
    return cart
  }
  return(
    <button
    onClick={() => {checkOut();}}
    type="button"
    className="btn btn-lg btn-block btn-primary m-4"
    data-bs-toggle={!user ? 'modal' : ''}
    data-bs-target={!user ? '#login-modal' : ''}
    >
      Submit Order
    </button>
  )
}

export default SubmitOrderButton