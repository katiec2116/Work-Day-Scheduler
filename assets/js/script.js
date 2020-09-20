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

    // add value of hour to the text content area to compare against current time
    textColumn.attr("data-value", i);
    // add value of hour to the button to store as key when clicked
    button.attr("data-value", i);


    // append new elements to the container and then to each other
    $(".container").append(row);
    row.append(hour);
    row.append(textColumn);
    row.append(button);
    button.append(icon);
    textColumn.append(myForm);


    // compare against moment time and give background class accordingly
    if (textColumn.attr("data-value") == currentHour) {
        textColumn.addClass("present");
    }
    else if (textColumn.attr("data-value") > currentHour) {
        textColumn.addClass("future");
    }
    else {
        textColumn.addClass("past");
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

for (s = 0; s < localStorage.length; s++) {
    // get hour by getting the key a the index
    var hourValue = localStorage.key(s);
    // get value of our variable keyName
    var formText = localStorage.getItem(hourValue);
    // get rid of quotes
    formText = formText.replace(/\"/g, "");
    // get text area element with the id that matches the stored key value
    // set value of that textarea to the value from local storage
    var storedPlans = document.getElementById(hourValue);
    storedPlans.value = formText;
}


// submit the form and save the text content for that hour
$(".saveBtn").on('click', function (e) {
    e.preventDefault();
    // pull the hour value from the data-value attribute of the button
    var btnHour = $(this).attr("data-value");
    // test
    console.log(btnHour);
    // get the textareathat has the same value
    var enteredData = document.getElementById(btnHour).value;
    // Set the hour as thr local storage key and stringify 
    localStorage.setItem(btnHour, JSON.stringify(enteredData))
})



