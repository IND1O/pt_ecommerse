import './Products.css'
import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function Products ({ products }) {
  const { addToCart, cart, removeFromCArt } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCArt = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - u$s: {product.price}
              </div>
              <div>
                <button
                  style={{ background: isProductInCArt ? 'red' : '#09f' }}
                  onClick={() =>
                    isProductInCArt
                      ? removeFromCArt(product)
                      : addToCart(product)}
                >
                  {isProductInCArt ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
