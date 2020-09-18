// display surrent time 
// slick evenet to save text area content to local storage
// when app opens display content for each block from local storage

$(document).ready(function () {

    init(); 

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    // var saveBtn = $("<button>")

    var currentHour = moment().hour();

    // Create  9 columns with 3 rows
    for (i = 9; i < 18; i++) {

        // create row for each hour
        var row = $("<div>");
        // first column
        var hour = $("<div>");
        // last column (button)
        var button = $("<button>");
        // middle column
        var textColumn = $("<form>");
        // icon
        var icon = $("<i>");

        // test*******************************************************************************
        var myForm = $("<textarea>");


        // add classes to each element created  and format row width
        row.addClass("row");
        hour.addClass("col-md-1 time-block hour");
        button.addClass("saveBtn col-md-1");
        textColumn.addClass("col-md-9 text");
        icon.addClass("fas fa-save");
        myForm.addClass("plan");


        // add value of hour in military time to the row
        row.attr("data-value", i);
        // add value of hour to the text content area to compare against current time
        textColumn.attr("data-value", i);
        // add value of hour to the form content incase i need it?????????
        myForm.attr("data-value", i);
        button.attr("data-value", i);



        // compare against moment time and give background class accordingly
        if ($(".text").attr("data-value") == currentHour) {
            $(".text").addClass("present");
        }
        else if ($(".text").attr("data-value") > currentHour) {
            $(".text").addClass("future");
        }
        else if ($(".text").attr("data-value") < currentHour) {
            $(".text").addClass("past");
        }


        // convert from military time to regular time and add am/pm to display on the side
        if (i > 12) {
            hour.text(i - 12 + " PM");
        }
        else if (i == 12) {
            hour.text(i + " PM")
        }
        else {
            hour.text(i + " AM");
        }

        // append new elements to the container and then to each other
        $(".container").append(row);
        row.append(hour);
        row.append(textColumn);
        row.append(button);
        button.append(icon);
        textColumn.append(myForm);
    }



    var plans = [];

   

    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        var x = $(this).siblings()[1][0];
        var dataV = (x.getAttribute("data-value"))
        var planText = x.value.trim();
        console.log(planText)
        var obj = {[planText] : [dataV] }
        console.log(obj)
        plans.push(obj);
        storePlans();
    });


    function init() {
            // Check if there are highscores in localStorage
            // Parse the value from localStorage and assign it to the highscores variable
        let storedPlans = JSON.parse(localStorage.getItem("plans"));
            // check if local storage is empty
        if (storedPlans !== null) {
            // reassign array to stored values
            plans = storedPlans;
        }
    }

    // // store scores in local storage
    function storePlans() {
        //     // stringify the highscore array and save it in localStorage
        localStorage.setItem("plans", JSON.stringify(plans));
        // }
    }

});