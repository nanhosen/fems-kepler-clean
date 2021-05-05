

export const makeDatesInRange = (minDate,maxDate) => {
	const firstYear = new Date(minDate).getFullYear()
	const lastYear = new Date(maxDate).getFullYear()
	var year = firstYear
	const yearArray = []
	var dateRangeArray = []

	while(year<=lastYear){
		yearArray.push(year)
		year ++
	}

	var date = new Date(minDate).toISOString()
	var maxDate1 = new Date(maxDate).toISOString()
	// console.log(new Date(minDate).toISOString() < new Date(maxDate).toISOString())
	// var addedDate = addDays(date, 1)
	// console.log('date', date, 'addedDate', addedDate, new Date(date).toISOString() < new Date(addedDate).toISOString())
	while(new Date(date).toISOString() <= new Date(maxDate1).toISOString()){
		// console.log('date', date, maxDate1)
		// dateRangeArray.push(new Date(date).toISOString())
		dateRangeArray.push(`${new Date(date).getMonth()}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`)
		date = addDays(date, 1)
		// console.log('date `', date, date<maxDate1)

	}

	return {dateRangeArray, yearArray}
}

function addDays(date, days) {
  var copy = new Date(date)
  copy.setDate(copy.getDate() + days)
  // console.log('copy', copy.toISOString())
  return copy
}

// const info = makeDatesInRange('2018-06-19', '2021-04-19')
// console.log('info', info)