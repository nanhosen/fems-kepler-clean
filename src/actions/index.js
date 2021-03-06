import axios from 'axios'
import { readString, readRemoteFile } from 'react-papaparse'
import { processCsvData, getFieldsFromData } from 'kepler.gl/processors';
import { RedshiftDataClient, ExecuteStatementCommand, DescribeStatementCommand, DescribeTableCommand, ListTablesCommand, ListStatementsCommand, GetStatementResultCommand } from "@aws-sdk/client-redshift-data"
import { jsonToCSV } from 'react-papaparse'
import { fetchRetry } from '../utils/fetchRetry.js'
import { requestAndReturnRedshift } from '../utils/requestAndReturnRedshift.js' 

const { REACT_APP_ACCESSKEYID, REACT_APP_SECRETACCESSKEY } = process.env

 
// redshift-cluster-1.crowqc8szjr0.us-east-2.redshift.amazonaws.com:5439/nfdrs

export function selectedData(selection){
	return async function(dispatch){
		try{
			// console.log('i am going to get redshift data someday')
			// const data = await requestRedshift('onemonth_erc_percentiles')
	
			dispatch({
        type: "SELECTION_CHANGE",
        data: {...selection}
      })
		}
		catch(e){
			console.log('selected data error', e)
		}

	}
}

const fetchStnHistory = async(stnId) => {
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
			// setStnFireSeasonHistoryData({data: redshiftReturnFireSeason.data, fieldOrder: redshiftReturnFireSeason.fieldOrder})
			// setStnClimoData({ stnAvg, stnMax, stnMin, stnDateRange })
			// console.log('data', data, 'fieldOrder', fieldOrder)
			return {data: redshiftReturnFireSeason.data, fieldOrder: redshiftReturnFireSeason.fieldOrder, stnAvg, stnMax, stnMin, stnDateRange}
		}
