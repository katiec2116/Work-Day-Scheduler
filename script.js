// display surrent time 
// slick evenet to save text area content to local storage
// when app opens display content for each block from local storage


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
// var saveBtn = $("<button>")

var currentHour = moment().hour();

// Create  9 columns with 3 rows
for (i = 0; i< 9; i++){

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



}