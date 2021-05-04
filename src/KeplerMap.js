import React, { useEffect } from "react";
// import KeplerGl from 'kepler.gl'
import { connect, useSelector, useDispatch } from 'react-redux'
import { getLatestData, getRedshiftDataMonthly, getRedshiftDataFireSeason } from './actions' 
import {addDataToMap, inputMapStyle, wrapTo } from 'kepler.gl/actions';
import {
  MapLegendPanelFactory,
  LoadDataModalFactory,
  injectComponents
} from 'kepler.gl/components';
// import {addDataToMap, inputMapStyle, wrapTo } from 'localKepler/actions';
import { config, singleFireSeason, filterSettings } from './configs/pointLayerConfigs'
// import CustomLegend from './components/CustomLegend'
import CustomLegendFactory from './factories/CustomLegendFactory'
import CustomLoadDataModalFactory from './factories/CustomModalFactory'



// const myCustomLegendFactory = () => CustomLegend;

const mapStylesz = [
    {
      id: 'nanette',
      label: 'nanette',
      // url: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
      url: 'mapbox://styles/nanhosen/ckcxziwe017vi1imsnzt1aucp',
      // url: 'https://api.mapbox.com/styles/v1/nanhosen/ckcxziwe017vi1imsnzt1aucp.html?fresh=true&title=copy&access_token=pk.eyJ1IjoibmFuaG9zZW4iLCJhIjoiY2ppZGExdDZsMDloNzN3cGVoMjZ0NHR5YyJ9.RYsPZGmajXULk-WtqvBNpQ'
      // layerGroups: [] // DEFAULT_LAYER_GROUPS
    }
  ]; 
const KeplerGl = injectComponents([
	  [MapLegendPanelFactory, CustomLegendFactory],
	  [LoadDataModalFactory, CustomLoadDataModalFactory]
	  // [MapPopoverFactory, CustomPopoverFactory]
	  // [LayerHoverInfoFactory, myCustomInfoFactory]
	]);
export const KeplerMap = ({ width, height }) => {
	console.log('width of kepler', width)
	const dataState = useSelector ( state => state)
	const redshiftData = useSelector ( state => state.redshiftData)
	useEffect(() => {
		if(dataState.keplerGl && dataState.keplerGl['kepler-map'] && dataState.keplerGl['kepler-map'].visState.layers){
			console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!', dataState.keplerGl['kepler-map'].visState, dataState.keplerGl['kepler-map'].visState.layers)
			dataState.keplerGl['kepler-map'].visState.layers.map(curr => console.log('curr ha', curr.config.isVisible,curr.config.dataId, curr))
		}
		console.log('kepler gl state', dataState.keplerGl)
	}, [dataState])
	const dispatch = useDispatch()
  // useEffect(() => {
  //   // console.log(' state changed', dataState)
  // }, [dataState])
  // useEffect(() => {
  //   // console.log('using the effectt')
  //   dispatch(getLatestData())
  // },[])
  // useEffect(() => {
  //   // console.log('getting historical data effect')
  //   dispatch(getRedshiftDataMonthly())
  // },[])
  // useEffect(() => {
  //   console.log('getting historical data effect')
  //   dispatch(getRedshiftDataFireSeason())
  // },[])
  useEffect(()=>{
		console.log('redshiftData state changed fire season', dataState)
		if(redshiftData && redshiftData.fire_season){
			dispatch(addDataToMap({
				datasets: {
			  	info: {
			    	label: 'historical fire_season data',
			    	id: 'historical_fire_season'
			   	},
			  	data: redshiftData.fire_season
				},
				config: {
          // mapStyle: 'nanbette',
          visState: {
            // filters: [],
            // layerBlending: "normal",
            layers: [singleFireSeason],
            filters: [filterSettings]
          }
      	}
			}))
		}
	},[redshiftData.fire_season])
	return (
		<KeplerGl
			id='kepler-map'
			width={width}
			height={height}
			mapboxApiAccessToken={`pk.eyJ1IjoicnRpcHBldHRzIiwiYSI6ImNra3liYXd2bzAyNnYybnBhYmxyeGI0cDMifQ.pWTRm3Z4hur3TLuv9Da25g`}
			mapStyles = {mapStylesz}
		/>
	)
}