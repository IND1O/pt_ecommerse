import './Filters.css'
import { useId } from 'react'
import { useFilter } from '../hooks/useFilter'

export function Filters () {
  const { filters, setFilters } = useFilter()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangePrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    // Algo hule mal 🤔
    // Estamos pasando la funcion de actualizar el estado nativa de React a un componente hijo.
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <>
      <section className='filters'>
        <div>
          <label htmlFor={minPriceFilterId} />
          A partir de:
          <input
            type='range'
            id={minPriceFilterId}
            min='0'
            max='2000'
            onChange={handleChangePrice}
            value={filters.minPrice}
          />
          <span>u$s: {filters.minPrice}</span>
        </div>

        <div>
          <label htmlFor={categoryFilterId} />
          Category
          <select id={categoryFilterId} onChange={handleChangeCategory}>
            <option value='all'>All</option>
            <option value='laptops'>Laptops</option>
            <option value='smartphones'>Smartphones</option>
          </select>
        </div>
      </section>
    </>
  )
}
