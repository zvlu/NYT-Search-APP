var articleURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + APIquery + "&fq=" + APIKey
var APIKey = "1a6f238b-106c-4d68-9c6e-c3629e6c9a00"
var APIquery = "cars"

$.ajax({
    url: articleURL + APIquery + APIKey
    method: "GET"
}).then(function(response){
    console.log(response)
})
 