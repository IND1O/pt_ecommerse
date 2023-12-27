// import { useCArt } from '../hooks/useCart'
// import { useFilter } from '../hooks/useFilter'
import './Footer.css'

export function Footer () {
  // const { filters } = useFilter()
  // const { cart } = useCArt()

  return (
    <footer className='footer'>
      {/* {
        JSON.stringify(filters, null, 2)
      } */}
      {/* {
        JSON.stringify(cart, null, 2)
      } */}
      <h4>Prueba tecnica React ☢ <span> @indiodev</span></h4>
      <h5>Shoping cart con useContext & useReducer</h5>
    </footer>
  )
}
