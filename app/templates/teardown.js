/*jslint indent: 2, nomen: true, maxlen: 100, white: true, plusplus: true, unparam: true */
/*global todos*/
/*global require, applicationContext*/

////////////////////////////////////////////////////////////////////////////////
/// @brief A TODO DEscription Template
///
/// @file teardown.js
///
/// DISCLAIMER
///
//
/// @author TODO AUTHOR
/// @author Copyright TODO COPY
////////////////////////////////////////////////////////////////////////////////


(function() {
  "use strict";
  var db = require("org/arangodb").db,
    TODO = applicationContext.collectionName("TODO"),
    collection = db._collection(TODO);
    // ->

  if (collection !== null) {
    collection.drop();
    // -->
  }
}());