const requestRedshift = async(dbName, model) =>{
	try{
			const date1 = '2021-01-01'
	    const date2 = '2021-04-27'
	    const requestModel = model ? model : 'Y'
			const fireSeasonSql = `SELECT fire_season_rank_percentiles.wims_id, to_timestamp(fire_season_rank_percentiles.nfdr_dt, 'YYYY/MM/DD HH24:MI:SS') as date, fire_season_rank_percentiles.nfdr_type,  fire_season_rank_percentiles.msgc,   fire_season_rank_percentiles.ec,  fire_season_rank_percentiles.percentile_rank, fire_season_rank_percentiles.percentile_rank * 100 as scaled_rank, stn_metadata.latitude as latitude, stn_metadata.longitude as longitude, stn_metadata.sta_nm as sta_nm FROM fire_season_rank_percentiles INNER JOIN stn_metadata on fire_season_rank_percentiles.wims_id = stn_metadata.wims_id where nfdr_dt between '${date1}' and '${date2}' and fire_season_rank_percentiles.msgc LIKE '16${requestModel}%'`
			const monthlySql = `select sta_id, sta_nm, latitude, longitude, to_timestamp(nfdr_dt, 'YYYY/MM/DD HH24:MI:SS') as date, nfdr_dt, nfdr_type, msgc, ec, rank, rank * 100 as scaled_rank from public.${dbName} where nfdr_dt between '${date1}' and '${date2}' order by sta_id asc, msgc asc, nfdr_dt desc`
			
			const dbParams = {
				onemonth_erc_percentiles: {
					idName: 'sta_id',
					query: monthlySql
				},
				fire_season_rank_percentiles: {
					idName: 'wims_id',
					query: fireSeasonSql
				}
			}
			console.log('i am going to get redshift data someday')
			const client = new RedshiftDataClient({
        user: 'nanhosen',
        host: 'redshift-cluster-1.crowqc8szjr0.us-east-2.redshift.amazonaws.com',
        database: 'nfdrs',
        password: 'Pray4sno.',
        port: 5439,
        region: 'us-east-2',
        credentials: {
        	accessKeyId: REACT_APP_ACCESSKEYID,
        	secretAccessKey: REACT_APP_SECRETACCESSKEY
        }
      })
	    // console.log('client', client)

	    const statementName = `that is dumb ${new Date().getTime()}${new Date().getMilliseconds()}`
	    
			const paramsExecute = {
			   "ClusterIdentifier": "redshift-cluster-1",
			   "Database": "nfdrs",
			   "DbUser": "nanhosen", 
			   // "Sql": `select sta_id, sta_nm, latitude, longitude, to_timestamp(nfdr_dt, 'YYYY/MM/DD HH24:MI:SS') as date, nfdr_dt, nfdr_type, msgc, ec, rank, rank * 100 as scaled_rank from public.onemonth_erc_percentiles where nfdr_dt between '${date1}' and '${date2}' order by sta_id asc, msgc asc, nfdr_dt desc`,
			   // "Sql": `select ${dbParams["fire_season_rank_percentiles"]["idName"]}, sta_nm, latitude, longitude, to_timestamp(nfdr_dt, 'YYYY/MM/DD HH24:MI:SS') as date, nfdr_dt, nfdr_type, msgc, ec, rank, rank * 100 as scaled_rank from public.${dbName} where nfdr_dt between '${date1}' and '${date2}' order by sta_id asc, msgc asc, nfdr_dt desc`,
			   "Sql": dbParams[dbName]['query'],
			   "StatementName": statementName
			}
			console.log('this is the query sql', paramsExecute.Sql)
			const commandExecute = new ExecuteStatementCommand(paramsExecute);
			console.log('going to send command')
			const respExecute = await client.send(commandExecute)
			console.log('respExecute', respExecute)
			console.log('respExecute id', respExecute.Id)
			const listStatementsCommand = new ListStatementsCommand({})
			const sendListCommand = await client.send(listStatementsCommand)
			console.log('sendListCommand', sendListCommand)
			const resultMetadata = sendListCommand && sendListCommand.Statements && sendListCommand.Statements.filter && sendListCommand.Statements.filter.length> 0 ? sendListCommand.Statements.filter(currStatement => 
				currStatement.StatementName = statementName
			) : null
			const oneIWantId = resultMetadata && resultMetadata.length > 0 ? resultMetadata[0].Id : null
			// const queryId  = respExecute.Id
			// const oneIWantId = respExecute.Id
			const describeStatementResult = await client.send(new DescribeStatementCommand({Id: respExecute.Id}))
			console.log('about to retry')
			const fetchRetryResult = await fetchRetry(client, DescribeStatementCommand, {Id: respExecute.Id}, 5, 300, 'actions index')
			console.log('fetchRetry', fetchRetryResult)

			console.log('desscribeStatementResultttt', describeStatementResult)
			// console.log('oneIWantId', oneIWantId, 'queryId', queryId)
			const getResultCommand = new GetStatementResultCommand({Id: respExecute.Id})
			const sendResultCommand = await client.send(getResultCommand)
			const fieldOrder = sendResultCommand && sendResultCommand.ColumnMetadata && sendResultCommand.ColumnMetadata.length > 0 ?
				sendResultCommand.ColumnMetadata.map(curr => curr.label) : null
			const data = sendResultCommand.Records
			const newAr = []
			data.map(currRow=>{
				const pushObj = {}
				currRow.map((curr,i) => {
					const currKey = Object.keys(curr)[0]
					const fieldName = fieldOrder[i]
					pushObj[fieldName] = curr[currKey]
				})

				newAr.push(pushObj)

			})
			const toCSV = jsonToCSV(newAr)
			const formattedData = processCsvData(toCSV)
			return formattedData
		}
		catch(e){
			console.log('get redshift data error', dbName, e)
			return e
		}
}

export function getRedshiftDataMonthly(){
	return async function(dispatch){
		try{
			console.log('i am going to get redshift data someday')
			const data = await requestRedshift('onemonth_erc_percentiles')
	
			dispatch({
        type: "GET_REDSHIFT_DATA_MONTHLY",
        data: data
      })
		}
		catch(e){
			console.log('get redshift data error', e)
		}

	}
}

