'use strict';

var FoxxApplication = require("org/arangodb/foxx").Application;

var app = new FoxxApplication(applicationContext);

app.get("/", function(req, res) {
    res.set("Content-Type", "text/plain");
        res.body = "<%= foxxName %> Worked!"
});

