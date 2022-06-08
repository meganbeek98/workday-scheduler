var dateDisplay = function(){
    var dateCurrent = moment().format("dddd, MMMM Do YYYY")
    var dayEl = document.getElementById(dayCurrent)
    dayEl.append(dateCurrent)  
}

$("button").on("click", function(){
    var task = $(this).siblings("textarea").val()
    console.log(task)

    var taskTime = $(this).siblings(".timebox").attr("id")
    console.log(taskTime)

    localStorage.setItem(taskTime, task)

    window.alert("Your Task is SAVED to your Scheduler!")
})