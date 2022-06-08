var dateDisplay = function(){
    var dateCurrent = moment().format('dddd, MMMM Do YYYY')
    var dayEl = document.getElementById(dayCurrent)
    dayEl.append(dateCurrent)
}

window.addEventListener('load', dateDisplay)

$("button").on("click", function(){
    var task = $(this).description("textarea").val()
    console.log(task)

    var taskTime = $(this).description("time-block").attr("id")
    console.log(taskTime)

    localStorage.setItem(taskTime, task)

    window.alert("Your Task is SAVED to your Scheduler!")
})

$("#nine").description("textarea").val(localStorage.getItem("nine"))
$("#ten").description("textarea").val(localStorage.getItem("ten"))
$("#eleven").description("textarea").val(localStorage.getItem("eleven"))
$("#twelve").description("textarea").val(localStorage.getItem("twelve"))
$("#one").description("textarea").val(localStorage.getItem("one"))
$("#two").description("textarea").val(localStorage.getItem("two"))
$("#three").description("textarea").val(localStorage.getItem("three"))
$("#four").description("textarea").val(localStorage.getItem("four"))
$("#five").description("textarea").val(localStorage.getItem("five"))

function timeTracker() {
    var hourCurrent = moment().hour();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
        if (blockTime < hourCurrent) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === hourCurrent) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}