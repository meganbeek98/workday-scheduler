var dateDisplay = function(){
    var dateCurrent = moment().format("dddd, MMMM Do YYYY")
    var dayEl = document.getElementById(dayCurrent)
    dayEl.append(dateCurrent)
}

window.addEventListener('load', dateDisplay)

$("button").on("click", function(){
    var task = $(this).siblings("textarea").val()
    console.log(task)

    var taskTime = $(this).siblings(".timebox").attr("id")
    console.log(taskTime)

    localStorage.setItem(taskTime, task)

    window.alert("Your Task is SAVED to your Scheduler!")
})

$("#9").siblings("textarea").val(localStorage.getItem(""))
$("#10").siblings("textarea").val(localStorage.getItem(""))
$("#11").siblings("textarea").val(localStorage.getItem(""))
$("#12").siblings("textarea").val(localStorage.getItem(""))
$("#1").siblings("textarea").val(localStorage.getItem(""))
$("#2").siblings("textarea").val(localStorage.getItem(""))
$("#3").siblings("textarea").val(localStorage.getItem(""))
$("#4").siblings("textarea").val(localStorage.getItem(""))
$("#5").siblings("textarea").val(localStorage.getItem(""))

