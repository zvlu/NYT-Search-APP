
var apiKey = "VAPqVHTn1B0azfCnmll5YUg2TIsvHlHR";
var searchAPI = $('#searchP')
var numRecords = $('#numRecords').value
var startYear = $('#startYear')
var articleURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchAPI + "&api-key=" + apiKey;

console.log(numRecords)
$.ajax({
    url: articleURL,
    method: "GET"
}).then(function(response){
    console.log(response)
})
 