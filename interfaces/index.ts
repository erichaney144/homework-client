// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Product = {
	id: number
	name: string
	price: number
}

export type CartItem = {
	product: Product
	quantity: number
}

export type Discount = {
	code: string
	amount: number
	type: 'PERCENT' | 'FIXED'
}

export type Cart = {
	items: CartItem[]
	discount: Discount
}

export type User = {
	id: number
	name: string
}
