var request = require('request');
var topCauses = [];
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
   "apiKey": "f558f072-c5d6-4967-a609-76c206b772ee"
}
}, function(error, response, body) {
   body = JSON.parse(body);
   for(var i = 0; i < 5; i++){
     topCauses.push(body.events.results[i]);
   }
   console.log(topCauses);
});

while (document.readyState !== "complete") {
  setInterval(100);
}

var myCard = document.getElementById("popCause");
myCard.innerHTML = displayContents(topCauses);


function displayContents(recentCauses){
  var causeHtml = '';
  for(var i = 0; i < topCauses.length; i++){
    causeHtml +=
      "<div class='card'>" +
        "<div class='card-body'>" +
          "<a href=''><h6>" + topCauses[i].title + "<span class ='card-location'>" + topCauses[i].location + "</span></h6></a>" +
          "<hr style='padding: 0 !important;'/>" +
          "<div class='card-body-buttons'>" +
            "<button type='button' class='btn btn-outline-success'>Donate</button>" +
          "</div>" +
        "</div>" +
      "</div>";
  }
  return causeHtml;
}