const formatRedshiftData = (dataObj)=>{
	const data = dataObj.data
	console.log('dataObj dataObj', dataObj)
	const fieldOrder = dataObj.fieldOrder
	const newAr = []
			data.map(currRow=>{
				const pushObj = {}
				currRow.map((curr,i) => {
					const currKey = Object.keys(curr)[0]
					const fieldName = fieldOrder[i]
					pushObj[fieldName] = curr[currKey]
				})

				newAr.push(pushObj)

			})
			const toCSV = jsonToCSV(newAr)
			const formattedData = processCsvData(toCSV)
			return formattedData
}


export function getRedshiftDataFireSeason(model){
	// return async function(dispatch){
	// 	try{
	// 		console.log('i am going to get redshift data someday')
	// 		const data = await requestRedshift('fire_season_rank_percentiles', model)
	
	// 		dispatch({
 //        type: "GET_REDSHIFT_DATA_FIRE_SEASON",
 //        data: data
 //      })
	// 	}
	// 	catch(e){
	// 		console.log('get redshift data error', e)
	// 	}

	// }
		const fuelModel = model ? model : null
		return async function(dispatch){
		try{
			if(fuelModel){
				const date1 = '2021-01-01'
		    const date2 = '2021-04-25'
				console.log('i am going to get redshift data someday')
				// const data = await requestRedshift('fire_season_rank_percentiles')
				// const fireSeasonMySql  = `SELECT fire_season_rank_percentiles.wims_id, to_timestamp(fire_season_rank_percentiles.nfdr_dt, 'YYYY/MM/DD HH24:MI:SS') as date, fire_season_rank_percentiles.nfdr_type,  fire_season_rank_percentiles.msgc,   fire_season_rank_percentiles.ec,  fire_season_rank_percentiles.percentile_rank, fire_season_rank_percentiles.percentile_rank * 100 as scaled_rank, stn_metadata.latitude as latitude, stn_metadata.longitude as longitude, stn_metadata.sta_nm as sta_nm FROM fire_season_rank_percentiles INNER JOIN stn_metadata on fire_season_rank_percentiles.wims_id = stn_metadata.wims_id where nfdr_dt between '${date1}' and '${date2}'`
				const fireSeasonMySql  = `SELECT fire_season_rank_percentiles_allmodels.wims_id, to_timestamp(fire_season_rank_percentiles_allmodels.nfdr_dt, 'YYYY/MM/DD HH24:MI:SS') as date, fire_season_rank_percentiles_allmodels.nfdr_type,  fire_season_rank_percentiles_allmodels.msgc,   fire_season_rank_percentiles_allmodels.ec,  fire_season_rank_percentiles_allmodels.percentile_rank, fire_season_rank_percentiles_allmodels.percentile_rank * 100 as scaled_rank, stn_metadata.latitude as latitude, stn_metadata.longitude as longitude, stn_metadata.sta_nm as sta_nm FROM fire_season_rank_percentiles_allmodels INNER JOIN stn_metadata on fire_season_rank_percentiles_allmodels.wims_id = stn_metadata.wims_id where nfdr_dt between '${date1}' and '${date2}' and msgc like '16${fuelModel}%'`
				console.log('this is the fire season sql request', fireSeasonMySql)
				const fireSeasonData = await requestAndReturnRedshift(fireSeasonMySql,'all stn fire season')
				console.log('fireSeasonData', fireSeasonData)
				const data = formatRedshiftData(fireSeasonData)
		
				dispatch({
	        type: "GET_REDSHIFT_DATA_FIRE_SEASON",
	        data: data
	      })
			}
			else{
				console.log('no fuel model selected')
			}
			
		}
		catch(e){
			console.log('get redshift data error', e)
		}

	}
}

