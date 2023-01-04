import { Cart, Product, User } from '../interfaces'
import AddToCartButton from './order/buttons/AddToCartButton'

type Props = {
	items: User[] | Product[]
	cart: Cart
}

const List = ({ items, cart }: Props) => (
	<div className='row'>
		{items.map(p => (
			<div key={p.id} className='col-sm-6 col-md-4 col-lg-3 mb-4 text-center'>
				<div className='card mb-4 box-shadow'>
					<div className='card-header h2'>{p.name}</div>
					<div className='card-body h4'>
						<div className='card-title mb-2'>${p.price}</div>
						<AddToCartButton product={p} cart={cart}></AddToCartButton>
					</div>
				</div>
			</div>
		))}
	</div>
)

export default List
