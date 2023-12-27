import { useContext } from 'react'
import { CartContext } from '../context/Cart'

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart no puede ser utilizado sin CartProvider')
  }

  return context
}