export function getLatestData(){
	return async function(dispatch){
		const returnObj = {}
		console.log('this is the get latest data action hiiiiiiiiiiiii')
		// const formatInfo = {
		// 	sta_id: {fieldInfo: {format: '', type: 'real'}},
		// 	sta_nm: {fieldInfo: {format: '', type: 'real'}},
		// 	latitude: {processFn: inString => parseFloat(inString), fieldInfo: {format: '', type: 'real'}},
		// 	longitude: {processFn: inString => parseFloat(inString), fieldInfo: {format: '', type: 'real'}},
		// 	nfdr_dt: {fieldInfo: {format: '', type: 'real'}},
		// 	nfdr_tm: {processFn: inString => parseFloat(inString), fieldInfo: {format: '', type: 'real'}},
		// 	nfdr_type: {fieldInfo: {format: '', type: 'real'}},
		// 	msgc: {fieldInfo: {format: '', type: 'real'}},
		// 	ec: {processFn: inString => parseFloat(inString), fieldInfo: {format: '', type: 'real'}},
		// 	rank: {processFn: inString => parseFloat(inString), fieldInfo: {format: '', type: 'real'}},
		// 	percentile_100: {processFn: inString => parseFloat(inString), fieldInfo: {format: '', type: 'real'}},
		// 	percentile_97: {processFn: inString => parseFloat(inString), fieldInfo: {format: '', type: 'real'}},
		// 	percentile_90: {processFn: inString => parseFloat(inString), fieldInfo: {format: '', type: 'real'}},
		// 	percentile_80: {processFn: inString => parseFloat(inString), fieldInfo: {format: '', type: 'real'}},
		// 	percentile_70: {processFn: inString => parseFloat(inString), fieldInfo: {format: '', type: 'real'}},
		// 	percentile_60: {processFn: inString => parseFloat(inString), fieldInfo: {format: '', type: 'real'}},
		// 	percentile_50: {processFn: inString => parseFloat(inString), fieldInfo: {format: '', type: 'real'}},
		// 	week: {processFn: inString => parseFloat(inString), fieldInfo: {format: '', type: 'real'}}
		// }
		try{
			const fireSeasonData = await axios.get('https://redshift-unload-nanette.s3.us-east-2.amazonaws.com/fireSeasonMostRecent.csv')
			const monthlyData = await axios.get('https://redshift-unload-nanette.s3.us-east-2.amazonaws.com/oneMonthMostRecent.csv')
			// const streamTest = await readRemoteFile('https://redshift-unload-nanette.s3.us-east-2.amazonaws.com/oneMonthMostRecent.csv', {
			// 	step: (row) => {
			// 		console.log('Row', row.data)
			// 	},
			// 	complete: () => {
			// 		console.log('all done with stream tesst')
			// 	}
			// })
			const keplerData = { fields: [], rows: []}
			const dataObj = {fireSeason: null, monthly: null}
			if (fireSeasonData.data){
				dataObj.fireSeason =  processCsvData(fireSeasonData.data)
			}
			if(monthlyData.data){
				dataObj.monthly = processCsvData(monthlyData.data)
				// console.log('monthlyKeplerProcessed', monthlyKeplerProcessed)
				// const monthlyDataProcessed = readString(monthlyData.data)
				// monthlyDataProcessed.data[0].map((currIndice, i) => {
				// 	// console.log(formatInfo[currIndice], i, currIndice)
				// 	formatInfo[currIndice]['position'] = i
				// 	if(formatInfo[currIndice].fieldInfo){
				// 		keplerData.fields.push({name: currIndice, ...formatInfo[currIndice].fieldInfo})
				// 	}
				// })
				// monthlyDataProcessed.data.map((currRow, currInd) => {
				// 	const returnAr = []
				// 	currRow.map((currIndice, i) => {
				// 		const indiceType = monthlyDataProcessed.data[0][i] ? monthlyDataProcessed.data[0][i] : undefined
				// 		const indiceInfo = indiceType && formatInfo[indiceType] ? formatInfo[indiceType] : undefined
				// 		if (indiceInfo){
				// 			const pushData = indiceInfo.processFn ? indiceInfo.processFn(currIndice) : currIndice
				// 			returnAr.push(pushData)
				// 		}
				// 		// formatInfo[currIndice].processFn ? processFn()
				// 	})
				// 	if(returnAr.length > 0 && currInd !== 0 ){
				// 		keplerData.rows.push(returnAr)
				// 	}
				// 	// console.log('curr', curr)
				// })
			}
			// // monthlyData.data.map((curr, i) => {

			// })

			// console.log('dataObj', dataObj)
			dispatch({
        type: "GET_LATEST_DATA",
        data: {...dataObj}
      })
		}
		catch(e){
			console.log(e)
			returnObj.error = JSON.stringify(e)
		}
		finally{
			// console.log('returnObj', returnObj)
			
		}
	}
}
