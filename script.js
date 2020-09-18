// display surrent time 
// slick evenet to save text area content to local storage
// when app opens display content for each block from local storage

// $(document).ready(function () {


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
        // textarea
        var myForm = $("<textarea>");


        // add classes to each element created  and format row width
        row.addClass("row");
        hour.addClass("col-md-1 time-block hour");
        button.addClass("saveBtn col-md-1");
        textColumn.addClass("col-md-9 text");
        icon.addClass("fas fa-save");
        myForm.addClass("plan");
        myForm.attr("id", i);


        // add value of hour in military time to the row
        row.attr("data-value", i);
        // add value of hour to the text content area to compare against current time
        textColumn.attr("data-value", i);
        // add value of hour to the form content incase i need it?????????
        myForm.attr("data-value", i);
        button.attr("data-value", i);


        // append new elements to the container and then to each other
        $(".container").append(row);
        row.append(hour);
        row.append(textColumn);
        row.append(button);
        button.append(icon);
        textColumn.append(myForm);


        // compare against moment time and give background class accordingly
        if ($(".text").attr("data-value") == currentHour) {
            $(".text").addClass("present");
        }
        else if ($(".text").attr("data-value") > currentHour) {
            $(".text").addClass("future");
        }
        else  {
            $(".text").addClass("past");
        }


        // convert from military time to regular time and add am/pm to display on the side
        if (i > 12) {
            hour.text(i - 12 + " PM");
        }
        else if (i == 12) {
            hour.text(i + " PM");
        }
        else {
            hour.text(i + " AM");
        }
    }

 

    // submit the form and save the text content for that hour
     $(".saveBtn").on('click',function(e){
        e.preventDefault();
        // pull the hour value from the data-value attribute of the button
        var btnHour = $(this).attr("data-value");
        // test
        console.log(btnHour);
        // get the textarea value that has id = same hour
        var enteredData = document.getElementById(btnHour).value;
 

        // Set the hour to the local storage key and then stringify 
        localStorage.setItem(btnHour, JSON.stringify(enteredData))
    })



