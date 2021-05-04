import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import customizedKeplerGlReducer from './reducers/customKeplerReducer'
import { enhanceReduxMiddleware } from 'kepler.gl/middleware'
import thunk from 'redux-thunk'
import latestDataReducer from './reducers/getLatestDataReducer'
import redshiftDataReducer from './reducers/getRedshiftDataReducer'

import { appReducer } from './reducers/'

const initialState = {}

const reducers = combineReducers({
	keplerGl: customizedKeplerGlReducer,
	app: appReducer,
	latestData: latestDataReducer,
	redshiftData: redshiftDataReducer
})

let middlewares = [ thunk ]

const middlewareEnhancer = enhanceReduxMiddleware(middlewares)
const enhancers = [applyMiddleware(...middlewareEnhancer)]

export default createStore(
	reducers,
	initialState,
	compose(...enhancers)
)

// const customizedKeplerGlReducer = keplerGlReducer
//   .initialState({
//   	mapStyle: {
//   		styleType: 'nanbette',
//   	},
//     uiState: {
//       // hide side panel to disallow user customize the map
//       readOnly: false,
//       currentModal: null,
//       // customize which map control button to show
//       mapControls: {
//         visibleLayers: {
//           show: true
//         },
//         mapLegend: {
//           show: true,
//           active: true
//         },
//         toggle3d: {
//           show: false
//         },
//         splitMap: {
//           show: false
//         }
//       }
//     },
//     visState: {
//       loaders: [], // Add additional loaders.gl loaders here
//       loadOptions: {}
//       // interactionConfig: {tooltip:{enabled:true}} // Add additional loaders.gl loader options here
//     }
//   })
