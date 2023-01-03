import List from '../components/List'

const IndexPage = ({products, cart, setUser, user}) => (
  <List items={products} cart={cart} />
)

export async function getStaticProps() {
  // Call server API endpoint to get products
  const res = await fetch(`${process.env.SERVER_BASE_URL}/products`)
  const products = await res.json()

  return {
    props: {
      products,
    },
  }
}

export default IndexPage
