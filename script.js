// display surrent time 
// slick evenet to save text area content to local storage
// when app opens display content for each block from local storage


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
// var saveBtn = $("<button>")

var currentHour = moment().hour();

// Create  9 columns with 3 rows
for (i = 9; i< 18; i++){

    // create row for each hour
    var row = $("<form>");
    // first column
    var hour = $("<div>");
    // last column (button)
    var button = $("<button>");
    // middle column
    var textContent = $("<div>");

    // add classes to each element created  and format row width
    row.addClass("row");
    hour.addClass("col-md-1 time-block hour");
    button.addClass("saveBtn col-md-1");
    textContent.addClass("col-md-9");

    // add value of hour in military time to the row
    row.attr("data-value", i);
    // convert from military time to regular time and add am/pm
    if (i > 12){
        hour.text(i -12 + " PM");
        }
        else if (i == 12){
            hour.text(i + " PM")
        }
        else {
            hour.text(i + " AM");
        }


    $(".container").append(row);
    row.append(hour);
    row.append(textContent);
    row.append(button);
}