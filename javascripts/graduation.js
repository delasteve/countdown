var millisecondConversions = {
  week: 604800000,
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  second: 1000
};

var graduationDate = new Date(2013, 11, 17, 13, 20, 0, 0); 

function calculateDaysUntilGraduation(timeUntilGraduation) {
  var total = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  total.days = Math.floor(timeUntilGraduation / millisecondConversions.day);
  timeUntilGraduation %= millisecondConversions.day;
  
  total.hours = Math.floor(timeUntilGraduation / millisecondConversions.hour);
  timeUntilGraduation %= millisecondConversions.hour;
  
  total.minutes = Math.floor(timeUntilGraduation / millisecondConversions.minute);
  timeUntilGraduation %= millisecondConversions.minute;

  total.seconds = Math.floor(timeUntilGraduation / millisecondConversions.second);

  return total;
}

function calculateMinutesUntilGraduation(timeUntilGraduation) {
  var total = {
    minutes: 0,
    seconds: 0
  };

  total.minutes = Math.floor(timeUntilGraduation / millisecondConversions.minute);
  timeUntilGraduation %= millisecondConversions.minute;

  total.seconds = Math.floor(timeUntilGraduation / millisecondConversions.second);

  return total;
}

function calculateSecondsUntilGraduation(timeUntilGraduation) {
  return Math.floor(timeUntilGraduation / millisecondConversions.second);
}

function calculateTimeUntilGraduation() {        
  var today = new Date();
  
  var timeUntilGraduation = (graduationDate - today);
 
  if (timeUntilGraduation > 0) {
    var minutesUntilGraduation = calculateMinutesUntilGraduation(timeUntilGraduation);
    var secondsUntilGraduation = calculateSecondsUntilGraduation(timeUntilGraduation);

    var minutesToAdjust = Math.abs(graduationDate.getTimezoneOffset()) - Math.abs(today.getTimezoneOffset());
    today.setMinutes(today.getMinutes() + minutesToAdjust);

    var daysUntilGraduation = calculateDaysUntilGraduation(timeUntilGraduation);
    
    $('#days').text(daysUntilGraduation.days + ' days, ' + daysUntilGraduation.hours + ' hours, ' + daysUntilGraduation.minutes + ' minutes, ' + daysUntilGraduation.seconds + ' seconds');
    $('#minutes').text(minutesUntilGraduation.minutes + ' minutes, ' + minutesUntilGraduation.seconds + ' seconds');
    $('#seconds').text(secondsUntilGraduation + ' seconds');
  } else {
    $('#graduation').html('<h1>CONGRATULATIONS! YOU FUCKING GRADUATED!</h1>');
  }
};

$(document).ready(function () {
  calculateTimeUntilGraduation();
});

setInterval(calculateTimeUntilGraduation, 1000);
