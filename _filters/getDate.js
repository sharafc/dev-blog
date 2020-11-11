/*
    A simple date formatter
*/
module.exports = function(date) {
  var currentDate = new Date(date);

  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var ordinal = {
    1 : "st",
    2 : "nd",
    3 : "rd",
    21 : "st",
    22 : "nd",
    23 : "rd",
    31 : "st"
  };
  console.info('dateparam:' + date);
  return month[currentDate.getMonth()] + " " + currentDate.getDate() + (ordinal[currentDate.getDate()] || "th") + ", " + currentDate.getUTCFullYear();
}
