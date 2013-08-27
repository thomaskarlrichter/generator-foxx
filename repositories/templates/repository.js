/*jslint indent: 2, nomen: true, maxlen: 100 */
/*global require, exports */

////////////////////////////////////////////////////////////////////////////////
/// @brief A Repository for <%= name %>es
///
/// @file <%= name %>.js
///
/// DISCLAIMER
///
/// @author <%= manifest.author %>
/// @copyright <%= manifest.copyright %>
////////////////////////////////////////////////////////////////////////////////

(function () {
  "use strict";

  var _ = require("underscore"),
    Foxx = require("org/arangodb/foxx"),
    <%= name %>;

  Todos = Foxx.Repository.extend({
    // Create a new Todo in the collection
    create: function (raw<%= name %>) {
      var <%= name %> = new this.modelPrototype(raw<%= name %>);
      return this.collection.save(<%= name %>.forDB());
    },

    // Remove one object from the collection
    destroy: function (id) {
      return this.collection.remove(id);
    },

    // Display all elements in the collection
    list: function () {
      return _.map(this.collection.toArray(), function (raw<%= name %>) {
        var <%= name %> = new this.modelPrototype(raw<%= name %>);
        return <%= name %>.forClient();
      }, this);
    },

    // Replace one document
    update: function (id, content) {
      var <%= name %> = new this.modelPrototype(content);
      return this.collection.replace(id, todo.forDB());
    }
  });

  exports.Repository = <%= name %>;
}());
