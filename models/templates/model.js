/*jslint indent: 2, nomen: true, maxlen: 100 */
/*global require, exports */

////////////////////////////////////////////////////////////////////////////////
/// @brief A <%= name %> model
///
/// @file
///
/// DISCLAIMER
///
/// @author
/// @author
////////////////////////////////////////////////////////////////////////////////

(function () {
  "use strict";
  var Foxx = require("org/arangodb/foxx"),
    <%= name %>;

  // Currently you could use the normal model, but for demo purposes
  <%= name %> = Foxx.Model.extend({
  });

  exports.Model = <%= name %>;
}());

