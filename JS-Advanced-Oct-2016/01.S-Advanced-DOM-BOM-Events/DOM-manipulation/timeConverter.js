function attachEventsListeners () {
  let daysValue = $('#days')
  let hoursValue = $('#hours')
  let minutesValue = $('#minutes')
  let secondsValue = $('#seconds')

  let hours = 0
  let days = 0
  let minutes = 0
  let seconds = 0
  $('#daysBtn').click(convertDays)
  $('#hoursBtn').click(convertHours)
  $('#minutesBtn').click(convertMinutes)
  $('#secondsBtn').click(converSeconds)

  function convertDays () {
    hours = +daysValue.val() * 24
    minutes = +hours * 60
    seconds = +minutes * 60
    hoursValue.val(hours)
    minutesValue.val(minutes)
    secondsValue.val(seconds)
  }
  function convertHours () {
    days = +hoursValue.val() / 24
    minutes = +hoursValue.val() * 60
    seconds = +minutes * 60
    daysValue.val(days)
    minutesValue.val(minutes)
    secondsValue.val(seconds)
  }
  function convertMinutes () {
    hours = +minutesValue.val() / 60
    days = +hours / 24
    seconds = +minutesValue.val() * 60

    daysValue.val(days)
    hoursValue.val(hours)
    secondsValue.val(seconds)
  }
  function converSeconds () {
    minutes = +secondsValue.val() / 60
    hours = +minutes / 60
    days = +hours / 24

    daysValue.val(days)
    hoursValue.val(hours)
    minutesValue.val(minutes)
  }
}
