window.addEventListener("DOMContentLoaded", function(event) {
  var request = require('request');
  var $ = require('jquery');

  var topCauses = [];
  var causeHtml = '';
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

     for(var i = 0; i < topCauses.length; i++){
       console.log(topCauses[i]);
       causeHtml +=
         "<div class='card'>" +
           "<div class='card-body'>" +
             "<a href=''><h6>" + topCauses[i].title.eng + "<span class ='card-location'>" +
             (topCauses[i].location != null ? (topCauses[i].location.label != null ? topCauses[i].location.label.eng : "") : "") +
             "</span></h6></a>" +
             "<hr style='padding: 0 !important;'/>" +
             "<div class='card-body-buttons'>" +
               "<button type='button' class='btn btn-outline-success'><a href='https://donate.worldvision.org/give/disaster-relief' target='_blank'>Donate</a></button>" +
             "</div>" +
           "</div>" +
         "</div>";
     }
     $('#popCause').html(causeHtml);
     console.log(causeHtml);
     console.log(topCauses);
  });


});
