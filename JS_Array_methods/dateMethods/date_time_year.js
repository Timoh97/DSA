// get date

getDate () // The getDate() method returns the day of the month (1 to 31) of a date
var d = new Date();
let date = d.getDate();

getDay() // The getDay() method returns the day of the week (0 to 6) of a date.
const d = new Date();
let day = d.getDay();

getFullyear () // getFullYear() returns the full year (4 digits) of a date.
const d = new Date();
let year = d.getFullyear ();

getHours () //  getHours() returns the hour (0 to 23) of a date.
const d = new Date();
let hours = d.getHours ()

getMinutes() // getMinutes() returns the minutes (0 to 59) of a date.
const d = new Date();
let minutes = d.getMinutes() 

getMilliseconds () // getMilliseconds() returns the milliseconds (0 to 999) of a dat
const d = new Date();
let milliseconds = d.getMilliseconds () 

getSeconds () // getSeconds() returns the seconds (0 to 59) of a date
const d = new Date();
let seconds = d.getSeconds ()

getMonth () // getMonth() returns the month (0 to 11) of a date
const d = new Date();
let month = d.getMonth () 

getTime () // getTime() returns the number of milliseconds since January 1, 1970 00:00:00.
const d = new Date();
let time = d.getTime ();

getUTCDate () // getUTCDate() returns the day of the month (1 to 31) of a date object
const d = new Date();
let utcdate = d.getUTCDate ();


// set date and time
// Set the day of the month to the last day of the previous month
const d = new Date();
d.setDate(15);


setFullYear() //sets the year of a date.
setFullYear() //can also set month and day.
const d = new Date();
d.setFullYear(2020);

//or 
const d = new Date();
d.setFullYear(2020, 10, 3);


setHours() // sets the hour of a date.
setHours() // can also set minutes, seconds and milliseconds.
const d = new Date();
d.setHours(15, 35, 1);

setMilliseconds() //sets the milliseconds of a date.
const d = new Date();
d.setMilliseconds(192);

setMinutes() // sets the minutes of a date.
const d = new Date();
d.setMinutes(d.getMinutes() - 90); //Set the date time to be 90 minutes ago:

// Set the month to 4 (May):
const d = new Date();
d.setMonth(4);

// Set the seconds to 35:
const d = new Date();
d.setSeconds(35);

//Add 1332403882588 milliseconds to January 1, 1970:
const d = new Date();
d.setTime(1332403882588);

// Set the day of the month, according to UTC:
const d = new Date();
d.setUTCDate(15);


