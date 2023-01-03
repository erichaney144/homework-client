import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Cart, User } from '../../../interfaces'

type Props = {
  user: User
  cart: Cart
  setCart: Function
}

type DiscountApiResult = {
  id: number,
  code: string,
  type: 'PERCENT' | 'FIXED',
  amount: number
}

const DiscountWidget = ({ user, cart, setCart}: Props) => {
  const router = useRouter()
  const [showFormFlag, setShowFormFlag] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const applyDiscount = async () => {
    const code = encodeURIComponent(
      (document.getElementById('discount_code') as HTMLInputElement)
      .value
    )
    const res = await fetch(
      `${process.env.SERVER_BASE_URL}/discount/${code}`,
      {}
    )
    const discount:null | DiscountApiResult = await res.json()
    if (discount) {
      setCart({...cart, discount})
      setShowFormFlag(false)
      setErrorMessage('')
    } else {
      setErrorMessage('discount not found')
    }
  }

  const applyLink = (<Link href="#" onClick={() => {setShowFormFlag(true)}}>Apply Discount</Link>)

  const form = (
    <div className="position-absolute">
    <input type="text" id="discount_code" placeholder="DISCOUNT CODE" className="form-control-inline"/>
    <span className="position-absolute text-danger" style={{top: "34px", left: "0"}}>{errorMessage}</span>
    <button
    type="button"
    className="btn btn-lg btn-block btn-primary ms-4 me-4"
    onClick={applyDiscount}>
      Apply
    </button>
    <Link href="#" onClick={() => {setShowFormFlag(false)}}>Cancel</Link>
    </div>
  )

  return (
    <div className="m-4 position-relative">
      {showFormFlag ? form : applyLink} &nbsp;
    </div>
  )
}

export default DiscountWidget