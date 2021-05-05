import { makeDatesInRange } from './makeDateArrays'

export const makeClimoDates = (data) => {
	if(data.stnDateRange && data.stnDateRange.data && data.stnDateRange.fieldOrder){
		const stnRanges = data.stnDateRange.data
		const fields = data.stnDateRange.fieldOrder
		const minDate = stnRanges[0][0]['stringValue']
		const maxDate = stnRanges[0][1]['stringValue']
		// console.log('data', data)
		// console.log('arays', makeDatesInRange(minDate, maxDate))
		const dateInfo = makeDatesInRange(minDate, maxDate) 
		const avgForChart = doyToDate(data.stnAvg, minDate, maxDate, dateInfo.yearArray )
		const maxForChart = doyToDate(data.stnMax, minDate, maxDate, dateInfo.yearArray )
		const minForChart = doyToDate(data.stnMin, minDate, maxDate, dateInfo.yearArray )
		return {maxForChart, minForChart, avgForChart}
	}
	else{
		console.log('no date range data thats a problem')
		return 'error in making data for climmo'
	}
}

function doyToDate(data, minDate, maxDate, yearArray){
	const dataWithKeys = []
	const indiceData = data.data
	// console.log('indiceData', data)
	const fieldOrder = data.fieldOrder
	const chartData = []
	indiceData.map(currRow=>{
		const pushObj = {}
		currRow.map((curr,i) => {
			const currKey = Object.keys(curr)[0]
			const fieldName = fieldOrder[i]
			pushObj[fieldName] = curr[currKey]
		})

		dataWithKeys.push(pushObj)
	})
	// console.log('dataWithKeys', dataWithKeys)
	// const year = 2018
	yearArray.map(currYear => {
		dataWithKeys.map(currDoy => {
			// console.log()
			const lastDoy = leapYear(currYear) ? 366 : 365
			if(currDoy.doy <= lastDoy){
				const currDate = dateFromDay(currYear, currDoy.doy)
				if( new Date(currDate) >= new Date(minDate) && new Date(currDate) <= new Date(maxDate)){
					// chartData.push({x: new Date(currDate.getFullYear, currDate.getDate, currDate.getMonth + 1), y:  parseFloat(currDoy.ec)})
					chartData.push({x: new Date(currDate), y:  parseFloat(currDoy.ec)})
				}
				// console.log(currDate, minDate, maxDate, new Date(currDate) >= new Date(minDate), new Date(currDate) <= new Date(maxDate))
			}
		})
	})
	
	return chartData
}
function dateFromDay(year, day){
  var date = new Date(year, 0); // initialize a date in `year-01-01`
  return new Date(date.setDate(day)).toISOString(); // add the number of days
}

function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
// function makeDatesInRange(minDate,maxDate){
// 	const firstYear = new Date(minDate).getFullYear()
// 	const lastYear = new Date(maxDate).getFullYear()
// 	var year = firstYear
// 	const yearArray = []
// 	var dateRangeArray = []

// 	while(year<=lastYear){
// 		yearArray.push(year)
// 		year ++
// 	}

// 	var date = new Date(minDate).toISOString()
// 	var maxDate1 = new Date(maxDate).toISOString()
// 	// console.log(new Date(minDate).toISOString() < new Date(maxDate).toISOString())
// 	// var addedDate = addDays(date, 1)
// 	// console.log('date', date, 'addedDate', addedDate, new Date(date).toISOString() < new Date(addedDate).toISOString())
// 	while(new Date(date).toISOString() <= new Date(maxDate1).toISOString()){
// 		// console.log('date', date, maxDate1)
// 		// dateRangeArray.push(new Date(date).toISOString())
// 		dateRangeArray.push(`${new Date(date).getMonth()}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`)
// 		date = addDays(date, 1)
// 		// console.log('date `', date, date<maxDate1)

// 	}

// 	return {dateRangeArray, yearArray}
// }

// function addDays(date, days) {
//   var copy = new Date(date)
//   copy.setDate(copy.getDate() + days)
//   // console.log('copy', copy.toISOString())
//   return copy
// }

// const info = makeDatesInRange('2018-06-19', '2021-04-19')
// console.log('info', info)