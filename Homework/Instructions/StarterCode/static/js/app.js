// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
console.log(data);

 // Loop Through `data` and console.log each weather report object
data.forEach(function(weatherReport) {
   console.log(weatherReport);
 });

 // Use d3 to append one table row `tr` for each weather report object
 data.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr");

//  Use `Object.entries` to console.log each weather report value and text to the cells
    Object.entries(ufo).forEach(function([key, value]) {
     console.log(key, value);
     var cell = row.append("td")
     cell.text(value);
    });
});

// Get a reference to the table body
// Create filter
var tbody = d3.select("tbody");
var button_filter = d3.select("#filter-btn");

button_filter.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("")

      // Select the input element and get the raw HTML node
    var date_time = d3.select("#datetime");

      // Get the value property of the input element
    var our_input = date_time.property("value");

    var filteredData = tableData.filter(seeing_ufo => seeing_ufo.datetime === our_input);

 // Loop Through `data` and console.log each weather report object
filteredData.forEach(function(ufo) {
   console.log(ufo);
 });

  // Use d3 to append one table row `tr` for each weather report object
 filteredData.forEach(function(ufo) {
   console.log(ufo);
   var row = tbody.append("tr");

   //  Use `Object.entries` to console.log each weather report value and text to the cells
    Object.entries(ufo).forEach(function([key, value]) {
     console.log(key, value);
     var cell = row.append("td")
     cell.text(value);
   });
 });
})
