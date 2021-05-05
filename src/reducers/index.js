import {handleActions} from 'redux-actions';
import {ActionTypes} from 'kepler.gl/actions';
// export const appReducer = (state = {
//   test1: false,
//   test2: true
// }, action) => {
//   return state;
// }


export const appReducer = handleActions({
  // listen on kepler.gl map update action to store a copy of viewport in app state
  [ActionTypes.LAYER_CLICK]: function (state, action){
    // console.log('click action action',  action)
    // console.log('click action payload',  action.payload.info)
    var station = null
    if(action.payload.info && action.payload.info.object && action.payload.info.object.data ){
    	// console.log('there is a station here', Object.keys(action.payload.info))
    	// console.log('there is a station here',action.payload.info.object.data[0])
      const stn = parseFloat(action.payload.info.object.data[0])
      if(stn && isNaN(stn) == false){
        localStorage.setItem('stn', stn)
        station = stn
        window.open('/Chart')
      }

    }
    return {
      ...state,
      data: action.payload.info,
      station
    }
  },
}, []);
