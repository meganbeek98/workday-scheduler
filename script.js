var dateDisplay = function(){
    var dateCurrent = moment().format('dddd, MMMM Do YYYY')
    var dayEl = document.getElementById(dayCurrent)
    dayEl.append(dateCurrent)
}

window.addEventListener('load', dateDisplay)

$("button").on("click", function(){
    var task = $(this).siblings("textarea").val()
    console.log(task)

    var taskTime = $(this).siblings(".time-block").attr("id")
    console.log(taskTime)

    localStorage.setItem(taskTime, task)

    window.alert("Your Task is SAVED to your Scheduler!")
})

$("#nine").siblings("textarea").val(localStorage.getItem("nine"))
$("#ten").siblings("textarea").val(localStorage.getItem("ten"))
$("#eleven").siblings("textarea").val(localStorage.getItem("eleven"))
$("#twelve").siblings("textarea").val(localStorage.getItem("twelve"))
$("#one").siblings("textarea").val(localStorage.getItem("one"))
$("#two").siblings("textarea").val(localStorage.getItem("two"))
$("#three").siblings("textarea").val(localStorage.getItem("three"))
$("#four").siblings("textarea").val(localStorage.getItem("four"))
$("#five").siblings("textarea").val(localStorage.getItem("five"))

    var hourCurrent = moment().hour();

    $(".middleCol").each(function(){
        checkHour = $(this).siblings(".time-block").attr("id")

            if(checkHour == hourCurrent){
                $(this).css("background-color","red")
            }
            else if(checkHour < hourCurrent){
                $(this).css("background-color","lightgray")
            }
            else if(checkHour > hourCurrent){
                $(this).css("background-color","green")
            }

    });