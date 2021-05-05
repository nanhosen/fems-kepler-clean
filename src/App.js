import { Provider } from 'react-redux'
import store, { history }  from './store'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router' 
import { KeplerMap } from './KeplerMap'
import Navbar from './components/Navbar'
import ChartSpot from './components/ChartSpot'
import routes from './routes'

const App = () => {
  console.log('store', store)
  return (
	    <Provider store={store}>
		    <ConnectedRouter history={history}>
		    		<>
							<Navbar width={ window.innerWidth + 'px' }  />
					    <Switch>
					    	<Route exact path="/">
					        <KeplerMap width={ window.innerWidth } height={ window.innerHeight } />
					      </Route> 
					      <Route exact path="/Chart">
					        <ChartSpot data = {store} test = {false}/>
					      </Route> 
					      <Route>
					        <KeplerMap width={ window.innerWidth } height={ window.innerHeight } />
					      </Route>   
					    </Switch>  
						</>
		    </ConnectedRouter>  
	    </Provider>
  )
}

export default App
// <Navbar width={window.innerWidth + 'px'}  />