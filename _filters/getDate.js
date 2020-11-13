/**
 * A simple date formatter
 * @param {String} date The date we want to convert to our formatting rule
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

  return month[currentDate.getMonth()] + " " + currentDate.getDate() + (ordinal[currentDate.getDate()] || "th") + ", " + currentDate.getUTCFullYear();
}
