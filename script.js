var dateDisplay = function(){
    var dateCurrent = moment().format("dddd, MMMM Do YYYY")
    var dayEl = document.getElementById(dayCurrent)
    dayEl.append(dateCurrent)  
}