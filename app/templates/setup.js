/*jslint indent: 2, nomen: true, maxlen: 100, white: true, plusplus: true, unparam: true */
/*global todos*/
/*global require, applicationContext*/

////////////////////////////////////////////////////////////////////////////////
/// @brief A TODO Description Template
///
/// @file setup.js
///
/// DISCLAIMER
///
//
/// @author TODO AUTHOR
/// @author Copyright TODO COPY
////////////////////////////////////////////////////////////////////////////////



(function() {
  "use strict";
  var console = require("console"),
    db = require("org/arangodb").db,
    TODO = applicationContext.collectionName("TODO");
    // -->

  if (db._collection(TODO) === null) {
    db._create(TODO);
    //  -->
  } else if (applicationContext.isProduction) {
    console.warn("collection '%s' already exists. Leaving it untouched.", TODO);
  }
}());