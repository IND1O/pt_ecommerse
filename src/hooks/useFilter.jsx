import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilter () {
  const { filters, setFilters } = useContext(FiltersContext)

  // ESTO ES PARA JUNIOR
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
      )
    })
  }
  return { filterProducts, setFilters, filters }
}
