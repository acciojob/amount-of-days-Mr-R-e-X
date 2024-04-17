//your JS code here. If required.
function daysOfAYear(year) {
	return isLeapYear(year) ? 366 : 365
}
function isLeapYear(year) {
	return year%400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

let year = promt("Enter a year")
if(Number(year)!== NaN){
	daysOfAYear(year);
}