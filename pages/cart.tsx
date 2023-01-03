import { useRouter } from "next/router"
import KeepShoppingButton from "../components/order/buttons/KeepShoppingButton"
import SubmitOrderButton from "../components/order/buttons/SubmitOrderButton"
import DiscountWidget from "../components/order/discount/DiscountWidget"

const CartPage = ({user, cart, setCart, orderId}) => {
  const router = useRouter()
  if (cart?.items?.length) {
    return (
    <div>
      <h1>Cart</h1>
      <table className="table" style={{maxWidth: "500px"}}>
        <thead className="th-head-light">
        <tr>
          <th>Product</th>
          <th className="text-end">Price</th>
        </tr>
        </thead>
        <tbody>
      {cart.items.map(item => (
        <tr key={item.product.id}>
          <td>{item.product.name}</td>
          <td className="text-end">${item.product.price} {item.quantity == 1 ? '' : `(x${parseInt(item.quantity)})`}</td>
        </tr>
      ))}
      { cart.discount ?
        ( <tr>
            <td>Discount: {cart.discount.code}</td>
            <td className="text-end">${cart.discount.amount}</td>
          </tr>
        ) : ''
      }
        <tr>
          <td>Total:</td>
          <td className="text-end">${cart.items.reduce((subtotal, item)=>subtotal + (item.quantity * item.product.price), 0)}</td>
        </tr>
        </tbody>
      </table>
      <DiscountWidget user={user} cart={cart} setCart={setCart}/>
      <KeepShoppingButton/>
      <SubmitOrderButton cart={cart} setCart={setCart} user={user} orderId={orderId}/>
    </div>
    )
  } else {
    return (
      <div>
        <h1>
          Cart is empty.
        </h1>
        <KeepShoppingButton primary={true}/>
      </div>
    )
  }
}

export default CartPage
