function selectedDataReducer(state = { }, action) {
  // console.log('action from reducer redshift data', action)
  switch (action.type) {
    case "SELECTION_CHANGE":
    // console.log('hi')
      return {
        ...state,
        selected: action.data
      };

    default:
      return state;
  }
}

export default selectedDataReducer;
// 