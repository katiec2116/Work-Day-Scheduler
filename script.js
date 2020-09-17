// display surrent time 
// slick evenet to save text area content to local storage
// when app opens display content for each block from local storage


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
// var saveBtn = $("<button>")

var currentHour = moment().hour();

// Create  9 columns with 3 rows
for (i = 0; i< 9; i++){
    // create row fo each hour and 3 columns

    var row = $("<form>");
    var hour = $("<div>");
    var button = $("<button>");
    var textContent = $("<div>");


}