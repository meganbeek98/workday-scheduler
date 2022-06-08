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

$("#9").siblings("textarea").val(localStorage.getItem("nine"))
$("#10").siblings("textarea").val(localStorage.getItem("ten"))
$("#11").siblings("textarea").val(localStorage.getItem("eleven"))
$("#12").siblings("textarea").val(localStorage.getItem("twelve"))
$("#1").siblings("textarea").val(localStorage.getItem("one"))
$("#2").siblings("textarea").val(localStorage.getItem("two"))
$("#3").siblings("textarea").val(localStorage.getItem("three"))
$("#4").siblings("textarea").val(localStorage.getItem("four"))
$("#5").siblings("textarea").val(localStorage.getItem("five"))

    var hourCurrent = moment().hour();

    $(".middleCol").each(function(){
        checkHour = $(this).siblings("timeBox").attr("id")

            if(checkHour === hourCurrent){
                $(this).css("background-color","red")
            }
            else if(checkHour < hourCurrent){
                $(this).css("background-color","lightgray")
            }
            else if(checkHour > hourCurrent){
                $(this).css("background-color","green")
            }

    });




