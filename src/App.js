import { Provider } from 'react-redux'
import store from './store'
import { KeplerMap } from './KeplerMap'
import Navbar from './components/Navbar'
import ChartSpot from './components/ChartSpot'

const App = () => {
  console.log('store', store)
  return (
    <Provider store={store}>
      <>
        <Navbar width={ window.innerWidth + 'px' }  />
        <KeplerMap width={ window.innerWidth } height={ window.innerHeight } />
        <ChartSpot />
      </>
    </Provider>
  )
}

export default App
// <Navbar width={window.innerWidth + 'px'}  />