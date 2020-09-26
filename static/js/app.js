// from data.js
// Assign the data from `data.js` to a descriptive variable
var sightings = data;
// YOUR CODE HERE!
// Get a reference to the table body*/
var tbody = d3.select("tbody");
// Console.log the ufo data from data.js
sightings.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.values(sighting).forEach((value) => {
    var cell = row.append("td");
      cell.text(value);
    });
  });
  console.log("");

   // Getting a reference to the button on the page with the id property set to `Filter btn. Example Activity 4 'clickme'`
var button = d3.select("#filter-btn");
// Create event handlers 
button.on("click", runEnter);
console.log("The filter button was clicked");
// Get the value property of the input element


// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime")
  var inputValue = inputElement.property("value");
  console.log(inputValue);
 
  tbody.html("");

var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);
console.log("");

filteredData.forEach((sighting) => {
  var row = tbody.append("tr");
  Object.values(sighting).forEach((value) => {
  var cell = row.append("td");
    cell.text(value);
  });
});
console.log("");
}
