from eventregistry import *
er = EventRegistry(apiKey ="0cfa9b02-9e6f-4675-a59f-8a9722e52415")
q = QueryEvents(conceptUri = er.getConceptUri("Star Wars"))
q.setRequestedResult(RequestEventsInfo(sortBy = "date", count=10))   # return event details for last 10 events
print(er.execQuery(q))