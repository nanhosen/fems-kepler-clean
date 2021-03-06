import keplerGlReducer  from 'kepler.gl/reducers'

const customizedKeplerGlReducer = keplerGlReducer
  .initialState({
  	mapStyle: {
  		styleType: 'nanette',
  		// inputStyle:{
			 //    id: 'nanbette1',
			 //    label: 'nanette1',
			 //    // url: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
			 //    url: 'mapbox://styles/nanhosen/ckcxziwe017vi1imsnzt1aucp',
			 //    // url: 'https://api.mapbox.com/styles/v1/nanhosen/ckcxziwe017vi1imsnzt1aucp.html?fresh=true&title=copy&access_token=pk.eyJ1IjoibmFuaG9zZW4iLCJhIjoiY2ppZGExdDZsMDloNzN3cGVoMjZ0NHR5YyJ9.RYsPZGmajXULk-WtqvBNpQ'
			 //    layerGroups: [] // DEFAULT_LAYER_GROUPS
			 //  }

  	},
    uiState: {
      // hide side panel to disallow user customize the map
      // readOnly: false,
      // currentModal: null,
      // customize which map control button to show
      mapControls: {
        visibleLayers: {
          show: true
        },
        mapLegend: {
          show: true,
          active: true
        },
        toggle3d: {
          show: false
        },
        splitMap: {
          show: false
        }
      }
    },
    visState: {
      loaders: [], // Add additional loaders.gl loaders here
      loadOptions: {}
      // interactionConfig: {tooltip:{enabled:true}} // Add additional loaders.gl loader options here
    }
  })

export default customizedKeplerGlReducer