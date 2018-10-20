console.log("hello");
/*
var fs = require('fs');
var erBase = require("eventregistry");

var er = new erBase.EventRegistry(/*{apiKey: "0cfa9b02-9e6f-4675-a59f-8a9722e52415"});

console.log("hi");

er.getConceptUri("George Clooney").then((conceptUri) => {
    var q = new erBase.QueryArticlesIter(er, {conceptUri: conceptUri, sortBy: "date"});
    q.execQuery((item) => {
        console.log(item);
    })
}); */

var request = require('request');
request.get({
    url: "http://eventregistry.org/api/v1/article/getArticles",
    qs: {
        "resultType": "articles",
        "keyword": [
                "Bitcoin",
                "Ethereum",
                "Litecoin"
        ],
        "keywordOper": "or",
        "lang": "eng",
        "articlesSortBy": "date",
        "includeArticleConcepts": true,
        "includeArticleCategories": true,
        "articleBodyLen": 300,
        "articlesCount": 10,
        "apiKey": "0cfa9b02-9e6f-4675-a59f-8a9722e52415"
}},
    function(error, response, body) {
        //body = JSON.parse(body);
        console.log(body);
});
