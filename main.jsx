import './src/index.css'
import App from './src/App'
import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './src/context/filters'

const root = createRoot(document.getElementById('app'))

root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
