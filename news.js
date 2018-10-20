var erBase = require("eventregistry");

var er = new erBase.EventRegistry({apiKey: "0cfa9b02-9e6f-4675-a59f-8a9722e52415"});

console.log("amen");
er.getConceptUri("George Clooney").then((conceptUri) => {
    var q = new erBase.QueryArticlesIter(er, {conceptUri: conceptUri, sortBy: "date"});
    q.execQuery((item) => {
        console.log(item);
    })
});
