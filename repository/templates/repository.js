/*jslint indent: 2, nomen: true, maxlen: 100 */
/*global require, exports */

////////////////////////////////////////////////////////////////////////////////
/// @brief A
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

  var _ = require("underscore"),
    Foxx = require("org/arangodb/foxx"),
    Todos;

  Todos = Foxx.Repository.extend({
    // Create a new Todo in the collection
    create: function (rawTodo) {
      var todo = new this.modelPrototype(rawTodo);
      return this.collection.save(todo.forDB());
    },

    // Remove one object from the collection
    destroy: function (id) {
      return this.collection.remove(id);
    },

    // Display all elements in the collection
    list: function () {
      return _.map(this.collection.toArray(), function (rawTodo) {
        var todo = new this.modelPrototype(rawTodo);
        return todo.forClient();
      }, this);
    },

    // Replace one document
    update: function (id, content) {
      var todo = new this.modelPrototype(content);
      return this.collection.replace(id, todo.forDB());
    }
  });

  exports.Repository = Todos;
}());

// This is a file copied by your subgenerator.
