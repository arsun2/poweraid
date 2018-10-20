var request = require('request');
console.log("Am here");
request.get({
   url: "http://eventregistry.org/api/v1/event/getEvents",
   qs: {
   "query": "{\"$query\":{\"$and\":[{\"$or\":[{\"keyword\":\"hurricane\",\"keywordLoc\":\"title\"},{\"keyword\":\"flood\",\"keywordLoc\":\"title\"},{\"keyword\":\"earthquake\",\"keywordLoc\":\"title\"},{\"keyword\":\"tsunami\",\"keywordLoc\":\"title\"}]},{\"$or\":[{\"categoryUri\":\"dmoz/Science/Earth_Sciences/Natural_Disasters_and_Hazards\"},{\"categoryUri\":\"dmoz/Society/Philanthropy/Disaster_Relief_and_Recovery\"}]},{\"lang\":\"eng\"}]}}",
   "action": "getEvents",
   "resultType": "events",
   "eventsSortBy": "date",
   "eventsCount": 50,
   "includeEventArticlecounts": false,
   "eventImageCount": 1,
   "storyImageCount": 1,
   "apiKey": "0cfa9b02-9e6f-4675-a59f-8a9722e52415"
}
}, function(error, response, body) {
   body = JSON.parse(body);
   console.log(body);
});
