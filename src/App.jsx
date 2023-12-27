import { Cart } from './components/Carts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { useState } from 'react'
import { useFilter } from './hooks/useFilter'
import { CartProvider } from './context/Cart'
import { IS_DEVELOPMENT } from '../config'
import { products as initialProducts } from './mocks/products.json'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilter()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
        {IS_DEVELOPMENT && <Footer />}
      </CartProvider>
    </>
  )
}
export default App
