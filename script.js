// display surrent time 
// slick evenet to save text area content to local storage
// when app opens display content for each block from local storage


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


var currentHour = moment().hour();


$(".text").each(function(){
    var hour = $(this).attr("data-value");

    if (hour == currentHour){
        $(this).addClass("present")
    }
    else if (hour > currentHour){
        $(this).addClass("future")
    }
    else {
        $(this).addClass("past")
    }
})