
var APIKey = "VAPqVHTn1B0azfCnmll5YUg2TIsvHlHR";
var APIquery = $('#searchP')
var articleURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + APIquery + "&api-key=" + APIKey;


$.ajax({
    url: articleURL,
    method: "GET"
}).then(function(response){
    console.log(response)
})
 