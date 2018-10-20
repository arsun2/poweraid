var request = require('request');
request.get({
    url: "http://eventregistry.org/api/v1/event/getEvents",
    qs: {
        "resultType": "events", // ??
        "keyword": [
            "earthquake",
            "tsunami",
            "hurricane",
            "flood"
        ],
        "keywordLoc": "title", // ??
        "lang": "eng",
        "eventsSortBy": "date",
        "includeEventCategories": true,
        "eventsCount": 30, // default=50
        "apiKey": "0cfa9b02-9e6f-4675-a59f-8a9722e52415",
        "ignoreCategoryUri": "",
}},
    function(error, response, body) {
        //body = JSON.parse(body);
        console.log(body);
});
