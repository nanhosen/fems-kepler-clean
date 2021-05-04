export const fetchRetry = async(client, command, options = {}, retries = 5, backoff = 500, source = 'unknown') => {
  console.log('in fetch retry !!!!!!! from: ', source)
  try{
    const inputCommand = command
    const inputClient = client
    const inputOptions = options
    const inputBackoff = backoff
    const result = await client.send(new command(options))
    if(result.Status == 'FINISHED'){
      console.log('funtion result is finished', result)
      return 'success'
    }
    else if(result.Status == 'STARTED'){
      console.log('it is started', 'retries', retries)
      if (retries > 0) {
        setTimeout(() => {
          /* 2 */
          console.log('requesting again')
          return fetchRetry(inputClient, inputCommand, retries - 1, inputBackoff * 2) /* 3 */
        }, backoff)
      // return 'stratd'
      }
    }
    else{
      console.log('neither started or finished', result)
      return 'weird'
    }
    console.log('funtion result', result)
  }
  catch(e){
    return e
  }
}