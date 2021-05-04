import { RedshiftDataClient, ExecuteStatementCommand, DescribeStatementCommand, DescribeTableCommand, ListTablesCommand, ListStatementsCommand, GetStatementResultCommand } from "@aws-sdk/client-redshift-data"
import { fetchRetry } from '../utils/fetchRetry.js' 
const { REACT_APP_ACCESSKEYID, REACT_APP_SECRETACCESSKEY } = process.env


export const requestAndReturnRedshift = async(sqlStatement, source)=>{
	try{
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
    const statementName = `that is dumb ${new Date().getTime()}${new Date().getMilliseconds()}`
    if(source){
    	console.log('query source', source)
    }
    const paramsExecute = {
		   "ClusterIdentifier": "redshift-cluster-1",
		   "Database": "nfdrs",
		   "DbUser": "nanhosen", 
		   // "Sql": `select sta_id, sta_nm, latitude, longitude, to_timestamp(nfdr_dt, 'YYYY/MM/DD HH24:MI:SS') as date, nfdr_dt, nfdr_type, msgc, ec, rank, rank * 100 as scaled_rank from public.onemonth_erc_percentiles where nfdr_dt between '${date1}' and '${date2}' order by sta_id asc, msgc asc, nfdr_dt desc`,
		   // "Sql": `select ${dbParams["fire_season_rank_percentiles"]["idName"]}, sta_nm, latitude, longitude, to_timestamp(nfdr_dt, 'YYYY/MM/DD HH24:MI:SS') as date, nfdr_dt, nfdr_type, msgc, ec, rank, rank * 100 as scaled_rank from public.${dbName} where nfdr_dt between '${date1}' and '${date2}' order by sta_id asc, msgc asc, nfdr_dt desc`,
		   "Sql": sqlStatement,
		   // "Sql": dbParams[dbName]['query'],
		   "StatementName": statementName
		}
		const commandExecute = new ExecuteStatementCommand(paramsExecute);
		// console.log('going to send command', paramsExecute.Sql)
		const respExecute = await client.send(commandExecute)
		// console.log('source', source, 'respExecute', respExecute, respExecute.Id,'requestId', respExecute.$metadata.requestId )
		// const queryId  = respExecute.Id
		// const queryId  = "8e211f66-1dec-412b-bc3e-c7cdfc4b17b6"
		// fetchRetry(client, )
		// (client, command, options = {}, retries = 3, backoff = 300
		// const queryId  = '90b52749-d0d5-4b9b-a8cb-5875613f24ff'
		const actualQueryId   = respExecute.Id
		const otherQueryId = respExecute.$metadata.requestId
		const listStatementsCommand = new ListStatementsCommand({})
		// console.log('listStatementsCommand', listStatementsCommand)
		const sendListCommand = await client.send(listStatementsCommand)
		// console.log('source', source,'sendListCommand', sendListCommand)
		const resultMetadata = sendListCommand && sendListCommand.Statements && sendListCommand.Statements.filter && sendListCommand.Statements.filter.length> 0 ? sendListCommand.Statements.filter(currStatement => 
			currStatement.StatementName = statementName
		) : null
		// console.log('source', source,'resultMetadata', resultMetadata)
		// const oneIWantId = queryId
		const describeStatementResult = await client.send(new DescribeStatementCommand({Id: respExecute.Id}))
		// console.log('about to retry')
		const fetchRetryResult = await fetchRetry(client, DescribeStatementCommand, {Id: respExecute.Id}, 5, 300, source)
		// console.log('source', source,'fetchRetry result from chart spot', fetchRetryResult)

		// const oneIWantId = resultMetadata && resultMetadata.length > 0 ? resultMetadata[0].Id : null
		const getResultCommand = new GetStatementResultCommand({Id: actualQueryId})
		const sendResultCommand = await client.send(getResultCommand)
		// console.log('source', source,'sendResultCommand', sendResultCommand)
		const fieldOrder = sendResultCommand && sendResultCommand.ColumnMetadata && sendResultCommand.ColumnMetadata.length > 0 ?
			sendResultCommand.ColumnMetadata.map(curr => curr.label) : null
		const data = sendResultCommand.Records
		// setStnFireSeasonHistoryData({data, fieldOrder})
		// console.log('data', data, 'fieldOrder', fieldOrder)
		return {data, fieldOrder}
	}
	catch(e){
		console.log('error from get redshift dat function', e)
	}
}

