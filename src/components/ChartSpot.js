import styled, { css } from "styled-components";
import React, { useEffect, useState } from "react";
import {  useSelector } from 'react-redux'
import { requestAndReturnRedshift } from '../utils/requestAndReturnRedshift.js' 
import ChartComponent from './ChartComponent'

const ChartSpot = (props) => {
	const [model, setModel] = useState()
	const [stn, setStn] = useState()
	const [stnFireSeasonHistoryData, setStnFireSeasonHistoryData] = useState()
	const [stnClimoData, setStnClimoData] = useState()
	console.log('chart spot props', props)
	// useEffect(() => {
	// 	if(appState.selectedData && appState.selectedData.selected && appState.selectedData.selected.model){
	// 		console.log('selected data model from chartspot', appState.selectedData)
	// 		setModel(appState.selectedData.selected.model)
	// 	}
	// },[appState.selectedData])
	// useEffect(() => {
	// 	console.log('chart apstate', appState)
	// },[appState])

	useEffect(() =>{
		console.log('effect in chart', window, window.localStorage.model)
		setModel(window.localStorage.model)
	},[window.localStorage.model])
	useEffect(() =>{
		console.log('effect in chart stn', window, window.localStorage.stn)
		setStn(window.localStorage.stn)
	},[window.localStorage.stn])

	useEffect(() => {
		async function fetchStnHistory(stnId){
			const date1 = '2018-01-01'
	    const date2 = '2021-04-18'
			const fireSeasonSql = `SELECT fire_season_rank_percentiles.wims_id,  to_timestamp(fire_season_rank_percentiles.nfdr_dt, 'YYYY/MM/DD HH24:MI:SS') as date, fire_season_rank_percentiles.nfdr_type,  fire_season_rank_percentiles.msgc,   fire_season_rank_percentiles.ec,  fire_season_rank_percentiles.percentile_rank, fire_season_rank_percentiles.percentile_rank * 100 as scaled_rank, stn_metadata.latitude as latitude, stn_metadata.longitude as longitude, stn_metadata.sta_nm as sta_nm FROM fire_season_rank_percentiles INNER JOIN stn_metadata on fire_season_rank_percentiles.wims_id = stn_metadata.wims_id where nfdr_dt between '${date1}' and '${date2}' and fire_season_rank_percentiles.wims_id = ${stnId} order by fire_season_rank_percentiles.nfdr_dt`
			const avgDataSql = `select doy, ec from public.avg_nfdrs where wims_id = ${stnId} AND nfdr_type = 'N' AND msgc LIKE '16Y%' order by doy asc`
			const maxDataSql = `select doy, ec from public.max_nfdrs where wims_id = ${stnId} AND nfdr_type = 'N' AND msgc LIKE '16Y%' order by doy asc`
			const minDataSql = `select doy, ec from public.min_nfdrs where wims_id = ${stnId} AND nfdr_type = 'N' AND msgc LIKE '16Y%' order by doy asc`
			const dateRangeSql = `select min(allwims.nfdr_dt), max(allwims.nfdr_dt) from public.allwims where sta_id = ${stnId} AND nfdr_type = 'N' AND msgc LIKE '16Y%' `
			
			const redshiftReturnFireSeason = await requestAndReturnRedshift(fireSeasonSql)
			const stnAvg = await requestAndReturnRedshift(avgDataSql)
			const stnMax = await requestAndReturnRedshift(maxDataSql)
			const stnMin = await requestAndReturnRedshift(minDataSql)
			const stnDateRange = await requestAndReturnRedshift(dateRangeSql)
			// console.log('stnMax', stnMax)
			setStnFireSeasonHistoryData({data: redshiftReturnFireSeason.data, fieldOrder: redshiftReturnFireSeason.fieldOrder})
			setStnClimoData({ stnAvg, stnMax, stnMin, stnDateRange })
			// console.log('data', data, 'fieldOrder', fieldOrder)
		}
		if(stn){
			fetchStnHistory(stn)
		}
	},[stn])
	return (
		<>
			<ChartComponent data = { stnFireSeasonHistoryData } climoData = { stnClimoData } stn = { stn } model = { model } />
		</>	
	)
}

const SideDiv = styled.section`
	color:white;
	background:black;
	position: relative;

`

export default ChartSpot