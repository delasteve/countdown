var millisecondConversions = {
  week: 604800000,
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  second: 1000
};

var graduationDate = new Date(2013, 11, 13, 18, 30, 0, 0); 

function calculateTotalTimeUntilGraduation(timeUntilGraduation) {
  var total = {
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  total.weeks = Math.floor(timeUntilGraduation / millisecondConversions.week);
  timeUntilGraduation %= millisecondConversions.week;

  total.days = Math.floor(timeUntilGraduation / millisecondConversions.day);
  timeUntilGraduation %= millisecondConversions.day;
  
  total.hours = Math.floor(timeUntilGraduation / millisecondConversions.hour);
  timeUntilGraduation %= millisecondConversions.hour;
  
  total.minutes = Math.floor(timeUntilGraduation / millisecondConversions.minute);
  timeUntilGraduation %= millisecondConversions.minute;

  total.seconds = Math.floor(timeUntilGraduation / millisecondConversions.second);

  return total;
}

function calculateTimeUntilGraduation(timeUntilGraduation, timeDivisor) {
  return Math.floor(timeUntilGraduation / timeDivisor);
}

function init() {        
  var today = new Date();
  
  var timeUntilGraduation = (graduationDate - today);
 
  if (timeUntilGraduation > 0) {
    var totalTimeUntilGraduation = calculateTotalTimeUntilGraduation(timeUntilGraduation);
    var totalText = totalTimeUntilGraduation.weeks + ' weeks, ' + 
                    totalTimeUntilGraduation.days + ' days, ' + 
                    totalTimeUntilGraduation.hours + ' hours, ' + 
                    totalTimeUntilGraduation.minutes + ' minutes, ' + 
                    totalTimeUntilGraduation.seconds + ' seconds';

    var weeksUntilGraduation = calculateTimeUntilGraduation(timeUntilGraduation, millisecondConversions.week);
    var daysUntilGraduation = calculateTimeUntilGraduation(timeUntilGraduation, millisecondConversions.day);
    var minutesUntilGraduation = calculateTimeUntilGraduation(timeUntilGraduation, millisecondConversions.minute);
    var secondsUntilGraduation = calculateTimeUntilGraduation(timeUntilGraduation, millisecondConversions.second);

    $('#total').text(totalText);
    $('#weeks').text(weeksUntilGraduation);
    $('#days').text(daysUntilGraduation);
    $('#minutes').text(minutesUntilGraduation);
    $('#seconds').text(secondsUntilGraduation);
  } else {
    $('.container').html('<h1>CONGRATULATIONS! YOU GRADUATED!</h1>');
  }
};

$(document).ready(function () {
  init();
});

setInterval(init, 1000);
