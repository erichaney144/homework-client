import { useRouter } from "next/router"

const KeepShoppingButton = ({primary}:{primary?:boolean}) => {
  const router = useRouter()
  const className = primary ? 'btn-primary' : 'btn-secondary'
  return (
    <button
    onClick={() => {router.push('/')}}
    type="button"
    className={`btn btn-lg btn-block ${className} m-4`}>
      Keep Shopping
    </button>
  )
}

export default KeepShoppingButton