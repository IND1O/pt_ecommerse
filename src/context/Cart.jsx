import { createContext } from 'react'
import { useCartReduce } from '../hooks/useCartReduce'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCArt, clearCart } = useCartReduce()

  // const [cart, setCart] = useState([])

  //   const addToCart = (product) => {
  //     // Checkear si el producto esta ya en el carrito
  //     const productInCartIndex = cart.findIndex((item) => item.id === product.id)

  //     if (productInCartIndex >= 0) {
  //       const newCart = structuredClone(cart)
  //       newCart[productInCartIndex].quantity += 1
  //       return setCart(newCart)
  //     }

  //     // si el producto no est en el carrito
  //     setCart((prevSate) => ([
  //       ...prevSate,
  //       {
  //         ...product,
  //         quantity: 1
  //       }
  //     ]))
  //   }

  //   const clearCart = () => {
  //     setCart([])
  //   }

  //   const removeFromCArt = (product) => {
  //     setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  //   }

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCArt
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
