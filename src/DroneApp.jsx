import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { store } from './store/store'

export const DroneApp = () => {
  return (
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>
  )
}
